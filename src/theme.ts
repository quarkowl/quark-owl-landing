import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    background: {
      default: '#fff',
    },
    error: {
      main: red.A400,
    },
    primary: {
      main: '#7200da',
    },
    secondary: {
      main: '#FC913A',
    },
  },
});

export default theme;
