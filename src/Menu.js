import React from "react";
import { View } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import ParImpar from "./components/ParImpar";
import Inverter, { MegaSena } from "./components/Multi";
import Simples from "./components/Simples";
import Evento from "./components/Evento";
import Contador from "./components/Contador";
import InverterScreen from "./screens/InverterScreen";
import { Avo } from "./components/ComunicacaoDireta";
import TextoSincronizado from "./components/ComunicacaoIndireta";

const drawNavigator = createDrawerNavigator({
  TextoSincronizado: TextoSincronizado,
  Familia: () => <Avo nome="Vanderli" sobrenome="Barcelos" />,
  Inverter: InverterScreen,
  Evento: Evento,
  Contador: () => <Contador numero={20} />,
  Simples: () => <Simples texto="Wanderson" />,
  MegaSena: () => <MegaSena />,
  Quina: () => <MegaSena numeros={5} />,
  ParImpar: () => <ParImpar numero={2} />
});

const AppContainer = createAppContainer(drawNavigator);

export default AppContainer;
