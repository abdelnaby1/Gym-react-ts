import React, { useState } from "react";
import Box from "@mui/material/Box";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

import { Exercise } from "../models/Exercise.Interface";

const Home = () => {
  const [bodyPart, setBodyPart] = useState<string>("all");
  const [exercises, setExercises] = useState<Exercise[]>([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
