import * as SQLite from 'expo-sqlite';
import { GetWorkoutType, SaveWorkoutType, type WorkoutsType } from '../hooks/types';

const databaseName = 'databaseName';

export const getAllWorkouts = async () => {
  const db = await SQLite.openDatabaseAsync(databaseName);

  const allRows: WorkoutsType = await db.getAllAsync('SELECT * FROM workouts ORDER BY id DESC');

  return allRows;
};

export const getWorkout = async (id: number) => {
  const db = await SQLite.openDatabaseAsync(databaseName);

  const workout = (await db.getFirstAsync('SELECT * FROM workouts WHERE id = $id', {
    $id: id,
  })) as GetWorkoutType;

  return workout;
};

export const saveWorkout = async (workout: SaveWorkoutType) => {
  const { workoutName, exercises } = workout;
  const formattedExercises = exercises.map((exercise) => exercise.name).join(', ');

  const db = await SQLite.openDatabaseAsync(databaseName);

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS workouts (id INTEGER PRIMARY KEY AUTOINCREMENT, workoutName TEXT, exercises TEXT);
  `);

  const result = await db.runAsync(
    'INSERT INTO workouts (workoutName, exercises) VALUES (?, ?)',
    workoutName,
    formattedExercises
  );

  return result.changes;
};

export const clearAllWorkouts = async () => {
  const db = await SQLite.openDatabaseAsync(databaseName);

  await db.execAsync('DELETE FROM workouts');
};
