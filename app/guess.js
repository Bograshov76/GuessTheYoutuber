import React from 'react';
import { Alert, StyleSheet, Text, View, Image } from 'react-native';
import BgCard from './bg_card';
import Letter from './letter';
import AnswerLetter from './answer_letter';
import {GetFromStorage, SetToStorage, EditStorage} from '../lib/storageHandler'
import _ from 'lodash';

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
        <View>
          <Text>{this.props.route.params.guessObj.answer}</Text>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: 'http://ec2-52-59-249-218.eu-central-1.compute.amazonaws.com:3000/' + this.props.route.params.guessObj.image_path}}
          />
          <View style={styles.answer}>
            {this.state.answerLetters.map(obj =>
              <AnswerLetter value={obj.value} key={obj.key} id={obj.key} letterKey={obj.letterKey} letterPressed={this.answerLetterPressed.bind(this)}></AnswerLetter>
            )}
          </View>
          <View style={styles.letters}>
            {this.state.letters.map(obj =>
              <Letter value={obj.value} key={obj.key} id={obj.key} letterPressed={this.letterPressed.bind(this)}></Letter>
            )}
          </View>
        </View>
      </BgCard>
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
  answer: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 100,
    marginBottom: 200
  },
  letters: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  img: {
    width: 70,
    height: 70,
    margin: 1
  }
});