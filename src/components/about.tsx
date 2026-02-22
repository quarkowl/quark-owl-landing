import * as React from 'react';
import Divider from '../elements/divider';
import Inner from '../elements/inner';
import Content from '../elements/content';
import Svg from './svg';
import { UpDown, UpDownWide } from '../styles/animations';
import AboutMDX from '../sections/about.mdx';

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="radial-gradient(ellipse at 70% 50%, rgba(34, 211, 238, 0.08) 0%, transparent 55%), linear-gradient(180deg, #080D1E 0%, #0a1228 50%, #080D1E 100%)"
      clipPath="polygon(0 14%, 100% 4%, 100% 86%, 0 96%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="box" hiddenMobile width={5} color="icon_blue" left="50%" top="75%" sx={{ opacity: 0.4 }} />
        <Svg icon="upDown" hiddenMobile width={7} color="icon_darkest" left="70%" top="20%" />
        <Svg icon="triangle" width={7} stroke color="icon_purple" left="25%" top="5%" sx={{ opacity: 0.5 }} />
        <Svg icon="upDown" hiddenMobile width={18} color="icon_blue" left="80%" top="80%" sx={{ opacity: 0.25 }} />
      </UpDown>
      <UpDownWide>
        <Svg icon="arrowUp" hiddenMobile width={13} color="icon_purple" left="5%" top="80%" sx={{ opacity: 0.4 }} />
        <Svg icon="triangle" width={10} stroke color="icon_brightest" left="95%" top="50%" sx={{ opacity: 0.25 }} />
        <Svg icon="circle" hiddenMobile width={5} color="icon_brightest" left="85%" top="15%" sx={{ opacity: 0.3 }} />
        <Svg icon="upDown" hiddenMobile width={7} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={5} color="icon_brightest" left="4%" top="20%" sx={{ opacity: 0.3 }} />
      <Svg icon="circle" width={10} color="icon_darkest" left="70%" top="60%" />
      <Svg icon="box" width={5} color="icon_purple" left="10%" top="10%" sx={{ opacity: 0.4 }} />
      <Svg icon="hexa" width={7} stroke color="icon_blue" left="80%" top="70%" sx={{ opacity: 0.4 }} />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
);

export default About;
