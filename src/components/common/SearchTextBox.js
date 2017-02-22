/**
 * Created by sandeepkumar on 22/02/17.
 */
import React, {PropTypes} from 'react';

const SearchTextBox = ({onSearch, onChange, value, onKeyPress}) => {
  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="input-group col-sm-12 col-md-10">
        <input type="text" className="search-query form-control" onKeyPress={onKeyPress} placeholder="Search" onChange={onChange} value={value}/>
        <span className="input-group-btn">
        <button className="btn btn-danger" type="button" onClick={onSearch}>
        <span className=" glyphicon glyphicon-search"></span>
        </button>
        </span>
        </div>
        <div className="col-md-1"></div>
    </div>
  );
};

export default SearchTextBox;
