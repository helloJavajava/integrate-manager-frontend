/**
 * Created by liyc on 2017/11/6.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/login/login';
import Index from './pages/index/index';

import {Route,Switch,HashRouter} from 'react-router-dom';

export default class Root extends React.Component{
    render(){
        return (
            //程序的入口
            <HashRouter>
                <Switch>
                    <Route exact component={Login} path="/"/>
                    <Route exact component={Index} path="/index"/>
                </Switch>
            </HashRouter>
        );
    };
}

ReactDOM.render(<Root/>, document.getElementById('example'));
