import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom'
import './MathPage.css'

import AdditionPage from './pages/AdditionPage/AdditionPage';
import SubtractionPage from './pages/SubtractionPage/SubtractionPage';
import DisciplinePage from './pages/DisciplinePage/DisciplinePage';
import DivisionPage from './pages/DivisionPage/DivisionPage';
import MultiplicationPage from './pages/MultiplicationPage/MultiplicationPage';


function MathPage() {

    return (
        <div >
            <Switch>
                <Route path='/math/multiplication' component={MultiplicationPage}></Route>
                <Route path='/math/addition' component={AdditionPage}></Route>
                <Route path='/math/subtraction' component={SubtractionPage}></Route>
                <Route path='/math/division' component={DivisionPage}></Route>
                <Route className="MathPage" component={DisciplinePage}></Route>
            </Switch>
        </div>
    );
}

export default MathPage;
