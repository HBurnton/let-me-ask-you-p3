import {
    ChatBubbleOutlineOutlined,
    ShareOutlined,
  } from "@mui/icons-material";
  import { Box, Divider, IconButton, Typography } from "@mui/material";
  import {FlexBetween} from "./FlexBetween";
  import {Friend} from "../Friend";
  import {WidgetWrapper} from "./WidgetWrapper";
  import Logo from '../../assets/images/lmay-logo.png';

  import { AddComment } from "../AddComment";
  
  export const PostWidget = ({
    username,
    description,
    userPicturePath,
    votes
  }) => {

    // const likeCount = 80;
  
    const main = "black";
    // const primary = "black";
  
    return (
        <div className="margin-posts">
            <WidgetWrapper m="2rem 0" className="margin-posts">
                <Friend
                name={username}
                userPicturePath={userPicturePath}
                />
                <Typography color={main} sx={{ mt: "1rem", backgroundColor: "white", borderRadius: "6px", padding: "25px" }}>
                {description}
                </Typography>
                <FlexBetween mt="0.25rem">
                <FlexBetween gap="1rem">
                    <FlexBetween gap="0.3rem">
                    <Typography sx={{ backgroundColor: "blue", borderRadius: "6px", padding: "9px"}}>{votes} upvotes</Typography>
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
                {/* {comments.map((comment, i) => ( */}
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
                
            </WidgetWrapper>

        </div>
    );
  };
  
