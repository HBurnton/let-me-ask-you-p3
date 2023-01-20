import React from 'react'
import Logo from '../assets/images/lmay-logo.png';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Textarea from '@mui/joy/Textarea';
// import IconButton from '@mui/joy/IconButton';
// import Menu from '@mui/joy/Menu';
// import MenuItem from '@mui/joy/MenuItem';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import FormatBold from '@mui/icons-material/FormatBold';
// import FormatItalic from '@mui/icons-material/FormatItalic';
// import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
// import Check from '@mui/icons-material/Check';
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';

import { Box, useMediaQuery } from "@mui/material";
import '../assets/css/Home.css';
import { Banner } from '../components/Banner';
import { AddPost } from '../components/AddPost';
// import { FeedCaro } from '../components/FeedCaro';
import { Posts } from '../components/Posts';
import { UserWidget } from '../components/UserWidget';
import { AdvertWidget } from '../components/utils/AdvertWidget';



export const Home = () => {
  // const [italic, setItalic] = React.useState(false);
  // const [fontWeight, setFontWeight] = React.useState('normal');
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");



  return (
    <div>
    <Banner />
    <Box>
      <Box
          width="100%"
          padding="2rem 6%"
          display={isNonMobileScreens ? "flex" : "block"}
          gap="0.5rem"
          justifyContent="center"
          sx={{border: "white"}}
        >
          <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
            <UserWidget  picturePath={Logo} />
          </Box>
          <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
          > 
          <AddPost />
          <Posts />
          </Box>
          {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
          </Box>
          )}
        </Box>
    </Box>
    </div>
  );
}




