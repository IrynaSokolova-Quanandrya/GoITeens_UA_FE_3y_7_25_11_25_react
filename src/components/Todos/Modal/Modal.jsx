import React, { Component } from 'react';
import { Backdrop, ModalContent } from "./Modal.styled";

export class Modal extends Component {

  componentDidMount() {
    console.log('Виклик componentDidMount');
  }

  componentWillUnmount() {
    console.log('Виклик componentWillUnmount');
  }

  
  render() {
    return (
      <Backdrop>
        <ModalContent>{this.props.children}</ModalContent>
      </Backdrop>
    );
  }
}