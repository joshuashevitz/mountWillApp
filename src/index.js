import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Apply from './components/Apply';
import contactUs from './components/contactUs';
import UserList from './components/UserList';
import charts2 from './components/charts2';
import charts from './components/charts';
import {Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
   
      
      <Route path="/" exact component={App} />
        
      <Route path="/Apply" component={Apply} />
     
      <Route exact path="/contactUs" component={contactUs} />
  
      <Route exact path="/UserList" component={UserList}/>

      <Route exact path="/charts2/:id" component={charts2}/>

      <Route exact path="/charts/:id" component={charts}/>

    </BrowserRouter>,
  document.getElementById('root')
);

