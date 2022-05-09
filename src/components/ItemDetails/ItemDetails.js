import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedItem } from "../../redux/actions/itemsActions"


const ItemDetails = () => {
  const { itemId } = useParams();
  let item = useSelector((state) => state.item);
  const { image, title, price, category, description } = item;
  const dispatch = useDispatch();
  console.log(item)
  const fetchItemDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Error: ", err);
      });
    dispatch(selectedItem(response.data));
  };
  useEffect(() => {
    if (itemId && itemId !== "") fetchItemDetail(itemId);
  }, [itemId]);

  return (
    <div className="ui grid container">
        {Object.keys(item).length === 0 ? (
            <div className="ui active centered inline loader"></div>
        ) : (
            <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img className="ui fluid image" src={image} alt="" />
                        </div>
                        <div className="column rp">
                            <h1>{title}</h1>
                            <h2>
                                <a className="ui blue tag label">${price}</a>
                            </h2>
                            <h3 className="ui brown block header">{category}</h3>
                            <p>{description}</p>
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                                <div className="visible content">Add to Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}

export default ItemDetails