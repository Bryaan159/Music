import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import CreatePlayList from './CreatePlayList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/create-playlist" component={CreatePlayList} />
      </Switch>
    </Router>
  );
}

export default App;
