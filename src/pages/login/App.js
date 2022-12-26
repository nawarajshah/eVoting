import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="login">
      <h1>Sign In</h1>
      <h5> Sign in and Vote for your Candidates</h5>
      <form>
        {/*
          <label>Enter your college email </label>
        */}
        <br></br>
        <input type="text" placeholder="Enter your College Email"></input>
      </form>
      <form>
        {/*
          <label>Enter your password </label>
        */}
        <br></br>
        <input type="password" placeholder="Enter your password"></input>
      </form>
      <button className="login-button">Login</button>
    </div>
  );
}


export default App;
