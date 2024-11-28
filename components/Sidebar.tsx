import { Icon } from '@rneui/themed';
import { View } from 'react-native';

export const Sidebar = () => {
  return (
    <View
      style={{ outline: 'solid', width: 50, gap: 10, backgroundColor: 'teal', paddingVertical: 10 }}
    >
      <Icon name="home" type="ionicon" style={{ padding: 10 }} />
      <Icon name="barbell" type="ionicon" style={{ padding: 10 }} />
      <Icon name="time" type="ionicon" style={{ padding: 10 }} />
    </View>
  );
};
