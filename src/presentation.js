// Import React
import React from 'react';
import styled from 'styled-components';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  Appear,
  CodePane,
  Image,
  Deck,
  Slide,
  List,
  Quote,
  Text,
} from 'spectacle';

// import Slide from './components/Slide';
import colors from './colors';
import Logo from './components/Logo';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import tabImperativeSnippet from './snippets/tab-imperative.txt';
import tabDeclarativeSnippet from './snippets/tab-declarative.txt';
import tabDeclarativeDetails from './snippets/tab-declarative-details.txt';

// Require CSS
require('normalize.css');


const {
  pannaCotta,
  pannaCottaDark,
  lapel,
  paloma,
  gatsby,
  dove
} = colors;

const theme = createTheme(
  {
    primary: lapel,
    secondary: pannaCotta,
    pannaCotta,
    pannaCottaDark,
    lapel,
    paloma,
    gatsby,
    dove
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <div>
        <Deck
          progress={`bar`}
          controls={false}
          transition={['slide', 'slide']}
          theme={theme}
        >
        <Slide bgColor="paloma">
          <Heading size={2} fit caps lineHeight={1}>
            How To Train Your Components
          </Heading>
        </Slide>

          <Slide bgColor="gatsby">
          <Appear fid="1">
            <Heading size={1} fit> Imperative vs. Declarative </Heading>
          </Appear>
          <Appear fid="2">
            <Image margin="20px auto" fit src="https://media.giphy.com/media/ANbD1CCdA3iI8/giphy.gif" />
          </Appear>
          <Appear fid="3"><Text textSize="12px" textColor="pannaCotta">Early buzzwords detected...</Text></Appear>
          </Slide>
          <Slide>
            <Heading textColor="pannaCotta" size={5}>Imperative:</Heading>
            <Appear fid="1">
              <CodePane lang="jsx" margin="20px auto" source={tabImperativeSnippet} />
            </Appear>
            <Appear fid="2">
              <Text textColor="pannaCotta" textSize="14px">
                What if Tabs starts to get complex and we split that into separate components?
              </Text>
            </Appear>
          </Slide>
          <Slide>
            <Heading textColor="pannaCotta" size={5}>Props Drilling:</Heading>
            <Appear fid="1">
              <CodePane lang="jsx" margin="20px auto" source={`this.props this.props this.props this.props this.props this.props this.props this.props this.props`} />
            </Appear>
            <Appear fid="2">
              <Text textAlign="left" textColor="pannaCotta" textSize="14px">
                Every step down the JSX tree means another reference to variable names and a file abstraction away from where something is defined.
              </Text>
            </Appear>
            <Appear fid="3">
              <Image src="https://media.giphy.com/media/3ofSBhMqPkUMHXZNII/giphy.gif" />
            </Appear>
          </Slide>
          <Slide align="center" bgColor="paloma">
            <Heading textColor="pannaCotta" size={5}>Declarative:</Heading>
            <Appear fid="1">
              <CodePane lang="jsx" margin="20px auto" source={tabDeclarativeSnippet} />
            </Appear>
            <Appear>
              <Text textColor="pannaCotta" textSize="14px">
                Our component API now contains 3 separate exports.
              </Text>
            </Appear>
          </Slide>
          <Slide align="center" bgColor="gatsby">
            <Heading textColor="pannaCotta" size={5}>Closer Look:</Heading>
            <Appear fid="1">
              <CodePane lang="jsx" margin="20px auto" source={tabDeclarativeDetails} />
            </Appear>
          </Slide>
          <Logo></Logo>
        </Deck>
      </div>
    );
  }
}
