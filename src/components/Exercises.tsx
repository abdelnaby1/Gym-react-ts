import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { fetchData, exerciseOption, url } from "../utils/fetchData";

import { Exercise } from "../models/Exercise.Interface";
import ExerciseCard from "./ExerciseCard";
interface Props {
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
  bodyPart: string;
  exercises: Exercise[];
}
const Exercises: React.FC<Props> = ({ setExercises, bodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const exercisesPerPage: number = 9;

  const indexOfLastExercise: number = currentPage * exercisesPerPage;
  const indexOfFirstExercise: number = indexOfLastExercise - exercisesPerPage;
  const currentExercises: Exercise[] = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchExercisesData = async (url: string) => {
      let exercisesData: Exercise[];
      if (bodyPart == "all") {
        exercisesData = await fetchData(url, exerciseOption);
      } else {
        exercisesData = await fetchData(
          `${url}/bodyPart/${bodyPart}`,
          exerciseOption
        );
      }

      setExercises(exercisesData);
    };
    fetchExercisesData(url);
  }, [bodyPart]);

  return (
    <Box id='exercises' sx={{ mt: { lg: "110px" } }} mt='50px' p='20px'>
      <Typography variant='h3' mb='46px'>
        Show Results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap='wrap'
        justifyContent='center'
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > exercisesPerPage && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
