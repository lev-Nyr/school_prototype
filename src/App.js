import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import './App.css';
import Abaut from './pages/AbautPage/AbautPage';
import Home from './pages/HomePage/HomePage';
import Other from './pages/ErrorPage/ErrorPage';
import MathPage from './pages/MathPage/MathPage';
import SoundButton from './pages/MathPage/components/SoundButton/SoundButton';
import UserPage from './pages/UserPages/UsersPage';
import { UserContext, useUser } from './pages/UserPages/UserContext';
import UserButton from './pages/UserPages/UserButton';
import AlphabetPage from './pages/AlphabetPage/AlphabetPage';

import NumberPage from './pages/NumberPage/NumberPage';
import PageFigurs from './pages/FiguresPage/FiguresPage';

function App() {
  const user = useUser();

  return (
    <UserContext.Provider value={user}>
      <Router>
        <div className="App">
          <header className="App__header">

            <div className="App__menu">
              <a className="App__menu-сtraniwa" href="/">Главная</a>
              <a className="App__menu-сtraniwa" href="/math">Математика</a>
              <a className="App__menu-сtraniwa" href="/figures">Фигуры</a>
              <a className="App__menu-сtraniwa" href="/nambers">Числа</a>
              <a className="App__menu-сtraniwa" href="/alphabet">Буквы</a>
              <a className="App__menu-сtraniwa" href="/abaut">О нас</a>
              <a className="App__menu-сtraniwa" href="/user">Профиль</a>
            </div>
            <div className="App__right-buttons">
              <UserButton/>
              <SoundButton className="Sound" />
            </div>
            
          </header>
          <content className="App__content">

            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/figures' component={PageFigurs}></Route>
              <Route exact path='/nambers' component={NumberPage}></Route>
              <Route exact path='/abaut' component={Abaut}></Route>
              <Route exact path='/alphabet' component={AlphabetPage}></Route>
              <Route path='/math' component={MathPage}></Route>
              <Route path='/user' component={UserPage}></Route>
              <Route component={Other}></Route>
            </Switch>

          </content>
          <futter className="App__futter"></futter>
        </div>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
