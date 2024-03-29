import './App.css';
import resumePdf from './andrew-mcauliffe-resume.pdf';

function App() {
  return (
    <div className="App">
      <div className="Main">
        <div className="Header">Andrew McAuliffe</div>
        <div className="Subheader">React • React Native • Team Leadership • Scrum</div>
        <div className="Content">
          <div>
            <a href={resumePdf}>
              <span>Résumé</span>
              <span className="TextBadge">PDF</span>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/andrew-mcauliffe/">
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
