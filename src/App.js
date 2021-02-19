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
import iconComp from './Components/Dashboard/BottonIcons';
import color from './Components/files/ColrPlate';
import colorMenu from './Components/files/MenuColor';
import PrivateRoute from './authguard/PrivateRoute';
import logout from './Components/Dashboard/Logout';
 
const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component = {login}/>
          <Route path="/login" exact component = {login}/>
          <Route path="/login/displayNote"  component = {iconComp}/>
          <Route path="/forgot" exact component = {forgot}/>
          <Route path="/reset" exact component = {reset}/>
          <Route path="/register" exact component = {register}/>
          <PrivateRoute path="/dashboard"  exact component={dashboard}/>
          <Route path="/createNote" exact component = {createNote}/>
          <Route path="/displayNote" exact component = {displayNote}/>
          <Route path="/update" exact component = {update}/>
          <Route path="/iconComp" exact component = {iconComp}/>
          <Route path="/color" exact component = {color}/>
          <Route path="/colorMenu" exact component = {colorMenu}/>
          <Route path="/logout" exact component = {logout}/>
        </Switch>
        <Route path="/login" component = {login}/>
          <Route path="/login/displayNote"  component = {iconComp}/>
      </Router>
    </div>
    
  );
}


export default App;
