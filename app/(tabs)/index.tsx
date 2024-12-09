import { Workouts } from '@/components/Workouts';
import { View, StyleSheet } from 'react-native';
import { Button, Overlay, Text, Input, Divider, ListItem } from '@rneui/themed';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Tab() {
  const [visible, setVisible] = useState(false);
  const [workoutName, setWorkoutName] = useState('');
  const exercises = ['Deadlift', 'Squat', 'Bench Press'];

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <Workouts />
      <Button title="Add Workout" onPress={toggleOverlay} />
      <Overlay fullScreen={true} isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text h4>Add a new workout</Text>
        <Divider style={{ marginBottom: 20 }} />
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View>
            <Input
              placeholder="Name your workout"
              value={workoutName}
              onChangeText={setWorkoutName}
            />
            {exercises.map((exercise, i) => (
              <ListItem key={i}>
                <ListItem.Content>
                  <ListItem.Title>{exercise}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Content right>
                  <Ionicons name="close" size={20} style={{ fontSize: 20 }} />
                </ListItem.Content>
              </ListItem>
            ))}
            <Input placeholder="Add an exercise" />
            <Button title="Add Exercise" type="clear" />
          </View>
          <View style={{ gap: 5 }}>
            <Button title="Finish" />
            <Button title="Cancel" onPress={toggleOverlay} />
          </View>
        </View>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
});
