import React from "react";
import { View, Text, TouchableHiglith } from "react-native";

export default class Contador extends React.Component {
  state = {
    numero: this.props.numero
  };

  maisUm = () => {
    this.setState({ numero: this.state.numero + 1 });
  };

  limpar = () => {
    this.setState({ numero: this.props.numero });
  };

  render() {
    return (
      <View>
        <Text style={{ fontSize: 40 }}> {this.state.numero}</Text>
        <TouchableHiglith onPress={this.maisUm} onLongPress={this.limpar} />
      </View>
    );
  }
}
