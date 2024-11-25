import { Text, View } from 'react-native';
import { Button, Card, Header, Tab } from '@rneui/base';

export default function Index() {
  return (
    <View>
      <Card containerStyle={{ margin: 0, padding: 0, backgroundColor: 'teal', height: '100%' }}>
        <Header style={{ height: '5px' }}>
          <Text style={{ fontSize: 10 }}>DASHBOARD</Text>
        </Header>
      </Card>
    </View>
  );
}
