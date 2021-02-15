import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React  from 'react';
import login from './Pages/Login/Login';
import forgot from './Pages/Forgot/Forgot';
import reset from './Pages/Reset/Reset';
import register from './Pages/Register/Register';
import dashboard from './Components/Dashboard/Dashboard';
import createNote from './Components/Note/CreateNote/Note';
import displayNote from './Components/Note/DisplayNote/DisplayNote';
import update from './Components/Note/CustomizedDialogs';
//import PrivateRoute from './authguard/PrivateRoute';
const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component = {login}/>
          <Route path="/login" exact component = {login}/>
          <Route path="/forgot" exact component = {forgot}/>
          <Route path="/reset" exact component = {reset}/>
          <Route path="/register" exact component = {register}/>
          <Route path="/dashboard" exact component = {dashboard}/>
          {/* <PrivateRoute path="/dashboard"  exact component={PrivateRoute}/> */}
          <Route path="/createNote" exact component = {createNote}/>
          <Route path="/displayNote" exact component = {displayNote}/>
          <Route path="/update" exact component = {update}/>
        </Switch>
      </Router>
    </div>
    
  );
}


export default App;
