/** @jsx jsx */
import { jsx } from 'theme-ui';
import { withPrefix } from 'gatsby';
import { hidden } from '../styles/utils';

// @ts-ignore
import AtomIcon from './svgIcons/atom.svg';
// @ts-ignore
import BeakerIcon from './svgIcons/beaker.svg';
// @ts-ignore
import CDIcon from './svgIcons/cd.svg';
// @ts-ignore
import ChipIcon from './svgIcons/chip.svg';
// @ts-ignore
import TreeIcon from './svgIcons/tree.svg';
// @ts-ignore
import CodeIcon from './svgIcons/code.svg';
// @ts-ignore
import SearchIcon from './svgIcons/search.svg';
// @ts-ignore
import WiFiIcon from './svgIcons/wifi.svg';
// @ts-ignore
import ClockIcon from './svgIcons/clock.svg';
// @ts-ignore
import CableIcon from './svgIcons/cable.svg';
// @ts-ignore
import ZapIcon from './svgIcons/zap.svg';

type IconType = 'triangle' | 'circle' | 'arrowUp' | 'upDown' | 'box' | 'hexa' | 'cross' | 'wifi' | 'cable' | 'clock' | 'zap';

type SVGProps = {
  stroke?: boolean;
  color?: string | number | any;
  width: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;
  icon: IconType;
  left: string;
  top: string;
  hiddenMobile?: boolean;
};

const viewBox = {
  triangle: `0 0 30 30`,
  circle: `0 0 30 30`,
  arrowUp: `0 0 30 42`,
  upDown: `0 0 30 44.58`,
  box: `0 0 30 30`,
  hexa: `0 0 30 30`,
  cross: `0 0 100 100`,
};

const Svg = ({ stroke = false, color = ``, width = 8, icon, left, top, hiddenMobile = false }: SVGProps) => {
  const sx = {
    position: `absolute`,
    stroke: stroke ? `currentColor` : `none`,
    fill: stroke ? `none` : `currentColor`,
    display: hiddenMobile ? hidden : `block`,
    color,
    width: width * 3,
    height: width * 3,
    left,
    top,
  };

  switch (icon) {
    case 'upDown':
      return <img sx={sx} src={AtomIcon} />;
    case 'triangle':
      return <img sx={sx} src={SearchIcon} />;
    case 'circle':
      return <img sx={sx} src={CDIcon} />;
    case 'box':
      return <img sx={sx} src={ChipIcon} />;
    case 'hexa':
      return <img sx={sx} src={TreeIcon} />;
    case 'cross':
      return <img sx={sx} src={CodeIcon} />;
    case 'arrowUp':
      return <img sx={sx} src={BeakerIcon} />;
    case 'wifi':
      return <img sx={sx} src={WiFiIcon} />;
    case 'cable':
      return <img sx={sx} src={ClockIcon} />;
    case 'clock':
      return <img sx={sx} src={CableIcon} />;
    case 'zap':
      return <img sx={sx} src={ZapIcon} />;
    default:
      return <img sx={sx} src={AtomIcon} />;
  }
};

export default Svg;
