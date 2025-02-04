type WorkoutBaseType<E> = {
  id: string;
  workoutName: string;
  exercises: E;
};

export type SaveWorkoutType = WorkoutBaseType<{ name: string }[]>;
export type GetWorkoutType = WorkoutBaseType<string>;

export type WorkoutsType = GetWorkoutType[];
