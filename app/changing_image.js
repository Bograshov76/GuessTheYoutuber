import React from 'react';
import { View, Image } from 'react-native';

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
    }, 700);
  }

  componentDidMount() {
      this._isMounted = true;
  }

  componentWillUnmount(){
      this._isMounted = false;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image style={{ alignSelf: "center", height: 150, width: 150, borderRadius: 100 }}
               source={{uri: this.props.images[this.state.currentIndex]}}
               resizeMode="cover"
        />
      </View>
    );
  }
}