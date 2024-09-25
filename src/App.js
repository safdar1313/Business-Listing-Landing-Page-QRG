import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './React Router/index.jsx';
import About from './React Router/about-page';
import Services from './React Router/services-page';
import HomePage from './React Router/HomePage.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Index/>
      <Routes>
        <Route path={"/HomePage"} Component={HomePage}/>
        <Route path={"/about"} Component={About}/>
        <Route path={"/services"} Component= {Services}/>
      </Routes>
      </BrowserRouter>

      {/* <h1>Welcome!</h1>
      <center><i>React.js Started working.</i></center>
      <p>Now, you can write your code</p>
      <h4>This is h4 text</h4> */}
    </div>
  );
}

export default App;
