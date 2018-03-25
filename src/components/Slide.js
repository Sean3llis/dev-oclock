import React from 'react';
import { Slide } from 'spectacle';
import Logo from './Logo';

export default class PPSlide extends React.Component {
  static defaultProps = {
    bgColor: 'pannaCotta'
  }
  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        textColor: this.props.bgColor === 'pannaCotta' ? 'lapel' : 'pannaCotta'
      });
    });
    return (
      <Slide textColor="pannaCotta" bgColor={this.props.bgColor} {...this.props}>
          {children}
      </Slide>
    )
  }
}