import {
    Divider,
    InputBase,
    Button,
  } from "@mui/material";
  import {FlexBetween} from "../components/utils/FlexBetween";
  import {UserImage} from "../components/utils/UserImage";
  import {WidgetWrapper} from "../components/utils/WidgetWrapper";
  
 export const AddComment = () => {
    return (
      <WidgetWrapper>
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
          />
            <FlexBetween>
            <Button
                sx={{
                color: "white",
                backgroundColor: "blue",
                borderRadius: "3rem",
                }}
            >
                SEND
            </Button>
            </FlexBetween>
            </FlexBetween>

        <Divider sx={{ margin: "1.25rem 0" }} />
  
      </WidgetWrapper>
    );
  };
