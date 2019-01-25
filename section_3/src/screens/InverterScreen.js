import React from "react";
import { View, TextInput } from "react-native";
import Padrao from "../estilo/Padrao";
import Inverter from "../components/Multi";

export default class InverterScreen extends React.Component {
  state = {
    texto: ""
  };

  alterarTexto = texto => {
    this.setState({ texto });
  };

  render() {
    return (
      <View style={Padrao.container}>
        <TextInput
          style={Padrao.input}
          value={this.state.texto}
          onChangeText={this.alterarTexto}
        />
        <Inverter texto={this.state.texto} />
      </View>
    );
  }
}
