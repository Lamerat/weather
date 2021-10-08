import { makeStyles } from '@mui/styles';
import { isBrowser } from 'react-device-detect';


export const useStyles = makeStyles(theme => ({
  middleDiv: {
    margin: isBrowser ? '20px 15px 20px 15px' : '35px 15px 20px 15px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
  },

  leftDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 8,
    minWidth: isBrowser ? '150px' : 100,
  },

  degreesDiv: {
    fontSize: isBrowser ? '100px' : '65px',
    marginTop: isBrowser ? -24 : -18,
    position: 'relative',
    textAlign: 'right',
    
  },

  degreeSymbol: {
    position: 'absolute',
    fontSize: isBrowser ? '35px' : '23px',
    right: 5,
    bottom: isBrowser ? 25 : 17,
  },

  weatherText: {
    fontSize: isBrowser ? 22 : 18,
    paddingBottom: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  tableStyle:{
    width: '100%',
    marginLeft: isBrowser ? 40 : 20,
  },

  tdLeft: {
    fontSize: isBrowser ? null : 12,
  },

  td: {
    padding: isBrowser ? '8px 8px 8px 8px' : '5px 5px 5px 5px',
    textAlign: 'left',
    fontSize: isBrowser ? null : 12,
  },

  cityData: {
    fontSize: isBrowser ? null : 12,
  }
}));