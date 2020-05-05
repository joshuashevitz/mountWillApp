import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Apply from './components/Apply';
import contactUs from './components/contactUs';
import UserList from './components/UserList';
import {Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
   
      
      <Route path="/" exact component={App} />
        
      <Route exact path="/Apply" component={Apply} />
     
      <Route exact path="/contactUs" component={contactUs} />
  
      <Route exact path="/UserList" component={UserList}/>
    </BrowserRouter>,
  document.getElementById('root')
);

