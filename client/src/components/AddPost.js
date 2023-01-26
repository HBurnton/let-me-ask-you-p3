  import {
    Divider,
    Box
  } from "@mui/material";
  import {FlexBetween} from "../components/utils/FlexBetween";
  import {UserImage} from "../components/utils/UserImage";
  import {WidgetWrapper} from "../components/utils/WidgetWrapper";
  // import { useState, useEffect } from 'react';
  import { useMutation } from '@apollo/client';
  import { ADD_QUESTION } from "../utils/mutations";
  import { QUERY_QUESTIONS } from "../utils/queries";
  import { Button, Form } from 'semantic-ui-react';

  import styled from "styled-components";
  import LinearProgress from '@mui/material/LinearProgress';
  import { useForm } from "../utils/hooks";
  import { useState } from "react";
  import Auth from "../utils/auth";
  
 export const AddPost = () => {
    // const { formData, onChange, onSubmit } = useForm({ content: ''}, createPostCallback);

    // const [addQuestion, {error}] = useMutation(ADD_QUESTION, {
    //   variables: formData,
    //   update(proxy, result) {
    //     console.log(result);
    //     const data = proxy.readQuery({
    //       query: QUERY_QUESTIONS
    //     });
    //     const newData = [result.data.addQuestion, ...data.queryQuestions];
    //     proxy.writeQuery({ query: QUERY_QUESTIONS, data: {QUERY_QUESTIONS: newData} });
    //     formData.content = '';
    //   },
    // });

    // function createPostCallback () {
    //   return addQuestion();
    // }
    const [username, setUsername] = useState(Auth.loggedIn() ? Auth.getUser()?.data.username : '');
    const [addQuestion, { error, data }] = useMutation(ADD_QUESTION)
    const [formState, setFormState] = useState({ questionText: ''});
      
    const onChange = (event) => {
      const { name, value } = event.target;

      setFormState({
        ...formState,
        [name]: value
      });
    };

    const onSubmit = async (event) => {
      event.preventDefault();

      try{
        const { data } = await addQuestion({
          variables: { ...formState, author: username }
        });
        
        
      } catch (e) {
        console.error(e)
      }
    }
    
    

    return (
      <div className="margin-posts" sx={{ margin: "100px" }}>
          <Form onSubmit={onSubmit}>
            <Button type="submit" className="margin-posts upload-btn" variant="contained" component="label" sx={{ justifyContent: "center", display: "flex", margin: 'auto', textAlign: "center", backgroundColor: "blue", padding: "10px", fontWeight: "bolder", fontSize: "32px"}}>
              UPLOAD
              {/* <input hidden accept="image/*" multiple type="file" /> */}
            </Button>
            <Box sx={{ width: '100%' }}>
              {<LinearProgress  />}
            </Box>
            <WidgetWrapper>
                <UserImage />
              <FlexBetween gap="1.5rem">
                <Form.Field className="post-field">
                  <Form.Input
                    placeholder="whats on your mind.."
                    name="questionText"
                    value={formState.questionText}
                    onChange={onChange}
                    error={!!error}
                    className='input-box'
                    style={{ border: 'none'}}
                  />
                </Form.Field>
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
              {/* <p
                className={`m-0 ${
                  characterCount === 140|| error ? 'text-danger' : ''
                }`}
                >
                  CHARACTER COUNT: {characterCount}/140
                  {error && <span className="ml-2">Something went wrong...</span>}
                </p> */}
              <HorizontalRule />
            </WidgetWrapper>
          </Form>
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
