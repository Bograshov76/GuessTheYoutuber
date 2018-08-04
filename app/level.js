import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import _ from 'lodash'
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Level extends React.Component {
  imagePicked(id) {
    const { navigation } = this.props;
    var guessObj = _.find(navigation.getParam('levelObj').contents, {'id': id});
    navigation.navigate('Guess', { guessObj: guessObj });
  }

  renderChannel(channel) {
    return (
      <TouchableHighlight key={channel.id} onPress={this.imagePicked.bind(this, channel.id)}>
        <Image style={styles.img}
               source={{uri: 'http://ec2-52-59-249-218.eu-central-1.compute.amazonaws.com:3000/' + channel.image_path}}
        />
      </TouchableHighlight>
    );
  }

  renderRow(channels, index) {
    return (
      <Row key={index}>
        {channels[0] ? <Col>{this.renderChannel(channels[0])}</Col> : <Col />}
        {channels[1] ? <Col>{this.renderChannel(channels[1])}</Col> : <Col />}
        {channels[2] ? <Col>{this.renderChannel(channels[2])}</Col> : <Col />}
      </Row>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{ flex: 0 }}>
          <Grid>
            {_.chunk(navigation.getParam('levelObj').contents, 3).map((row, index) =>
              this.renderRow(row, index)
            )}
          </Grid>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row'
  },
  btn: {
    flex: 1
  },
  img: {
    width: 100,
    height: 100,
    margin: 1,
  }
});