import { Fragment} from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Alumni from './Pages/Alumni/Alumni';
import Bootcamps from './Pages/Bootcamps/Bootcamps';
import Events from './Pages/Events/Events';
import Gallery from './Pages/Gallery/Gallery';
import Projects from './Pages/Projects/Projects';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
// import Loader from './Components/Loader/loader';
import TeamPage from './Pages/TeamPage/TeamPage';

function App() {
  return(
    <Fragment>
      {/* <Loader /> */}
    <div>
      {/* <Navbar/> */}
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/events" element={<Events />} />
    <Route path="/alumni" element={<Alumni />} />
    <Route path="/bootcamps" element={<Bootcamps />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/team" element={<TeamPage />} />
  </Routes>
  <Footer />
  </div>
  </Fragment>
  )
}

export default App
