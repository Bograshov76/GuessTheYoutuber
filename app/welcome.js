import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import ChangingImage from './changing_image';
import LevelsList from './levels_list';

export default class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.startButtonPressed = false;
  }


  startGame() {
    this.setState({'startButtonPressed':true});
  }

  render() {
    if (this.state.startButtonPressed === true) {
      return <LevelsList />;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Guess the YouTuber</Text>
        <View style={styles.changingImage}>
          <ChangingImage ref="myRef" images={[
            'https://yt3.ggpht.com/-rJq9gk1QIis/AAAAAAAAAAI/AAAAAAAAAAA/Kx4wkvKOfxY/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
            'https://yt3.ggpht.com/-6Sj6Quz5Njs/AAAAAAAAAAI/AAAAAAAAAAA/cRlUOiAQDnA/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
            'https://yt3.ggpht.com/-aSj-EnOjUkc/AAAAAAAAAAI/AAAAAAAAAAA/lQiWTDY9Sd0/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
            'https://yt3.ggpht.com/-CZGSaqZO1no/AAAAAAAAAAI/AAAAAAAAAAA/ZLM6K4NJXgk/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
            'https://yt3.ggpht.com/-evPUF7Pz8G0/AAAAAAAAAAI/AAAAAAAAAAA/GBAOe_Smwkc/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
            'https://yt3.ggpht.com/-M0_lRsNbwbA/AAAAAAAAAAI/AAAAAAAAAAA/1rCKpaxGY7E/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
            'https://yt3.ggpht.com/-Hp2Y60tsv-E/AAAAAAAAAAI/AAAAAAAAAAA/8KsUrd_C2p0/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg']}/>
        </View>
        <Button
          onPress={this.startGame.bind(this)}
          title="Start"
          color="#ee0f0f"
          accessibilityLabel="Start the game!"
          style={styles.btn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    flex: 1,
    fontSize: 35,
    fontFamily: 'franklin_gothic_demi_cond_regular',
    marginTop: 30,
    marginBottom: 30,
  },
  changingImage: {
    flex: 3,
    width: 250,
    height: 250
  },
  btn: {
    flex: 1
  }
});