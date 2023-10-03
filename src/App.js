import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewProject from './components/pages/NewProject';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <Container customClass="min-height">
              <Home />
            </Container>
          }
        />
        <Route
          path="/Projects"
          element={
            <Container customClass="min-height">
              <Projects />
            </Container>
          }
        />
        <Route
          path="/Company"
          element={
            <Container customClass="min-height">
              <Company />
            </Container>
          }
        />
        <Route
          path="/Contact"
          element={
            <Container customClass="min-height">
              <Contact />
            </Container>
          }
        />
        <Route
          path="/newProject"
          element={
            <Container customClass="min-height">
              <NewProject />
            </Container>
          }
        />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
