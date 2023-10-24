 
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ToggleBtn from './ToggleButton';
import '../App.css';
import DataContext from '../Contexts/DataContext';
import { useContext } from 'react';

const Cards = () => {

  const {data} = useContext(DataContext);
 
  const cardStyle = {
    backgroundColor: data ? '#292929' : '#dfdfdf',
    color: data ? 'white': '#292929',
  };
  
  return (
    
    <Card className='theme' sx={{ maxWidth: 345, ...cardStyle}}>
    <CardHeader
      className='theme'
      sx={{...cardStyle}}
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <ToggleBtn />
      }
      title="Chorizo Paella September 14, 2016"
      subheader=""
    />
    <CardMedia
      component="img"
      height="194"
      image="https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" className='theme' color="text.secondary" sx={{...cardStyle}}>
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon sx={{...cardStyle}} />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon sx={{...cardStyle}}  />
      </IconButton>

    </CardActions>
    <Collapse  timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph className='theme'>Method:</Typography>
        <Typography paragraph className='theme'>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
          aside for 10 minutes.
        </Typography>
        <Typography paragraph className='theme'>
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
          medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
          occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
          large plate and set aside, leaving chicken and chorizo in the pan. Add
          pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
          stirring often until thickened and fragrant, about 10 minutes. Add
          saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
        </Typography>
        <Typography paragraph className='theme'>
          Add rice and stir very gently to distribute. Top with artichokes and
          peppers, and cook without stirring, until most of the liquid is absorbed,
          15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
          mussels, tucking them down into the rice, and cook again without
          stirring, until mussels have opened and rice is just tender, 5 to 7
          minutes more. (Discard any mussels that don&apos;t open.)
        </Typography>
        <Typography className='theme'>
          Set aside off of the heat to let rest for 10 minutes, and then serve.
        </Typography>
      </CardContent>
    </Collapse>
  </Card>
  )
}

export default Cards