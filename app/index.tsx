import { Dashboard } from '@/components/Dashboard';
import { Sidebar } from '@/components/Sidebar';
import { useStyles } from '@/constants/Themes';

import { Text, View } from 'react-native';

export default function Index() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Sidebar />
      <Dashboard />
    </View>
  );
}
