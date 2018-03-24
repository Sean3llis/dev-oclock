import React from 'react';
window.React = React;
import ReactDOM from 'react-dom';
import { Slide } from 'spectacle';
import Logo from './Logo';

export default class PPSlide extends React.Component {
  render() {
    const { children } = this.props;
    debugger;
    return (
      <Slide {...this.props} hasSlideChildren>
          {children}
          <Logo></Logo>
      </Slide>
    )
  }
}