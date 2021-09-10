import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import ProjectPage from './components/ProjectPage/ProjectPage'

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <ProjectPage/>
    </div>
  );
}
export default App;
