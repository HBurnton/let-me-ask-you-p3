  import {
    Divider,
    InputBase,
    Button,
    Box
  } from "@mui/material";
  import {FlexBetween} from "../components/utils/FlexBetween";
  import {UserImage} from "../components/utils/UserImage";
  import {WidgetWrapper} from "../components/utils/WidgetWrapper";

  import styled from "styled-components";
  import LinearProgress from '@mui/material/LinearProgress';
  
 export const AddPost = () => {
    return (
      <div className="margin-posts" sx={{ margin: "100px" }}>
        <Button className="margin-posts" variant="contained" component="label" sx={{ justifyContent: "center", display: "flex", margin: 'auto', textAlign: "center", backgroundColor: "blue", padding: "10px", fontWeight: "bolder", fontSize: "32px"}}>
          Upload
          {/* <input hidden accept="image/*" multiple type="file" /> */}
        </Button>
        <Box sx={{ width: '100%' }}>
          <LinearProgress  />
        </Box>
      <WidgetWrapper>
        <FlexBetween gap="1.5rem">
          <UserImage />
          <InputBase
            placeholder="What's on your mind..."
            sx={{
              width: "100%",
              backgroundColor: 'white',
              borderRadius: "2rem",
              padding: "1rem 2rem",
            }}
          />
            <FlexBetween>
            <Button
                sx={{
                color: "white",
                backgroundColor: "blue",
                borderRadius: "3rem",
                }}
            >
                POST
            </Button>
            </FlexBetween>
            </FlexBetween>

        <Divider sx={{ margin: "1.25rem 0" }} />
        <HorizontalRule />
  
      </WidgetWrapper>
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
