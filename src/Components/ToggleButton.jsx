import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../App.css';
import React, {useContext} from 'react';
import DataContext from '../Contexts/DataContext';


const ToggleBtn = () => {

    const {setData} = useContext(DataContext);
    
    const handleDarkMode = () => {
      setData(true)
    }

    const handleLightMode = () => {
      setData(false)
    }


    const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
    color="primary"
    exclusive
    value={alignment}
    onChange={handleChange}
    aria-label="Platform"
  >
    <ToggleButton onClick={handleDarkMode} style={{height:"3vh", width:"5vw", color:"#fff", background: "#BB86FC", margin: ".5vw" }} value="dark">D</ToggleButton>
    <ToggleButton onClick={handleLightMode} style={{height:"3vh", width:"5vw",color:"#fff", background: "#BB86FC", margin: ".5vw" }} value="light">L</ToggleButton>
  </ToggleButtonGroup>
  )
}

export default ToggleBtn