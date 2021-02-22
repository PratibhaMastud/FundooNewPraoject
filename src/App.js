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
import note from './Components/Note/DisplayNote/DisplayNote';
import iconComp from './Components/Dashboard/BottonIcons';
import color from './Components/files/ColrPlate';
import colorMenu from './Components/files/MenuColor';
import PrivateRoute from './authguard/PrivateRoute';
import archive from './Components/Dashboard/ArchiveComponent/Archive'; 
const App = () => {
  
  return (
    <div className="App">
      <Router>
       
        <Route path="/" exact component = {login}/>
          <Route path="/login" exact component = {login}/>
          <Route path="/login/displayNote"  component = {iconComp}/>
          <Route path="/forgot" exact component = {forgot}/>
          <Route path="/reset" exact component = {reset}/>
          <Route path="/register" exact component = {register}/>
          <Route path="/createNote" exact component = {createNote}/>
          <Route path="/note" component = {note}/>
          <Route path="/iconComp" exact component = {iconComp}/>
          <Route path="/color" exact component = {color}/>
          <Route path="/colorMenu" exact component = {colorMenu}/>
      
        <PrivateRoute path="/dashboard" component={dashboard}/>
        <Route path="/archive" component = {archive}/>

        {/* <Route path="/login" component = {login}/>
          <Route path="/login/displayNote"  component = {iconComp}/> */}
      </Router>
    </div>
    
  );
}


export default App;
