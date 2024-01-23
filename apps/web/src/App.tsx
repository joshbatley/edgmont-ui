import { Box, Button, Image, Panel, Text } from '@edgmont-ui/react';
import Logo from './assets/logo-dark.svg';
import ReactLogo from './assets/react-logo.svg';

"asda";

{/* <Box margin="0 auto" py="10" pt="10" px="10"> */ }
export const App: React.FC = () => (
  <Box display="grid" gridTemplateColumns={['1fr', '1fr 1fr']} width={['auto', '500px']} m="40px auto 0" gridColumnGap="3">

    <Image src={Logo} width="100%" height="82px" margin="0 auto" gridColumn={['span 1', 'span 2']} />

    <Box mt="4">
      <Text fontSize={['1', '0']}>&nbsp;</Text>
      <Panel mt="2" mx="2" p="2">
        <a href="/react">
          <Button size="large" width="100%" justifyContent="center">
            <Image src={ReactLogo} height="5" />
            <Text>React</Text>
          </Button>
        </a>
      </Panel>
    </Box>

    <Box display="flex" justifyContent="center" flexWrap="wrap" mt={['10', '4']}>
      <Text fontSize={['1', '0']}>Coming soon</Text>
      <Panel mt="2" mx="2" p="2" flex="0 1 100%">
        <Button size="large" width="100%" justifyContent="center" disabled>
          <Image src={ReactLogo} height="5" />
          <Text>React Native</Text>
        </Button>
      </Panel>
    </Box>

  </Box>
);

