/** @jsx jsx */
import { jsx } from 'theme-ui';
import Divider from '../elements/divider';
import Inner from '../elements/inner';
import Content from '../elements/content';
import Svg from './svg';
import { UpDown, UpDownWide } from '../styles/animations';
import Footer from './footer';
import ContactMDX from '../sections/contact.mdx';

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="radial-gradient(ellipse at 30% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 55%), radial-gradient(ellipse at 75% 30%, rgba(34, 211, 238, 0.07) 0%, transparent 50%), linear-gradient(180deg, #080D1E 0%, #0d0826 100%)"
      bgLight="radial-gradient(ellipse at 30% 60%, rgba(124,58,237,0.06) 0%, transparent 55%), radial-gradient(ellipse at 75% 30%, rgba(8,145,178,0.05) 0%, transparent 50%), linear-gradient(180deg, #F8FAFC 0%, #F5F3FF 100%)"
      speed={0.1}
      offset={offset}
      factor={factor}
    />
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <ContactMDX />
      </Inner>
      <Footer />
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="upDown" hiddenMobile width={7} color="icon_darkest" left="70%" top="20%" />
        <Svg icon="triangle" width={7} stroke color="icon_purple" left="25%" top="5%" sx={{ opacity: 0.4 }} />
      </UpDown>
      <UpDownWide>
        <Svg icon="triangle" width={10} stroke color="icon_brightest" left="95%" top="50%" sx={{ opacity: 0.2 }} />
        <Svg icon="circle" width={5} color="icon_blue" left="85%" top="15%" sx={{ opacity: 0.35 }} />
        <Svg icon="upDown" hiddenMobile width={7} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" width={5} color="icon_purple" left="4%" top="20%" sx={{ opacity: 0.35 }} />
      <Svg icon="circle" width={10} color="icon_darkest" left="70%" top="60%" />
      <Svg icon="box" width={10} color="icon_darkest" left="20%" top="30%" />
      <Svg icon="hexa" width={7} stroke color="icon_blue" left="80%" top="70%" sx={{ opacity: 0.3 }} />
    </Divider>
  </div>
);

export default Contact;
