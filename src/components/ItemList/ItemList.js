import React, { useEffect } from "react";
import ItemComponent from "../ItemComponent/ItemComponent";
import { useDispatch } from "react-redux";
import { setItems } from "../../redux/actions/itemsActions";
import axios from "axios";


const ItemList = () => {
  const dispatch = useDispatch();
  const fetchItems = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error: ", err);
      });
    dispatch(setItems(response.data));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="ui container center">
      <br></br>
      <br></br>
    <h1>Products</h1>
    <div className="ui grid container">
      <ItemComponent />
    </div>
  </div>
  )
}

export default ItemList