import * as React from 'react';

/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ParallaxLayer } from '@react-spring/parallax';
import './techList.css';

type TechnologyList = {
  speed: number;
  offset: number;
  children?: React.ReactNode;
  bg?: string;
  fill?: string;
  clipPath?: string;
  className?: string;
  factor?: number;
};

const TechnologyList = ({ speed, offset, factor = 1, bg = ``, fill = ``, clipPath = ``, className = `` }: TechnologyList) => (

    <div className={'gridContainer'}>
      <div className={'gridItem'}>
        <div className={'item'}>
          <img className={'image'} src="node-logo-white.png" alt="NodeJS" />
          <h6 className={'title'}>NodeJS</h6>
        </div>
      </div>
      <div className={'gridItem'}>
        <div className={'item'}>
          <img className={'image'} src="react-logo.svg" alt="React" />
          <h6 className={'title'}>React</h6>
        </div>
      </div>
      <div className={'gridItem'}>
        <div className={'item'}>
          <img className={'image'} src="graphql-logo.svg" alt="GraphQL" />
          <h6 className={'title'}>GraphQL</h6>
        </div>
      </div>
      <div className={'gridItem'}>
        <div className={'item'}>
          <img className={'image'} src="j5-logo.svg" alt="Johnny Five" />
          <h6 className={'title'}>Johnny Five (IoT)</h6>
        </div>
      </div>
      <div className={'gridItem'}>
        <div className={'item'}>
          <img className={'image'} src="tensorflow-logo.svg" alt="TensorFlow" />
          <h6 className={'title'}>TensorFlow</h6>
        </div>
      </div>
      <div className={'gridItem'}>
        <div className={'item'}>
          <img className={'image'} src="pytorch-icon.svg" alt="Pytorch" />
          <h6 className={'title'}>Pytorch</h6>
        </div>
      </div>
      <div className={'gridItem'}>
        <div className={'item'}>
          <img className={'image'} src="docker-logo.svg" alt="Docker" />
          <h6 className={'title'}>Docker</h6>
        </div>
      </div>
      <div className={'gridItem'}>
        <div className={'item'}>
          <img className={'image'} src="jest-logo.svg" alt="Jest" />
          <h6 className={'title'}>Jest (Testing)</h6>
        </div>
      </div>
    </div>
);

export default TechnologyList;
