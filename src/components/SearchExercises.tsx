import { Exercise } from "../models/Exercise.Interface";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { fetchData, exerciseOption, url } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

interface Props {
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}
const SearchExercises: React.FC<Props> = ({
  setExercises,
  setBodyPart,
  bodyPart,
}) => {
  const [search, setSearch] = useState<string>("");
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  useEffect(() => {
    const fetchExercisesData = async (url: string) => {
      const bodyPartData = await fetchData(
        `${url}/bodyPartList`,
        exerciseOption
      );
      console.log(bodyPartData);
      setBodyParts(["all", ...bodyPartData]);
    };
    fetchExercisesData(url);
  }, []);
  const handleSearch = async (url: string) => {
    if (search) {
      const exercisesData: Exercise[] = await fetchData(url, exerciseOption);
      console.log(exercisesData);

      const searchedExercises = exercisesData.filter(
        (exercise: Exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  useEffect(() => {
    handleSearch(url);
  }, [search]);
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography
        fontWeight='700'
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb='50px'
        textAlign='center'
      >
        Awesome Exercises You
        <br /> Should know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none,", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          size='medium'
          value={search}
          placeholder='Search Exercises'
          type='text'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <Button
          className='search-btn'
          sx={{
            bgcolor: "#ff2625",
            color: "#FFF",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={() => handleSearch(url)}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ positive: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
