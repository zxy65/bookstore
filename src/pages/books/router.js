import React from "react";
import {Switch, Redirect, Route, Link } from 'react-router-dom';
import BookDetail from "./detail.js"
import Books from "./index.js"

class BooksRouter extends React.Component{

    render(){
        return (
            <Switch>
                <Route path="/books/save/:name" component={Books}/>
                <Route path="/books/detail/:name" component={BookDetail}/>
                <Route path="/books" component={Books}/>
                <Route />
            </Switch>
        );
    }
}

export default BooksRouter;