/** @jsx jsx */
import { jsx } from 'theme-ui';

const Footer = () => {
  return (
    <div
      sx={{
        textAlign: `center`,
        color: `textMuted`,
        fontSize: [0, 1],
        fontFamily: `body`,
        mt: 4,
        opacity: 0.7,
        letterSpacing: `0.04em`,
      }}
    >
      Copyright &copy; QuarkOwl LTD {new Date().getFullYear()}. All rights reserved.
    </div>
  );
};

export default Footer;
