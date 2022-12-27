import { MantineProvider } from '@mantine/core';
import { HeroImageRight } from './components/Banner';
import { Bannerthree } from './components/Bannerthree';
import { Bannertwo } from './components/Bannertwo';
import { GridAsymmetrical } from './components/Brand';
import { FeaturesAsymmetrical } from './components/Features';
import { FooterSocial } from './components/Footer';
import { HeaderMegaMenu } from './components/Header';
import { ICObanner } from './components/ICObanner';
import { CardsCarousel } from './components/Nftcollection';
import { Testimonal } from './components/Testimonal';
import { Testimonaltwo } from './components/Testimonaltwo';


export default function App() {
  
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderMegaMenu />
      <HeroImageRight />
      <GridAsymmetrical />
      <ICObanner />
      <Bannerthree />
      <Bannertwo />
      <FeaturesAsymmetrical />
      <CardsCarousel />
      <Testimonal />
      <Testimonaltwo />
      <FooterSocial />
    </MantineProvider>
  );
}