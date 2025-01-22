export type WorkoutType = {
  workoutName: string;
  exercises: { name: string }[];
};

export type WorkoutsType = WorkoutType[];
