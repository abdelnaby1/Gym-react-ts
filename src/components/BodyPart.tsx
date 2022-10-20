import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Icon from "../assets/icons/gym.png";

interface Props {
  item: string;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}
const BodyPart: React.FC<Props> = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      component='button'
      sx={{
        border: "none",
        borderTop: bodyPart == item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        width: "270px",
        height: "270px",
        cursor: "pointer",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt='dumbbell'
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize='24px'
        fontWeight='bold'
        color='#3A1212'
        textTransform='capitalize'
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
