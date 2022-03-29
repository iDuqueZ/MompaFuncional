import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export default function ListAdmin() {
return(
    <React.Fragment>
        <ListItemButton>
        <ListItemIcon>
            
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            
        </ListItemIcon>
        <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            
        </ListItemIcon>
        <ListItemText primary="Productos" />
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            
        </ListItemIcon>
        <ListItemText primary="Reports" />
        </ListItemButton>
       
    </React.Fragment>
  );
}