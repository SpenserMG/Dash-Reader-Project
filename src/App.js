import './App.css';
import UIContainer from './components/UIContainer';
import About from './navbar/About';
import GitHubModal from './navbar/GitHubModal';
import How from './navbar/How';


function App() {
  return (
    <div className="App">

      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="logo">
              <h1>--Dash-Reader--</h1>
            </div>
            <div className="menu-items">
              <li><h1>Dash-Reader</h1></li><br></br>
              <li><button className="btn" data-toggle="modal" data-target="#howModal"><div className="" id="readerAbout">How it Works</div></button></li>
              <li><button className="btn" data-toggle="modal" data-target="#aboutModal"><div className="" id="readerAbout">About</div></button></li>
              <li><button className="btn" data-toggle="modal" data-target="#githubModal"><div className="">Github</div></button></li>
            </div>
          </div>
        </div>
      </nav>


      <div id="aboutModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <About />
        </div>
      </div>
      <div id="howModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <How />
        </div>
      </div>
      <div id="githubModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <GitHubModal />
        </div>
      </div>
      <UIContainer />
      <footer>
        <a href="https://github.com/AcademyPgh/S14-Reading-Assistance" target="_blank" rel="noopener noreferrer">
          <p className='footer-api-link'>
            Check out our simple API!
          </p>
        </a>
      </footer>
    </div>
  );
}

export default App;
