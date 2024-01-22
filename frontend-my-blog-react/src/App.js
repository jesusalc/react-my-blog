import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import AboutPage from './pages/AboutPage'
import ArticlesPage from './pages/ArticlesPage'
import ArticlePage from './pages/ArticlePage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <hi>My blog</hi>
      <NavBar></NavBar>
      <div id="page-body">
        <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/articles' element={<ArticlesPage></ArticlesPage>}></Route>
        <Route path='/article/:articleId' element={<ArticlePage></ArticlePage>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>

        </Routes>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
