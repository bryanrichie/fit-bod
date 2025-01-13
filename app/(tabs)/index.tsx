import { Workouts } from '@/components/Workouts';
import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { useState } from 'react';
import { AddWorkoutFormOverlay } from '@/components/AddWorkoutForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Tab() {
  const [visible, setVisible] = useState<boolean>(false);

  const handleToggleOverlay = () => {
    setVisible((prev) => !prev);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Workouts />
        <Button title="Add Workout" onPress={handleToggleOverlay} />
        <AddWorkoutFormOverlay visible={visible} handleToggleOverlay={handleToggleOverlay} />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
});
