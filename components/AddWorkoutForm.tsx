import { View, StyleSheet } from 'react-native';
import { Button, Overlay, Text, Input, Divider, ListItem } from '@rneui/themed';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { titleizeString } from '@/hooks/utils';
import { useForm, Controller, useFieldArray } from 'react-hook-form';

interface Props {
  visible: boolean;
  handleToggleOverlay: () => void;
}

type WorkoutType = {
  workoutName: string;
  exercises: { name: string }[];
};

export const AddWorkoutFormOverlay = ({ visible, handleToggleOverlay }: Props) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<WorkoutType>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'exercises',
  });
  const workoutName = watch('workoutName');
  const [newExerciseName, setNewExerciseName] = useState<string>('');
  const [savedWorkout, setSavedWorkout] = useState<WorkoutType>({ workoutName: '', exercises: [] });

  const handleOnSubmit = (data: WorkoutType) => {
    console.log('Saved workout:', data);
    setSavedWorkout(data);
  };

  const handleAddNewExercise = () => {
    if (newExerciseName) {
      append({ name: titleizeString(newExerciseName) });
      setNewExerciseName('');
    }
  };

  const handleRemoveExercise = (index: number) => {
    remove(index);
  };

  return (
    <Overlay fullScreen={true} isVisible={visible} onBackdropPress={handleToggleOverlay}>
      <Text h4>Add a new workout</Text>
      <Divider style={styles.divider} />
      <View style={styles.container}>
        <View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Name your workout"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="workoutName"
            rules={{ required: 'You must enter a name for the workout' }}
          />
          {errors.workoutName && <Text>{errors.workoutName.message}</Text>}
          <View style={styles.listContainer}>
            {fields.map((exercise, index) => (
              <ListItem key={exercise.id} containerStyle={styles.listItem}>
                <ListItem.Content>
                  <ListItem.Title>{exercise.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Content right>
                  <Button type="clear" onPress={() => handleRemoveExercise(index)}>
                    <Ionicons name="close" style={styles.icon} />
                  </Button>
                </ListItem.Content>
              </ListItem>
            ))}
          </View>
          <Input
            placeholder="Add an exercise"
            style={styles.exerciseInput}
            onChangeText={setNewExerciseName}
            value={newExerciseName}
          />
          <Button title="Add Exercise" type="clear" onPress={handleAddNewExercise} />
        </View>
        <View style={styles.footerButtonContainer}>
          <Button title="Finish" onPress={handleSubmit(handleOnSubmit)} />
          <Button title="Cancel" onPress={handleToggleOverlay} />
        </View>
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  divider: { marginBottom: 20 },
  container: { flex: 1, justifyContent: 'space-between' },
  listContainer: { gap: 5 },
  listItem: { borderWidth: 1, padding: 5 },
  icon: { fontSize: 20 },
  exerciseInput: { marginTop: 10 },
  footerButtonContainer: { gap: 5 },
});
