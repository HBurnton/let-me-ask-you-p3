import React from 'react'
// import Logo from '../assets/images/lmay-logo.png';
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


import '../assets/css/Home.css';
import { Banner } from '../components/Banner';
import { AddPost } from '../components/AddPost';
// import { FeedCaro } from '../components/FeedCaro';
import { Posts } from '../components/Posts';



export const Home = () => {
  // const [italic, setItalic] = React.useState(false);
  // const [fontWeight, setFontWeight] = React.useState('normal');
  // const [anchorEl, setAnchorEl] = React.useState(null);



  return (
    <div>
    <Banner />
    <AddPost />
    <Posts />


    {/* <FeedCaro />
    <span className='tagline'>WELCOME</span>
    <Box sx={{ '& > :not(style)': { m: 2 } }} className='add-icon'>
      <Fab color="white" aria-label="add">
        <AddIcon />
      </Fab>
    <FormLabel>ADD QUESTION</FormLabel>
    </Box>
    <div className='container-sm'>
    <FormControl className='form-structure'>
      <Textarea
        placeholder="Type something here…"
        minRows={3}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <IconButton
              variant="plain"
              color="neutral"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <FormatBold />
              <KeyboardArrowDown fontSize="md" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              size="sm"
              placement="bottom-start"
              sx={{ '--List-decorator-size': '24px' }}
            >
              {['200', 'normal', 'bold'].map((weight) => (
                <MenuItem
                  key={weight}
                  selected={fontWeight === weight}
                  onClick={() => {
                    setFontWeight(weight);
                    setAnchorEl(null);
                  }}
                  sx={{ fontWeight: weight }}
                >
                  <ListItemDecorator>
                    {fontWeight === weight && <Check fontSize="sm" />}
                  </ListItemDecorator>
                  {weight === '200' ? 'lighter' : weight}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              variant={italic ? 'soft' : 'plain'}
              color={italic ? 'primary' : 'neutral'}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FormatItalic />
            </IconButton>
            <Button sx={{ ml: 'auto' }}>SEND</Button>
          </Box>
        }
        sx={{
          minWidth: 300,
          fontWeight,
          fontStyle: italic ? 'italic' : 'initial',
        }}
      />
    </FormControl>
    </div> */}
    </div>
  );
}




