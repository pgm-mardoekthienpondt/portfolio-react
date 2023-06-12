import './reset.css';
import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import Main from './components/main';
function App() {
  return (
    <div className="App container">
        <Nav />
        <Header />
        <Main />
    </div>
  );
}

export default App;
