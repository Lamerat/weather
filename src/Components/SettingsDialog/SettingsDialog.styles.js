import { makeStyles } from '@mui/styles';
// import { isBrowser } from 'react-device-detect';


export const useStyles = makeStyles(theme => ({
  mainHolder: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    alignItems: 'center',
    margin: '0px 12px 0px 12px'
  },
  
  buttons: {
    margin: '10px 12px 10px 12px'
  },
}));
