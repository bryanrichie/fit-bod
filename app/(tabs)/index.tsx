import { Workouts } from '@/components/Workouts';
import { View, StyleSheet } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Workouts />
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
