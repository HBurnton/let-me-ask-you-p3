import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_QUESTIONSBYUSERID} from '../utils/queries';
import {
    ManageAccountsOutlined,
  } from "@mui/icons-material";
import { Box, Typography, Divider } from "@mui/material";
import {UserImage} from "./utils/UserImage";
import {FlexBetween} from "./utils/FlexBetween";
import {WidgetWrapper} from "./utils/WidgetWrapper";
import Auth from "../utils/auth"
import pfp from '../assets/images/dummypfp.png';

  export const UserWidget = () => {
    // const dark = "black";
    const medium = "grey";
    const main = "white";
    const { loading, data } = useQuery(QUERY_QUESTIONSBYUSERID,
      {
        variables: { author: Auth.getUser().data._id },
      })
    console.log(data?.questionsByUserId.length)

    const [questionAsked, setQuestionsAsked] = useState()

    const [username, setUsername] = useState((Auth.getUser().data.username));
    
    return (
      <WidgetWrapper>
        <h3>My Profile:</h3>
        {/* FIRST ROW */}
        <FlexBetween
          gap="0.5rem"
          pb="1.1rem"
        >
          <FlexBetween gap="1rem">
            <UserImage image={pfp} />
            <Box>
              <Typography
                variant="h4"
                color={main}
                fontWeight="500"
                sx={{
                  "&:hover": {
                    color: "blue",
                    cursor: "pointer",
                  },
                }}
              >
                {username}
              </Typography>
              <Typography color={medium}>Question Count:
              <Typography color={main}>{data?.questionsByUserId.length}</Typography>
              
              </Typography>
            </Box>
          </FlexBetween>
          <ManageAccountsOutlined />
        </FlexBetween>
  
        <Divider />
  
        {/* SECOND ROW */}
        <Box p="1rem 0">
          <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          </Box>
        </Box>
  
        <Divider />
  
        {/* THIRD ROW
        <Box p="1rem 0">
          <FlexBetween mb="0.5rem">
            <Typography color={medium}>Who's viewed your profile</Typography>
            <Typography color={main} fontWeight="500">
             3,412
            </Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography color={medium}>Impressions of your post</Typography>
            <Typography color={main} fontWeight="500">
              7,865
            </Typography>
          </FlexBetween>
        </Box>
        <Divider />
         */}
        
      </WidgetWrapper>
    );
  };
