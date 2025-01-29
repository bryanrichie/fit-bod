export type WorkoutType = {
  id: string;
  workoutName: string;
  exercises: { name: string }[];
};

export type WorkoutsType = WorkoutType[];
