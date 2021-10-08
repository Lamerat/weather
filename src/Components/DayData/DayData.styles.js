import { makeStyles } from '@mui/styles';
import { isBrowser } from 'react-device-detect';


export const useStyles = makeStyles(theme => ({
  mainHolder: {
    margin: 5,
    padding: 5,
    backgroundColor: 'rgb(255 255 255 / 20%)',
    borderRadius: 4,
    border: '1px solid rgb(255 255 255 / 50%)',
    fontSize: '0.75rem',
    color: theme.palette.primary.main,
    height: isBrowser ? 90 : null,
  },

  errorDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  singleDay: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    height: '100%',
    justifyContent: isBrowser ? 'space-between' : 'flex-start',
  },

  dayName: {
    position: 'absolute',
    top: 0,
    right: 0,
  },

  weatherText: {
    fontSize: '0.65rem',
  },

  middleDiv: {
    display: 'flex',
    alignItems: 'end',
    width: '100%',
    justifyContent: 'space-between',
  },

  tempsDiv: {
    fontSize: isBrowser ? '0.87rem' : '1rem',
    paddingBottom: isBrowser ? 3 : 0,
    margin: isBrowser ? null : '5px 0px 5px 0px',
    textAlign: isBrowser ? 'right' : 'center',
    width: '100%'
  },

  imageStyle: {
    marginTop: isBrowser ? -5 : 0,
    width: isBrowser ? 55 : 65,
    height: isBrowser ? 55 : 65,
  },
}));
