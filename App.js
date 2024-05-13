// import logo from './logo.svg';
import './App.css';
// import Welcome from './FunctionalCompenent';
// import WelcomeStudents from './ClassComponent';
import Counter from './classState';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Welcome/> */}

      </header>
      <div>
        <Counter/>
        {/* <WelcomeStudents name = 'Maran' sports='Cricket'><p>My favourite batsman is Rohit Sharma</p></WelcomeStudents>  */}
      </div>
    </div>
  );
}

export default App;
