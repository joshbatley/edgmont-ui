import { Box, Button, ImageComp, Panel, TextComp } from '@edgmont-ui/react';
import Logo from './assets/logo-dark.svg';
import ReactLogo from './assets/react-logo.svg';


{/* <Box margin="0 auto" py="10" pt="10" px="10"> */ }
export const App: React.FC = () => (
  <Box display="grid" gridTemplateColumns={['1fr', '1fr 1fr']} width={['auto', '500px']} m="40px auto 0" gridColumnGap="3">

    <ImageComp src={Logo} width="100%" height="82px" margin="0 auto" gridColumn={['span 1', 'span 2']} />

    <Box mt="4">
      <TextComp fontSize={['1', '0']}>&nbsp;</TextComp>
      <Panel mt="2" mx="2" p="2">
        <a href="/react">
          <Button size="large" width="100%" justifyContent="center">
            <ImageComp src={ReactLogo} height="5" />
            <TextComp>React</TextComp>
          </Button>
        </a>
      </Panel>
    </Box>

    <Box display="flex" justifyContent="center" flexWrap="wrap" mt={['10', '4']}>
      <TextComp fontSize={['1', '0']}>Coming soon</TextComp>
      <Panel mt="2" mx="2" p="2" flex="0 1 100%">
        <Button size="large" width="100%" justifyContent="center" disabled>
          <ImageComp src={ReactLogo} height="5" />
          <TextComp>React Native</TextComp>
        </Button>
      </Panel>
    </Box>

  </Box>
);

