/**
 * Created by sandeepkumar on 22/02/17.
 */
import React from 'react';

const ListItem = ({item}) => {
  return (
    <div className="list-group">
      <a href={item._source.url} target="_new" className="list-group-item">
        <div className="col-md-12">
          <h4 className="list-group-item-heading"> {item._source.title} <span className="badge">Score : {item._score}</span> </h4>
          <p className="list-group-item-text">{item._source.content}</p>
        </div>
      </a>
    </div>
  );
};

export default ListItem;