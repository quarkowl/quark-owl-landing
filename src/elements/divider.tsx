/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { ParallaxLayer } from "@react-spring/parallax"

type DividerProps = {
  speed: number
  offset: number
  children?: React.ReactNode
  bg?: string
  bgLight?: string
  fill?: string
  clipPath?: string
  className?: string
  factor?: number
  sx?: object
}

const Divider = ({
  speed,
  offset,
  factor = 1,
  bg = ``,
  bgLight = ``,
  fill = ``,
  clipPath = ``,
  children = null,
  className = ``,
  sx: sxProp = {},
}: DividerProps) => {
  const [colorMode] = useColorMode<'light' | 'dark'>()
  const resolvedBg = colorMode === 'light' && bgLight ? bgLight : bg

  return (
    // @ts-ignore
    <ParallaxLayer
      sx={{
        position: `absolute`,
        width: `full`,
        height: `full`,
        background: resolvedBg,
        backgroundColor: resolvedBg,
        "#contact-wave": {
          color: fill,
          fill: `currentColor`,
        },
        clipPath,
        ...sxProp,
      }}
      speed={speed}
      offset={offset}
      factor={factor}
      className={className}
    >
      {children}
    </ParallaxLayer>
  )
}

export default Divider
