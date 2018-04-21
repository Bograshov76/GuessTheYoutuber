import React from 'react';
import { Alert, StyleSheet, Text, View, Image } from 'react-native';
import BgCard from './bg_card';
import Letter from './letter';
import AnswerLetter from './answer_letter';
import {GetFromStorage, SetToStorage, EditStorage} from '../lib/storageHandler'
import _ from 'lodash';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Guess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: [],
      answerLetters: []
    }
  }

  async componentDidMount() {
    var key = 'guess:' + this.props.route.params.guessObj.id.toString();
    var storageGuess = await GetFromStorage(key);
    if (storageGuess) {
      this.setState(storageGuess.state);
      return;
    }
    var letters = [];
    var answerLetters = [];
    for (var i = 0; i < this.props.route.params.guessObj.answer.length; i++) {
      letters.push({
        value: this.props.route.params.guessObj.answer[i],
        key: i.toString(),
        selected: false
      });
      answerLetters.push({
        value: '',
        key: i.toString(),
        valueSet: false,
        letterKey: ''
      });
    }

    var guessState = {
      letters: letters,
      answerLetters: answerLetters
    }

    this.setState(guessState);

    SetToStorage(key, _.assign(this.props.route.params.guessObj, {state: guessState}));
  }

  letterPressed(key, value) {
    for (var i = 0; i < this.state.answerLetters.length; i++) {
      if (!this.state.answerLetters[i].valueSet) {
        this.state.answerLetters[i].value = value;
        this.state.answerLetters[i].valueSet = true;
        this.state.answerLetters[i].letterKey = key;
        this.setState({answerLetters: this.state.answerLetters});
        break;
      }
    }

    for (var i = 0; i < this.state.letters.length; i++) {
      if (this.state.letters[i].key === key) {
        this.state.letters[i].value = '';
        this.state.letters[i].selected = true;
        break;
      }
    }

    guessState = {
      letters: this.state.letters,
      answerLetters: this.state.answerLetters
    };

    this.setState(guessState);
    var key = 'guess:' + this.props.route.params.guessObj.id.toString();

    EditStorage(key, {state: guessState});
  }

  answerLetterPressed(key, value, letterKey) {
    for (var i = 0; i < this.state.letters.length; i++) {
      if (this.state.letters[i].key === letterKey) {
        this.state.letters[i].value = value;
        this.state.letters[i].selected = false;
        break;
      }
    }

    for (var i = 0; i < this.state.answerLetters.length; i++) {
      if (this.state.answerLetters[i].key === key) {
        this.state.answerLetters[i].value = '';
        this.state.answerLetters[i].valueSet = false;
        break;
      }
    }

    guessState = {
      letters: this.state.letters,
      answerLetters: this.state.answerLetters
    };

    this.setState(guessState);
    var key = 'guess:' + this.props.route.params.guessObj.id.toString();

    EditStorage(key, {state: guessState});
  }

  render() {
    return (
      <BgCard>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ flex: 1, justifyContent: 'center'  }}>
            <Text style={styles.miniHeader}>take a guess</Text>
          </View>
          <View style={{ flex: 4, justifyContent: 'center' }}>
            <Image
              resizeMode='cover'
              style={styles.img}
              source={{uri: 'http://ec2-52-59-249-218.eu-central-1.compute.amazonaws.com:3000/' + this.props.route.params.guessObj.image_path}}
            />
          </View>
          <View style={[{ flex: 2 }, styles.answer]}>
            {this.state.answerLetters.map(obj =>
              <AnswerLetter value={obj.value} key={obj.key}
                            id={obj.key}
                            letterKey={obj.letterKey}
                            letterPressed={this.answerLetterPressed.bind(this)} />
            )}
          </View>
          <View style={[{ flex: 2 }, styles.letters]}>
            {this.state.letters.map(obj =>
              <Letter value={obj.value} key={obj.key} id={obj.key} style={styles.letter}
                      letterPressed={this.letterPressed.bind(this)} />
            )}
          </View>
        </View>
      </BgCard>
    );
  }
}

const styles = StyleSheet.create({
  miniHeader: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'KBSticktoIt'
  },
  answer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  letter: {
    margin: 2,
  },
  letters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignSelf: 'center',
  }
});