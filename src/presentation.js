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
  setup = (node) => {
    console.log('node ~~>', node.props);
  }
  render() {
    return (
      <div>
        <Deck
          progress={`bar`}
          ref={this.setup}
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
              <Image width="300px" margin="20px auto" fit src="https://media.giphy.com/media/ANbD1CCdA3iI8/giphy.gif" />
            </Appear>
            <Appear fid="3"><Text textSize="18px" textColor="pannaCotta">Early buzzwords detected...</Text></Appear>
          </Slide>

          <Slide>
            <Heading textColor="pannaCotta" size={5}>Imperative:</Heading>
            <Appear fid="1">
              <CodePane lang="jsx" margin="20px auto" source={tabImperativeSnippet} />
            </Appear>
            <Appear fid="2">
              <Text textColor="pannaCotta" textSize="18px">
                This makes sense
              </Text>
            </Appear>
          </Slide>

          <Slide align="center">
            <Heading textColor="pannaCotta" size={5}>Props Drilling:</Heading>
            <Appear fid="1">
              <CodePane lang="jsx" margin="20px auto" source={`
              // grandparent.js
              <GrandParent myProp={42} />
                // parent.js
                <Parent myProp={this.props.myProp} />
                  // niño.js
                  <Niños myProp={42} />
              `} />
            </Appear>

            <Appear fid="2">
              <Text textAlign="left" textColor="pannaCotta" textSize="18px">
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
              <Text textColor="pannaCotta" textSize="18px">
                What just happened?
              </Text>
            </Appear>
          </Slide>

          <Slide align="center" bgColor="gatsby">
            <Appear fid="1">
              <Heading fit caps textColor="pannaCotta" size={6}>Layout flexibility is huge</Heading>
            </Appear>
            <Appear fid="2">
              <div>
                <Heading fit caps textColor="pannaCotta" size={6}>Not mutually exclusive with the first pattern!</Heading>
              </div>
            </Appear>
            <Appear fid="3">
              <Heading fit textColor="pannaCotta" size={6}># of variable references decreased by a lot</Heading>
            </Appear>
            <Appear fid="4">
              <Image margin="200px auto" src="https://media.giphy.com/media/3ofSBhMqPkUMHXZNII/giphy.gif" />
            </Appear>
            <Logo />
          </Slide>

          <Slide align="center" bgColor="gatsby">
            <Heading textColor="pannaCotta" size={5}>Closer Look:</Heading>
            <Appear fid="1">
              <CodePane lang="jsx" margin="20px auto" source={tabDeclarativeDetails} />
            </Appear>
            <Logo />
          </Slide>

        </Deck>
        <Logo />
      </div>
    );
  }
}
