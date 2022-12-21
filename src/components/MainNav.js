import React, { useEffect } from 'react';
 import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/chat");
    } else if (value === 2) {
      history.push("/search");
    } 
  }, [value, history]);

  return (
    <Box sx={{ width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
         <BottomNavigationAction
        style={{ color: "red" }}
        label="Top rated"
        icon={<WhatshotIcon />}
      />
       <BottomNavigationAction
        style={{ color: "red" }}
        label="Chat"
        icon={<ChatIcon />}
      />
        <BottomNavigationAction
        style={{ color: "red" }}
        label="Search"
        icon={<SearchIcon />}
      />
      </BottomNavigation>
    </Box>
  );
}