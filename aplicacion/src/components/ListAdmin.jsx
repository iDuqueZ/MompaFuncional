import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {MdDashboard} from '@react-icons/all-files/md/MdDashboard';
import {BsFillBagFill} from '@react-icons/all-files/bs/BsFillBagFill';
import {AiFillDatabase} from '@react-icons/all-files/ai/AiFillDatabase';
 
 
export default function ListAdmin() {

  function Dash(e) {
    e.preventDefault();
    window.location.href="/Dashboard";
}

function Pedidos(e) {
  e.preventDefault();
  window.location.href="/Pedidos";
}

function Inventario(e) {
  e.preventDefault();
  window.location.href="/Inventario";
}

return(
    <React.Fragment>
        <ListItemButton onClick={Dash}>
        <ListItemIcon style={{marginLeft: '5px', marginRight: '-20px'}}>
            <MdDashboard/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton onClick={Pedidos}>
        <ListItemIcon style={{marginLeft: '5px', marginRight: '-20px'}}>
            <BsFillBagFill/>
        </ListItemIcon>
        <ListItemText primary="Pedidos" />
        </ListItemButton>
        <ListItemButton onClick={Inventario}>
        <ListItemIcon style={{marginLeft: '5px', marginRight: '-20px'}}>
            <AiFillDatabase/>
        </ListItemIcon>
        <ListItemText primary="Inventario" />
        </ListItemButton>
       
    </React.Fragment>
  );
}