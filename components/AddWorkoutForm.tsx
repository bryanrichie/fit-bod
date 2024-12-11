import { View, StyleSheet } from 'react-native';
import { Button, Overlay, Text, Input, Divider, ListItem } from '@rneui/themed';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { capitaliseWords } from '@/hooks/utils';

interface Props {
  visible: boolean;
  handleToggleOverlay: () => void;
}

export const AddWorkoutFormOverlay = ({ visible, handleToggleOverlay }: Props) => {
  const [workoutName, setWorkoutName] = useState<string>('');
  const [exercises, setExercises] = useState<string[]>([]);
  const [newExercise, setNewExercise] = useState<string>('');

  const handleAddNewExercise = () => {
    if (newExercise) {
      setExercises([...exercises, capitaliseWords(newExercise)]);
      setNewExercise('');
    }
  };

  const handleRemoveNewExercise = (index: number) => {
    setExercises(exercises.filter((_, i) => i !== index));
  };

  return (
    <Overlay fullScreen={true} isVisible={visible} onBackdropPress={handleToggleOverlay}>
      <Text h4>Add a new workout</Text>
      <Divider style={styles.divider} />
      <View style={styles.container}>
        <View>
          <Input
            placeholder="Name your workout"
            value={workoutName}
            onChangeText={setWorkoutName}
          />
          <View style={styles.listContainer}>
            {exercises.map((exercise, i) => (
              <ListItem key={i} containerStyle={styles.listItem}>
                <ListItem.Content>
                  <ListItem.Title>{exercise}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Content right>
                  <Button type="clear" onPress={() => handleRemoveNewExercise(i)}>
                    <Ionicons name="close" size={20} style={styles.icon} />
                  </Button>
                </ListItem.Content>
              </ListItem>
            ))}
          </View>
          <Input
            placeholder="Add an exercise"
            style={styles.exerciseInput}
            onChangeText={setNewExercise}
            value={newExercise}
          />
          <Button title="Add Exercise" type="clear" onPress={handleAddNewExercise} />
        </View>
        <View style={styles.footerButtonContainer}>
          <Button title="Finish" />
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
