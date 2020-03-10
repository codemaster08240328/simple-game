import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Board from './pages/Board';
import Battle from './pages/Battle';
import Rule from './pages/Rule';

import './App.css';
import { isAppStarted, appStartAction } from './redux/appReducer';
import { IRootState } from './redux/getStore';

export interface Props {
  started: boolean;
  onStart: () => void;
}

export const AppRoot: React.FC<Props> = ({ started, onStart }) => {
  React.useEffect(() => {
    onStart();
  }, [onStart]);
  if (!started) {
    return <span className="loading">Loading...</span>;
  }
  return (
    <div className="app">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/board" exact component={Board} />
        <Route path="/battle" exact component={Battle} />
        <Route path="/rule" exact component={Rule} />
      </Router>
    </div>
  );
};

export const mapStateToProps = (state: IRootState) => {
  const started = isAppStarted(state.app);
  return {
    started,
  };
};

export const mapDispatchToProps = {
  onStart: appStartAction,
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppRoot);
export default App;
