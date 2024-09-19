// import logo from './logo.svg';
import { Router } from 'react-router-dom';
import './App.css';
import Home from './React Router';
import About from './React Router/about-page';
import Services from './React Router/services-page';
// import Safdar from './Practice Files/function';
// import Prompts from './Practice Files/prompt';
// import SafdarAli from './Practice Files/prompt';
import AboutPage from './React Router/about-page';
import Services from './React Router/services-page';
function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <center><i>React.js Started working.</i></center>
      <p>Now, you can write your code</p>
      <Routes>
        <Route path={"/AboutPage"} component={AboutPage}/>
        <Route path={"/Services"} component= {Services}/>
      </Routes>
      <Home/>
    </div>
  );
}

export default App;
