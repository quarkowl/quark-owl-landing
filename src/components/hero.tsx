/** @jsx jsx */
import * as React from "react"

import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import Intro from "../sections/intro.mdx"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <React.Fragment>
    <Divider
      bg="radial-gradient(ellipse at 20% 50%, rgba(139, 92, 246, 0.13) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(34, 211, 238, 0.10) 0%, transparent 55%), radial-gradient(ellipse at 60% 80%, rgba(139, 92, 246, 0.07) 0%, transparent 45%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    >
      <UpDown>
        <Svg icon="triangle" hiddenMobile width={40} stroke color="icon_purple" left="10%" top="20%" />
        <Svg icon="hexa" width={32} stroke color="icon_blue" left="60%" top="70%" />
        <Svg icon="circle" width={8} color="icon_purple" left="85%" top="15%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="arrowUp" hiddenMobile width={14} color="icon_blue" left="80%" top="10%" />
        <Svg icon="triangle" width={10} stroke color="icon_brightest" left="90%" top="50%" />
        <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="90%" />
        <Svg icon="cross" width={12} stroke color="icon_purple" left="28%" top="15%" />
        <Svg icon="zap" width={14} stroke color="icon_blue" left="60%" top="45%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={18} color="icon_darker" left="5%" top="70%" />
      <Svg icon="circle" width={5} color="icon_darkest" left="4%" top="20%" />
      <Svg icon="upDown" width={7} color="icon_darkest" left="95%" top="90%" />
      <Svg icon="triangle" width={7} stroke color="icon_darker" left="25%" top="5%" />
      <Svg icon="circle" width={48} color="icon_purple" left="95%" top="5%" sx={{ opacity: 0.15 }} />
      <Svg icon="box" hiddenMobile width={48} color="icon_blue" left="5%" top="90%" sx={{ opacity: 0.12 }} />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </React.Fragment>
)

export default Hero
