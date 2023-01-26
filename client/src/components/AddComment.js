import React, { useState } from 'react';
import {FlexBetween} from "../components/utils/FlexBetween";
import {UserImage} from "../components/utils/UserImage";
import {WidgetWrapper} from "../components/utils/WidgetWrapper";
import { Box, Divider, IconButton, InputBase, Typography, Button } from "@mui/material";
import { ChatBubbleOutlineOutlined } from "@mui/icons-material";
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ANSWERSBYQUESTIONID } from '../utils/queries';
import { ADD_ANSWERNOUSER } from '../utils/mutations';

export const AddComment = (props) => {
    const { loading, data } = useQuery(QUERY_ANSWERSBYQUESTIONID, {
        variables: { questionId: props.questionId },
      });
      const answerList = data?.answersByQuestionId || [];

  const [answerFormState, setAnswerFormState] = useState({
    answerText: ''
  });

  const [addAnswer, { error }] = useMutation(ADD_ANSWERNOUSER);

  const handleAnswerFormSubmit = async ( event ) => {
    event.preventDefault();
    try {
      const { data } = await addAnswer({
        variables: { 
          ...answerFormState,
          questionId: props.questionId
         },
      });
      console.log(data.questionId)
      // window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    if (name === 'answerText') {
      setAnswerFormState({ ...answerFormState, [name]: value });
      console.log(value)
    };
  };

  return (
    <div>
          <FlexBetween gap="0.3rem">
            <IconButton>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography sx={{ backgroundColor: "blue", borderRadius: "6px", padding: "9px"}}>{answerList.length} comments</Typography>
          </FlexBetween>
                <WidgetWrapper>
                {loading ? (
                <div>Loading...</div>
                ) : (
                    <div>
                    {answerList.map((answer) => {
                      return (
                        <Box mt="0.5rem">
                          <Box>
                          {/* {answer.authorId.username} */}
                          {/* Username Here */}
                          <Divider />
                          <Typography sx={{ color: "black", m: "0.5rem 0", pl: "1rem", backgroundColor: "white", borderRadius: "6px", padding: "4.5px" }}>
                            {answer.answerText}
                            {/* answerText Here */}
                          </Typography>
                          </Box>
                          <Divider />
                        </Box>
                      )
                    })}
                  </div>
                )}
                  <form>
                  <FlexBetween gap="1.5rem">
                    <UserImage />
                    <InputBase
                      placeholder="Comment on this..."
                      sx={{
                        width: "100%",
                        backgroundColor: 'white',
                        borderRadius: "2rem",
                        padding: "1rem 2rem",
                      }}
                      name="answerText"
                      value={answerFormState.answerText}
                      onChange={handleAnswerChange}
                    />
                    <FlexBetween>
                    <Button
                        sx={{
                        color: "white",
                        backgroundColor: "blue",
                        borderRadius: "3rem",
                        }}
                        onClick={handleAnswerFormSubmit}
                    >
                        SEND
                    </Button>
                    </FlexBetween>
                  </FlexBetween>
                  </form>
                  <Divider sx={{ margin: "1.25rem 0" }} />
                </WidgetWrapper>
    </div>
  );
}