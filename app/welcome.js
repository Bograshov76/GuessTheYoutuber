import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';
import ChangingImage from './changing_image';
import { SetNavObject } from '../lib/navigation';

export default class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    SetNavObject(this.props.navigation);
  }

  startGame() {
    const { navigate } = this.props.navigation;
    navigate('LevelsList', { name: 'Jane' });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "stretch", backgroundColor: 'transparent' }}>
        <View style={{ flex: 1 }}>
        </View>
        <View style={{ flex: 3 }}>
          <ChangingImage style={styles.changingImage} images={[
            'https://yt3.ggpht.com/-rJq9gk1QIis/AAAAAAAAAAI/AAAAAAAAAAA/Kx4wkvKOfxY/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
            'https://yt3.ggpht.com/-6Sj6Quz5Njs/AAAAAAAAAAI/AAAAAAAAAAA/cRlUOiAQDnA/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
            'https://yt3.ggpht.com/-aSj-EnOjUkc/AAAAAAAAAAI/AAAAAAAAAAA/lQiWTDY9Sd0/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
            'https://yt3.ggpht.com/-CZGSaqZO1no/AAAAAAAAAAI/AAAAAAAAAAA/ZLM6K4NJXgk/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
            'https://yt3.ggpht.com/-evPUF7Pz8G0/AAAAAAAAAAI/AAAAAAAAAAA/GBAOe_Smwkc/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
            'https://yt3.ggpht.com/-M0_lRsNbwbA/AAAAAAAAAAI/AAAAAAAAAAA/1rCKpaxGY7E/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
            'https://yt3.ggpht.com/-Hp2Y60tsv-E/AAAAAAAAAAI/AAAAAAAAAAA/8KsUrd_C2p0/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg']}/>
          <Text style={styles.miniHeader}>GUESS THE</Text>
          <Text style={styles.header}>YouTuber</Text>
        </View>
        <View style={{ flex: 1 }}>
        </View>
        <View style={{ flex: 2, justifyContent: "flex-start" }}>
          <Button rounded success onPress={this.startGame.bind(this)} style={styles.btn}>
            <Text>Start</Text>
          </Button>
          <Button rounded light onPress={this.startGame.bind(this)} style={styles.btn}>
            <Text>Settings</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  miniHeader: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'KBSticktoIt'
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'KBSticktoIt'
  },
  changingImage: {
    padding: 10,
    justifyContent: 'center'
  },
  btn: {
    alignSelf: "stretch",
    justifyContent: "center",
    marginBottom: 20,
  }
});