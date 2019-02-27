import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'

export default class ERouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                </App>
            </HashRouter>
        );
    }
}