import { Icon, makeStyles } from '@rneui/themed';
import { View } from 'react-native';

export const Sidebar = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Icon name="home" type="ionicon" style={styles.icon} />
      <Icon name="barbell" type="ionicon" style={styles.icon} />
      <Icon name="time" type="ionicon" style={styles.icon} />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#cccccc',
    width: 50,
    gap: 10,
    paddingVertical: 10,
  },
  icon: {
    cursor: 'pointer',
    padding: 10,
  },
}));
