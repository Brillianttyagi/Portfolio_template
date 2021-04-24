import './css/App.css';
import Navb from './component/navb';
import Main from './component/Main';
import Foot from './component/Footer'
import Skill from './component/Skills';
import Project from './component/Project';
function App() {
  return (
    <div className="App">
      <Navb/>
      <Main/>
      <Project/>
      <Skill/>
      <Foot/>

    </div>
  );
}

export default App;
