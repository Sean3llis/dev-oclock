// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  Deck,
  List,
  Quote,
  Text,
} from 'spectacle';

import Slide from './components/Slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    light: '#fffbf5',
    dark: '#333333',
    orange: '#005ac8',
    blue: '#ff8669',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['scale', 'scale']}
        transitionDuration={500}
        progress={`bar`}
        theme={theme}
      >
        <Slide bgColor="blue">
          <Heading size={1} fit caps lineHeight={1} textColor="light">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="light" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide bgColor="blue">
          <Heading size={6} textColor="light" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="light">
            Heading 1
          </Heading>
          <Heading size={2} textColor="light">
            Heading 2
          </Heading>
          <Heading size={3} textColor="light">
            Heading 3
          </Heading>
          <Heading size={4} textColor="light">
            Heading 4
          </Heading>
          <Heading size={5} textColor="light">
            Heading 5
          </Heading>
          <Text size={6} textColor="light">
            Standard text
          </Text>
        </Slide>
        <Slide bgColor="light" textColor="blue">
          <Heading size={6} textColor="orange" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="light">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
