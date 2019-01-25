import React from "react";
import { View, Text, TextInput } from "react-native";
import Padrao from "../estilo/Padrao";
import { RotationGestureHandler } from "react-native-gesture-handler";

export const Entrada = props => (
  <View>
    <TextInput
      style={Padrao.input}
      onChangeText={props.chamarQuandoMudar}
      value={props.texto}
    />
  </View>
);

export default class TextoSincronizado extends React.Component {
  state = {
    texto: ""
  };

  alterarTexto = texto => {
    this.setState({ texto });
  };

  render() {
    return (
      <View>
        <Text>Texto sincronizado</Text>
        <Text style={Padrao.fonte40}>{this.state.texto}</Text>
        <Entrada
          texto={this.state.texto}
          chamarQuandoMudar={this.alterarTexto}
        />
      </View>
    );
  }
}
