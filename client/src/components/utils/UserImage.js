import { Box } from "@mui/material";

import Logo from '../../assets/images/lmay-logo.png';

export const UserImage = ({ userPicturePath, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={Logo}
      />
    </Box>
  );
};
