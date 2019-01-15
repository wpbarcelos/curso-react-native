import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Padrao from './../estilo/Padrao';

export default props => {
  return (
    <View style={Padrao.ex}>
      <Text>{props.texto}</Text>
    </View>
  );
};
