import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Post from './component/Post/Post';

const Main = () => {
    return (
        <Switch>
            <Route path='/' component={Auth}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/post/:postid' component={Post}/>
            <Route path='/new' component={Form}/>
        </Switch>
    )
}

export default Main;