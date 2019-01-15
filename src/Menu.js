import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import ParImpar from './components/ParImpar';
import Inverter, { MegaSena } from './components/Multi';
import Simples from './components/Simples';

const drawNavigator = createDrawerNavigator({
  Simples: () => <Simples texto="Wanderson" />,
  Interter: () => <Inverter texto="Wanderson" />,
  MegaSena: () => <MegaSena />,
  Quina: () => <MegaSena numeros={5} />,
  ParImpar: () => <ParImpar numero={2} />
});

const AppContainer = createAppContainer(drawNavigator);

export default AppContainer;
