import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {GiLargeDress, GiHairStrands, GiDropEarrings, GiWinterHat, GiRolledCloth} from  'react-icons/gi';
import {FaTshirt} from  'react-icons/fa';
import {BsSunglasses, BsFillSuitHeartFill} from 'react-icons/bs'


export default function BasicList() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '50%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
            <ListItemIcon>
                <GiLargeDress />
            </ListItemIcon>
              <ListItemText primary="Vestidos" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <FaTshirt />
              </ListItemIcon>
              <ListItemText primary="Camisas" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <GiWinterHat />
              </ListItemIcon>
              <ListItemText primary="Gorros" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <GiRolledCloth />
              </ListItemIcon>
              <ListItemText primary="Turbantes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <BsSunglasses />
              </ListItemIcon>
              <ListItemText primary="Gafas" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemIcon>
                <BsFillSuitHeartFill />
              </ListItemIcon>
              <ListItemText primary="Pride" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}
            >
              <ListItemIcon>
                <GiHairStrands />
              </ListItemIcon>
              <ListItemText primary="Cabello" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}
            >
              <ListItemIcon>
                <GiDropEarrings />
              </ListItemIcon>
              <ListItemText primary="Accesorios" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}