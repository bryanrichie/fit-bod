import { Dashboard } from '@/components/Dashboard';
import { Sidebar } from '@/components/Sidebar';
import { makeStyles } from '@rneui/themed';
import { View } from 'react-native';

export default function Index() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Sidebar />
      <Dashboard />
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 50,
  },
}));
