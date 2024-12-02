import { useStyles } from '@/constants/Themes';
import { Icon } from '@rneui/themed';
import { View } from 'react-native';

export const Sidebar = () => {
  const styles = useStyles();

  return (
    <View style={styles.sidebar}>
      <Icon name="home" type="ionicon" style={styles.sidebarIcon} />
      <Icon name="barbell" type="ionicon" style={styles.sidebarIcon} />
      <Icon name="time" type="ionicon" style={styles.sidebarIcon} />
    </View>
  );
};
