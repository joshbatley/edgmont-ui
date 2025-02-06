import { Box, ImageComp, Typography, PrimaryButton, Badge, CenteredWidget, useEdgmontSettings } from '@edgmont-ui/react';
import LogoLight from './assets/logo-light.svg';
import LogoDark from './assets/logo-dark.svg';
import ReactLogo from './assets/react-light.svg';

export const App: React.FC = () => {
  const { theme } = useEdgmontSettings();
  return (
    <CenteredWidget>
      <Box display="grid" gridTemplateColumns={['1fr', '1fr 1fr']} width={['auto', '500px']} gridColumnGap="3" alignItems="flex-end" mt="-200px" mx={['30px', 'auto']}>
        <ImageComp src={theme === 'Dark' ? LogoDark : LogoLight} width="100%" height="82px" margin="0 auto" gridColumn={['span 1', 'span 2']} />
        <Box mt="10">
          <Typography fontSize={['1', '0']}>&nbsp;</Typography>
          <a href="/react">
            <PrimaryButton width="100%" justifyContent="center" py="4">
              <ImageComp src={ReactLogo} height="5" />
              <Typography>React</Typography>
            </PrimaryButton>
          </a>
        </Box>

        <Box display="flex" justifyContent="center" flexWrap="wrap" mt="10">
          <Badge tag="Coming Soon" position="N" destructive>
            <PrimaryButton width="100%" justifyContent="center" disabled py="4">
              <ImageComp src={ReactLogo} height="5" />
              <Typography>React Native</Typography>
            </PrimaryButton>
          </Badge>
        </Box>
      </Box>
    </CenteredWidget>
  );
};

