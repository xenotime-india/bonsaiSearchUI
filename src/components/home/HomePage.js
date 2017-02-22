import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from '../common/Header';
import SearchTextBox from '../common/SearchTextBox';
import {bindActionCreators} from 'redux';
import * as searchActions from '../../actions/searchActions';
import ListItem from '../common/ListItem';
import {browserHistory} from 'react-router';

export class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      searchText: '',
      errors: {},
      initState: true,
    };

    this.updateSearchTextState = this.updateSearchTextState.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  updateSearchTextState(event) {
    let searchText = event.target.value;
    return this.setState({ searchText: searchText });
  }

  onSearch(event) {
    event.preventDefault();
    this.props.actions.search(this.state.searchText);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.onSearch(event);
    }
  }

  render() {
    return (
      <div>
          <div id="custom-search-input" className="row">
            <Header/>
            <SearchTextBox onKeyPress={this.handleKeyPress} onSearch={this.onSearch} onChange={this.updateSearchTextState} value={this.state.searchText}/>
          </div>
          <hr/>
          <div className="row">
            {this.props.searchResults.map((item) => {
              return <ListItem key={item._id} item={item}/>
            })}
          </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    searchResults: state.searchResults
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);