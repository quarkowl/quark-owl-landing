/** @jsx jsx */
import { jsx, Link } from 'theme-ui';
import { useDialog } from '../hooks';

const Footer = () => {
  const [, setDialogType] = useDialog();

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
      <div sx={{ mb: 2 }}>
        <Link
          sx={{ color: `primary`, cursor: `pointer`, fontWeight: 500 }}
          onClick={() => setDialogType('terms')}
        >
          Terms &amp; Conditions
        </Link>
        {' | '}
        <Link
          sx={{ color: `primary`, cursor: `pointer`, fontWeight: 500 }}
          onClick={() => setDialogType('privacy')}
        >
          Privacy Policy
        </Link>
      </div>
      Copyright &copy; QuarkOwl {new Date().getFullYear()}. All rights reserved.
    </div>
  );
};

export default Footer;
