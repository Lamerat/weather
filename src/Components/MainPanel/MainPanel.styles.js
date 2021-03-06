import { makeStyles } from '@mui/styles';
import { isBrowser } from 'react-device-detect';


export const useStyles = makeStyles(theme => ({
  mainDiv: {
    margin: isBrowser ? 40 : 0,
    width: isBrowser ? 550 : '100%',
    height: isBrowser ? 475 : '100%',
    border: '1px solid black',
    backgroundColor: '#2b3336'
  },

  toolbarDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },

  buttonsBar: {
    display: 'flex',
    alignItems: 'center',
  },

  searchField: {
    width: isBrowser ? 300 : 280,    
    backgroundColor: 'rgb(255 255 255 / 20%)',

    '& .MuiInputBase-input': {
      color: 'white',
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgb(255 255 255 / 50%)',
    },

    '&:hover fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgb(255 255 255 / 70%)',
    }
  },

  favoritesBar: {
    margin: '0px 10px 0px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 40,
  },

  selectStyle: {
    backgroundColor: 'rgb(255 255 255 / 20%)',
    width: isBrowser ? 300 : 280,

    '& .MuiSvgIcon-root': {
      color: 'white',
    },
    '& .MuiInputBase-input':{
      color: 'white',
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgb(255 255 255 / 50%)',
    },

    '&:hover fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgb(255 255 255 / 70%)',
    }
  },

  progressDiv: {
    textAlign: 'center',
    margin: '40px 20px 20px 20px',
  },

  weekDays: {
    margin: 10,
    display: 'grid',
    gridTemplateColumns: '25% 25% 25% 25%',
  },

  menuIcon: {
    backgroundColor: 'rgb(255 255 255 / 20%)',
  },

  mobileMenu: {
    position: 'absolute',
    top: 48,
    right: 11,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255 255 255 / 20%)',
  }
}));
