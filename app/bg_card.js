import React from 'react';
import { View } from 'react-native';
import { Container, Card, CardItem, Body } from 'native-base';
import BackgroundImage from './background_image';


export default class BgCard extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ff0000' }}>
        <Container style={{ padding: 20, flex: 1, justifyContent: "center", alignItems: "stretch"}}>
          <View style={{flex: 1, justifyContent: "center", alignItems: "stretch"}}>
            <Card>
              <BackgroundImage>
                <CardItem style={{ flex: 1, backgroundColor:'transparent' }}>
                  <Body style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}>
                    {this.props.children}
                  </Body>
                </CardItem>
              </BackgroundImage>
            </Card>
          </View>
        </Container>
      </View>
    )
  }
}
