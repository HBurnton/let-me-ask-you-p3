import React from 'react'
import {PostWidget} from "../components/utils/PostWidget";
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import { Box, Divider, IconButton, Typography, Button } from "@mui/material";
import { ChatBubbleOutlineOutlined, ShareOutlined } from "@mui/icons-material";
import {FlexBetween} from "./utils/FlexBetween";
// import {Friend} from "./Friend";
import {WidgetWrapper} from "./utils/WidgetWrapper"
import styled from "styled-components";
import {UserImage} from "./utils/UserImage";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Logo from '../assets/images/lmay-logo.png';
import { AddComment } from "./AddComment";


import { useQuery, useMutation } from '@apollo/client';
import { QUERY_QUESTIONS } from '../utils/queries';
import { UPDATE_VOTECOUNT } from '../utils/mutations';


export const Posts = () => {
  const main = "black";

  const { loading, data } = useQuery(QUERY_QUESTIONS);
  const questionList = data?.questions || [];

  const [updateVote, { error }] = useMutation(UPDATE_VOTECOUNT);
  const handleVoteUpdate = async (id) => {
    try {
      const { data } = await updateVote({
        variables: { id },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="margin-posts">
      {loading ? (
            <div>Loading...</div>
        ) : (
          <div>
          {questionList.map((question) => {
            return (
            <WidgetWrapper m="2rem 0" className="margin-posts">
                <FlexBetween>
                <FlexBetween gap="1rem">
                  <UserImage image={Logo} size="55px" />
                  <Box
                  >
                    <Typography
                      color='white'
                      variant="h5"
                      fontWeight="500"
                      sx={{
                        "&:hover": {
                          color: 'blue',
                          cursor: "pointer",
                        },
                      }}
                    >
                      {question.author.username} 
                    </Typography>
                    <Typography color="white" fontSize="0.75rem">
                      1/19/2023 4:15 P.M
                    </Typography>
                  </Box>
                </FlexBetween>
                <IconButton
                  sx={{ backgroundColor: "white", p: "0.6rem" }}
                  icon={ThumbUpIcon}

                >
                </IconButton>
              </FlexBetween>
                <Typography color={main} sx={{ mt: "1rem", backgroundColor: "white", borderRadius: "6px", padding: "25px" }}>
                {question.questionText}
                </Typography>
                <FlexBetween mt="0.25rem">
                <FlexBetween gap="1rem">
                    <FlexBetween gap="0.3rem">
                    <Typography id={question._id} onClick={() => handleVoteUpdate(question._id)} sx={{ backgroundColor: "blue", borderRadius: "6px", padding: "9px"}}>{question.voteCount} upvotes</Typography>
                    </FlexBetween>
        
                    <FlexBetween gap="0.3rem">
                    <IconButton>
                        <ChatBubbleOutlineOutlined />
                    </IconButton>
                    <Typography sx={{ backgroundColor: "blue", borderRadius: "6px", padding: "9px"}}>1 comment</Typography>
                    </FlexBetween>
                </FlexBetween>
        
                <IconButton>
                    <ShareOutlined />
                </IconButton>
                </FlexBetween>
                <Box mt="0.5rem">
                    <Box>
                    Random User 
                    <Divider />
                    <Typography sx={{ color: "black", m: "0.5rem 0", pl: "1rem", backgroundColor: "white", borderRadius: "6px", padding: "4.5px" }}>
                        this is a comment
                    </Typography>
                    </Box>
                <Divider />
                </Box>
                <AddComment />

                <HorizontalRule />
            </WidgetWrapper>
            )})}
          </div>
        )}
        </div>
  );
};

const HorizontalRule = styled.hr`
width: 100%;
height: 0.3rem;
border-radius: 0.8rem;
border: none;
background: linear-gradient(to right, blue 0%, white 79%);
background-color: #ebd0d0;
margin: 1.5rem 0 1rem 0;
backdrop-filter: blur(25px);
`;

