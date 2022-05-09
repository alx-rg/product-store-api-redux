import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ItemComponent = () => {
  const items = useSelector((state) => state.allItems.items);
  console.log(items)
  
  const mapItemList = items.map((item ) => {
    const { id, title, image, price, category, rating } = item;
  
    return (
      <div className="four wide column" key={id}>
        <Link to={`/item/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image"> 
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
              <div className="meta">Reviews: {rating.count} Rating: {rating.rate}</div>
            </div>
          </div>
        </div>
        <br></br>
        </Link>
        <div className="hidden content">
            <i className="shop icon"></i>
        </div>
        <div className="visible content">Add to Cart: {title}</div>
        <hr></hr>
      </div>
    )
  });
  return <>{mapItemList}</>
}

export default ItemComponent