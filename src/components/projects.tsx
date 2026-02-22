/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import ProjectsMDX from "../sections/projects.mdx"

const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="linear-gradient(160deg, #0f0822 0%, #0a1628 40%, #0d0f24 70%, #0f0822 100%)"
      sx={{ clipPath: `polygon(0 12%, 100% 22%, 100% 88%, 0 78%)` }}
      speed={-0.2}
      offset={1.7}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: {
              gridColumn: `-1/1`,
              color: `white !important`,
              fontSize: [4, 5, 6],
              fontWeight: 700,
              letterSpacing: `-0.02em`,
              mb: 2,
            },
          }}
        >
          <ProjectsMDX />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="box" width={5} color="icon_brightest" left="85%" top="75%" />
        <Svg icon="triangle" width={7} stroke color="icon_purple" left="25%" top="5%" />
        <Svg icon="circle" hiddenMobile width={18} color="icon_brightest" left="17%" top="60%" sx={{ opacity: 0.3 }} />
      </UpDown>
      <UpDownWide>
        <Svg icon="arrowUp" hiddenMobile width={13} color="icon_blue" left="20%" top="90%" />
        <Svg icon="triangle" width={10} stroke color="icon_brightest" left="90%" top="30%" />
        <Svg icon="circle" width={13} color="icon_purple" left="70%" top="90%" sx={{ opacity: 0.4 }} />
        <Svg icon="circle" width={5} color="icon_brightest" left="75%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={5} color="icon_brightest" left="4%" top="20%" />
      <Svg icon="circle" width={10} color="icon_purple" left="80%" top="60%" sx={{ opacity: 0.5 }} />
      <Svg icon="box" width={5} color="icon_blue" left="10%" top="10%" sx={{ opacity: 0.4 }} />
      <Svg icon="hexa" width={13} stroke color="icon_purple" left="75%" top="30%" sx={{ opacity: 0.5 }} />
    </Divider>
  </div>
)

export default Projects
