import React from 'react';

const Item = (props) => {
  return (
    <div className="item">
      <div className="logo"></div>

      <div className="name">
        <p>{props.name}</p>
        <img src={props.logo} alt={props.name} />
        <p className="price">{props.price}</p>
        <p className="thumbnail-text">{props.text}</p>
        <div className="link">
          <p>{props.link}</p>
        </div>
        <div className="tags">{props.tags.join(', ')}</div>
      </div>
    </div>
  );
};

export default Item;
