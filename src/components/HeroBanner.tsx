import React from "react";

// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70" },
        ml: { sm: "50px" },
      }}
      position='relative'
      p='20px'
    >
      <Typography color='#FF2625' fontSize='26px' fontWeight='600'>
        Fitness Club
      </Typography>
      <Typography
        fontWeight='700'
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb='23px'
        mt='20px'
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        chech out the most effective exercises
      </Typography>
      <Button
        variant='contained'
        color='error'
        href='#exercises'
        sx={{ backgroundColor: "#FF2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color='#FF2625'
        sx={{ opacity: 0.1, displat: { lg: "block", xs: "none" } }}
        fontSize='200px'
      >
        Exerise
      </Typography>
      <img src={HeroBannerImage} alt='Hero Image' className='hero-banner-img' />
    </Box>
  );
};

export default HeroBanner;
