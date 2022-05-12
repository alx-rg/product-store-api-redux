import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedItem } from "../../redux/actions/itemsActions"
import { Card, CardHeader, Grid, IconButton, Paper } from "@mui/material";
import { Shop2Outlined } from "@mui/icons-material";


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
      <Grid container sx={{ margin: 2, borderRadius: 10, padding: 2 }}>
        <Grid items sm={12} md={6}>
            <Card sx={{ margin: 2, borderRadius: 10, padding: 2 }}>
              <CardHeader>
                action={
                  <IconButton>
                    <Shop2Outlined />
                  </IconButton>
                }
              </CardHeader>
              <div>
              <h1>{title}</h1>
              <h2>
                  ${price}
              </h2>
              <h3>{category}</h3>
              <p>{description}</p>
            </div>
            </Card>
        </Grid>
        <Grid items sm={12} md={6} >
          <Paper sx={{ borderRadius: 10}}><img style={{
            borderRadius: 80 }} className="ui fluid image" src={image} alt="" /></Paper>
        </Grid>
      </Grid>
 
  );
}

export default ItemDetails