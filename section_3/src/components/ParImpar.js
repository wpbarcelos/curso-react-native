import React from 'react';
import Simples from './Simples';

export default class ParImpar extends React.Component {
  render() {
    return <Simples texto={this.props.numero % 2 == 0 ? 'Par' : 'Impar'} />;
  }
}
