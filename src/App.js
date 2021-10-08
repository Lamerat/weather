import './App.css';
import MainPanel from './Components/MainPanel/MainPanel';
import Theme from './providers/Theme';


function App() {
  return (
    <Theme>
      <MainPanel/>
    </Theme>
  );
}

export default App;
