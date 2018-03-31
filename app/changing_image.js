import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class ChangingImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };

    setInterval(() => {
      if (this._isMounted) {
        this.setState(previousState => {
          let index = this.state.currentIndex + 1;
          if (index >= this.props.images.length) {
            index = 0;
          }
          return { currentIndex: index };
        });
      }
    }, 1000);
  }

  componentDidMount() {
      this._isMounted = true;
  }
  componentWillUnmount(){
      this._isMounted = false;
  }

  asfsdfsdfsfss() {

  }

  render() {
    return (
      <Image style={{ flex:1, alignSelf: 'stretch', height: undefined, width: undefined }}
             source={{uri: this.props.images[this.state.currentIndex]}}
             resizeMode="contain"
      />
    );
  }
}