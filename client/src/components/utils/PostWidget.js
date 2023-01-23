import {
    ChatBubbleOutlineOutlined,
    ShareOutlined,
  } from "@mui/icons-material";
  import { Box, Divider, IconButton, Typography } from "@mui/material";
  import {FlexBetween} from "./FlexBetween";
  import {Friend} from "../Friend";
  import {WidgetWrapper} from "./WidgetWrapper";
  import Logo from '../../assets/images/lmay-logo.png';
  import { Link } from 'react-router-dom';
  import { AddComment } from "../AddComment";
  
  export const PostWidget = ({
    username,
    description,
    picture,//maybe
    votes,
    questionId,
    userId
  }) => {
  
    const main = "black";
  
    return (
        <div className="margin-posts">
            <WidgetWrapper m="2rem 0" className="margin-posts">
            <Link
              to={`/user/${userId}`}
            >
                <Friend
                name={username}
                picture={picture}
                />
            </Link>
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
                    <Link to={`/question/${questionId}`}>
                        <Typography sx={{ backgroundColor: "blue", borderRadius: "6px", padding: "9px"}}>1 comment</Typography>
                    </Link>
                    </FlexBetween>
                </FlexBetween>
        
                <IconButton>
                    <ShareOutlined />
                </IconButton>
                </FlexBetween>
                
            </WidgetWrapper>

        </div>
    );
  };
  
