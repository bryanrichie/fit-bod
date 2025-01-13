import { titleize } from 'inflection';

export const workoutsQueryKey = 'workouts';

export const databaseName = 'databaseName';

export const titleizeString = (str: string) => {
  return titleize(str);
};
