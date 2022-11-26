import { BrowserRouter, Switch, Route } from 'react-router-dom'

// pages and components
import Vote from './pages/vote/Vote'
import Profile from './pages/profile/Profile'
import Result from './pages/result/Result'
import Login from './pages/login/Login'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/vote">
            <Vote />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App