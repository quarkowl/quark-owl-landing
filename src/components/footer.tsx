/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from 'theme-ui';
import Svg from './svg';

const Footer = () => {

  return (
    <div>
      Copyright &copy; QuarkOwl LTD {new Date().getFullYear()}. All rights reserved.
    </div>
  );
};

export default Footer;
