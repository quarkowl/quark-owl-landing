/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from 'theme-ui';
import Svg from './svg';
import * as React from "react";

const Logo = () => {
    return (
        <div className="theme-button-container" style={{left: 32}}>
            <img src="/logo.svg" alt="Logo" style={{width: 100}}/>
        </div>
    );
};

export default Logo;
