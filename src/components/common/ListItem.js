/**
 * Created by sandeepkumar on 22/02/17.
 */
import React, {PropTypes} from 'react';

const ListItem = ({item}) => {
  return (
    <div className="list-group">
      <a href="#" className="list-group-item">
        <div className="col-md-12">
          <h4 className="list-group-item-heading"> {item._source.name} <span className="badge">Score : {item._score}</span> </h4>
          <p className="list-group-item-text">{item._source.text}</p>
        </div>
      </a>
    </div>
  );
};

export default ListItem;