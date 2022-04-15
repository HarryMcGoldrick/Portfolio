import logo from './logo.svg';
import './App.css';
import { GlobalNavbar } from './components/navbar/navbar.jsx';
import { LandingPage } from './components/landing-page/landing-page';
import { ProjectsPage } from './components/projects-page/projects-page';

function App() {
  return (
    <>
    <GlobalNavbar></GlobalNavbar>
    <div className="primary-page">
      <LandingPage></LandingPage>
    </div>
    <div className="secondary-page">
      <ProjectsPage></ProjectsPage>
    </div>
    </>
  );
}

export default App;
