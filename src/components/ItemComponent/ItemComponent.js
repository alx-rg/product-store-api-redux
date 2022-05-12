import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PriceIcon from '@mui/icons-material/AttachMoney'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Rating } from '@mui/material';

const ItemComponent = () => {
  const theme = useTheme();
  const items = useSelector((state) => state.allItems.items);
  console.log(typeof items)
  
  const mapItemList = items.map((item ) => {
    const { id, title, image, price, category, rating } = item;
    return (

      <Card sx={{ display: 'flex', margin: 1, width: 300, borderRadius: 10, padding: 2 }}>
      <Link to={`/item/${id}`}>
        <CardMedia
          component="img"
          sx={{ height: 201, borderRadius: 10 }}
          image={image}
          alt={title}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.primary" component="div">
              <PriceIcon sx={{ height: 20}} /> {price}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {category} 
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              <Rating name="half-rating" defaultValue={rating.rate} precision={0.5}  />
            </Typography>
          </CardContent>
        </Box>
  
      </Link>
      </Card>
    )
  });
  return <>{mapItemList}</>
}

export default ItemComponent