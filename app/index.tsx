import { Dashboard } from '@/components/Dashboard';
import { Sidebar } from '@/components/Sidebar';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        marginRight: 50,
      }}
    >
      <Sidebar />
      <Dashboard />
    </View>
  );
}
