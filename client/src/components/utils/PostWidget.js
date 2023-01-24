// import {
//     ChatBubbleOutlineOutlined,
//     ShareOutlined,
//   } from "@mui/icons-material";
//   import { Box, Divider, IconButton, Typography } from "@mui/material";
//   import {FlexBetween} from "./FlexBetween";
//   import {Friend} from "../Friend";
//   import {WidgetWrapper} from "./WidgetWrapper";
// //   import Logo from '../../assets/images/lmay-logo.png';

//   import styled from "styled-components";

//   import { AddComment } from "../AddComment";
  
//   export const PostWidget = ({
//     username,
//     description,
//     userPicturePath,
//     votes
//   }) => {

//     // const likeCount = 80;
  
//     const main = "black";
//     // const primary = "black";
  
//     return (
//         <div className="margin-posts">
//             <WidgetWrapper m="2rem 0" className="margin-posts">
//                 <Friend
//                 name={username}
//                 userPicturePath={userPicturePath}
//                 />
//                 <Typography color={main} sx={{ mt: "1rem", backgroundColor: "white", borderRadius: "6px", padding: "25px" }}>
//                 {description}
//                 </Typography>
//                 <FlexBetween mt="0.25rem">
//                 <FlexBetween gap="1rem">
//                     <FlexBetween gap="0.3rem">
//                     <Typography sx={{ backgroundColor: "blue", borderRadius: "6px", padding: "9px"}}>{votes} upvotes</Typography>
//                     </FlexBetween>
        
//                     <FlexBetween gap="0.3rem">
//                     <IconButton>
//                         <ChatBubbleOutlineOutlined />
//                     </IconButton>
//                     <Typography sx={{ backgroundColor: "blue", borderRadius: "6px", padding: "9px"}}>1 comment</Typography>
//                     </FlexBetween>
//                 </FlexBetween>
        
//                 <IconButton>
//                     <ShareOutlined />
//                 </IconButton>
//                 </FlexBetween>
//                 <Box mt="0.5rem">
//                 {/* {comments.map((comment, i) => ( */}
//                     <Box>
//                     Random User 
//                     <Divider />
//                     <Typography sx={{ color: "black", m: "0.5rem 0", pl: "1rem", backgroundColor: "white", borderRadius: "6px", padding: "4.5px" }}>
//                         this is a comment
//                     </Typography>
//                     </Box>
//                 <Divider />
//                 </Box>
//                 <AddComment />

//                 <HorizontalRule />
                
//             </WidgetWrapper>

//         </div>
//     );
//   };
  
//   const HorizontalRule = styled.hr`
//   width: 100%;
//   height: 0.3rem;
//   border-radius: 0.8rem;
//   border: none;
//   background: linear-gradient(to right, blue 0%, white 79%);
//   background-color: #ebd0d0;
//   margin: 1.5rem 0 1rem 0;
//   backdrop-filter: blur(25px);
// `;

// import React from 'react'
// import {PostWidget} from "../components/utils/PostWidget";
// import CardContent from '@mui/material/CardContent';
// import { CardActionArea } from '@mui/material';
// import Card from '@mui/material/Card';
// import { Typography, Button } from "@mui/material";


// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_QUESTIONS } from '../utils/queries';
// import { UPDATE_VOTECOUNT } from '../utils/mutations';


// export const Posts = () => {
//   const { loading, data } = useQuery(QUERY_QUESTIONS);
//   const questionList = data?.questions || [];

//   const [updateVote, { error }] = useMutation(UPDATE_VOTECOUNT);
//   const handleVoteUpdate = async (id) => {
//     try {
//       const { data } = await updateVote({
//         variables: { id },
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       {loading ? (
//             <div>Loading...</div>
//         ) : (
//             <Card>
//               {questionList.map((question) => {
//                 return (
//                   <CardActionArea>
//                       <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         {question.questionText} 
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {question.author.username}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {question.voteCount}
//                       </Typography>
//                       <Button id={question._id} onClick={() => handleVoteUpdate(question._id)}>Vote</Button>
//                       </CardContent>
//                   </CardActionArea>
//               )})}
//             </Card>
//             )
//       } 
//     </div>
//   )
// }