import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';
import CalculatorsContainer from './pages/CalculatorsContainer/CalculatorsContainer';
import LedResistor from './pages/Calculators/LedResistor';
import VoltageDivider from './pages/Calculators/VoltageDivider';
import ThreePhasePower from './pages/Calculators/ThreePhasePower';
import ThreePhaseCurrent from './pages/Calculators/ThreePhaseCurrent';
import ResistorVoltage from './pages/Calculators/ResistorVoltage';
import ResistorCurrent from './pages/Calculators/ResistorCurrent';
import ResistorResistance from './pages/Calculators/ResistorResistance';
import ResistorPower from './pages/Calculators/ResistorPower';
import Informations from './pages/Informations/Informations';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <HashRouter basename='/'>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/kalkulatory' exact component={CalculatorsContainer} />
          <Route path='/kalkulatory/rezystor-led' component={LedResistor} />
          <Route path='/kalkulatory/dzielnik-napiecia' component={VoltageDivider} />
          <Route path='/kalkulatory/moc-w-ukladzie-trojfazowym' component={ThreePhasePower} />
          <Route path='/kalkulatory/prad-w-ukladzie-trojfazowym' component={ThreePhaseCurrent} />
          <Route path='/kalkulatory/napiecie-na-rezystorze' component={ResistorVoltage} />
          <Route path='/kalkulatory/prad-rezystora' component={ResistorCurrent} />
          <Route path='/kalkulatory/rezystancja-rezystora' component={ResistorResistance} />
          <Route path='/kalkulatory/moc-wydzielona-na-rezystorze' component={ResistorPower} />
          <Route path='/informacje' component={Informations} />
          <Route component={ErrorPage} />
        </Switch>
      </HashRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;

