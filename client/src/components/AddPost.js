  import {
    Divider,
    Button,
    Box
  } from "@mui/material";
  import {FlexBetween} from "../components/utils/FlexBetween";
  import {UserImage} from "../components/utils/UserImage";
  import {WidgetWrapper} from "../components/utils/WidgetWrapper";
  import { useState, useEffect } from 'react';
  import { useMutation } from '@apollo/client';
  import { ADD_QUESTION } from "../utils/mutations";

  import styled from "styled-components";
  import LinearProgress from '@mui/material/LinearProgress';
  
 export const AddPost = () => {
    const [postState, setPostState] = useState({
        questionText: ''
    });

    const [characterCount, setCharacterCount] = useState(0);
    const [addQuestion, { error }] = useMutation(ADD_QUESTION);

    const handleFormSubmit = async (event) => {
      event.preventDefault();

      try {
        const { data } = addQuestion({
          variables: { ...postState},
        });

        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    }

    const handleChange = (event) => {
      const { post, value } = event.target;
  
      if (post === 'questionText' && value.length <= 140) {
        setPostState({ ...postState, [post]: value });
        setCharacterCount(value.length);
      } else if (post !== 'questionText') {
        setPostState({ ...postState, [post]: value });
      }
    };
    

    return (
      <div className="margin-posts" sx={{ margin: "100px" }}>
          <form onSubmit={handleFormSubmit}>
          <Button type="submit" className="margin-posts" variant="contained" component="label" sx={{ justifyContent: "center", display: "flex", margin: 'auto', textAlign: "center", backgroundColor: "blue", padding: "10px", fontWeight: "bolder", fontSize: "32px"}}>
            Upload
            {/* <input hidden accept="image/*" multiple type="file" /> */}
          </Button>
          <Box sx={{ width: '100%' }}>
            {<LinearProgress  />}
          </Box>
            <WidgetWrapper>
              <FlexBetween gap="1.5rem">
                <UserImage />
                  <input
                    placeholder="What's on your mind..."
                    className="input-box"
                    name= 'questionText'
                    value={postState.questionText}
                    onChange={handleChange}
                  />
                  <FlexBetween>
                  {/* <Button
                      sx={{
                      color: "white",
                      backgroundColor: "blue",
                      borderRadius: "3rem",
                      }}
                  >
                      POST
                  </Button> */}
                  </FlexBetween>
                  </FlexBetween>
              <Divider sx={{ margin: "1.25rem 0" }} />
              <p
                className={`m-0 ${
                  characterCount === 140|| error ? 'text-danger' : ''
                }`}
                >
                  CHARACTER COUNT: {characterCount}/140
                  {error && <span className="ml-2">Something went wrong...</span>}
                </p>
              <HorizontalRule />
            </WidgetWrapper>
          </form>
      </div>
    );
  };

  const HorizontalRule = styled.hr`
  width: 100%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: white;
  background-color: white;
  margin: 0;
`;
