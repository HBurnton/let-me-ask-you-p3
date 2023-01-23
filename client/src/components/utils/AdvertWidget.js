import { Typography } from "@mui/material";
import {FlexBetween} from "./FlexBetween";
import {WidgetWrapper }from "./WidgetWrapper";

export const AdvertWidget = () => {
  const main = 'white';
  const medium = 'white';

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={main} variant="h5" fontWeight="500">
          SPONSORED
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://i.ytimg.com/vi/_TXXeONnzs0/maxresdefault.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>NIKE</Typography>
        <Typography color={medium}>nike.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Yesterday you said tomorrow. JUST DO IT.
      </Typography>
    </WidgetWrapper>
  );
};


