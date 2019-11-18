import React from 'react';
import {Route, Link, withRouter} from 'react-router-dom';
import Home from "./home/index.js"
import Category from "./category/index.js"
import BooksRouter from "./books/router.js";
import BookSave from "./books/save.js"
import BookDetail from "./books/detail.js";
import CategorySave from "./category/save.js"
import Login from "./../pages/login/index.js";


import Styles from './App.module.scss';

class App extends  React.Component {

  render(){

    const{location} = this.props;

    return (
      <div className={Styles.App}>
        <header className={Styles.header}>
          <div className={Styles.box}>
            <Link to="/">  <div className={Styles.boxLeft}>BOOKSTORE_ADMIN</div></Link>
            <div className={Styles.boxRight}>
              <Link to="/" className={ location.pathname === '/' ? Styles.selected : null }><p>HOME</p></Link>
              <Link to="/books" className ={ location.pathname === '/books' ? Styles.selected : null }><p>BOOKS</p></Link>
              <Link to="/category" className ={ location.pathname === '/category' ? Styles.selected : null }><p>CATEGORY</p></Link>
            </div>
          </div>
        </header>
        <section className={Styles.content}>
          <Route path="/" exact component={Home}/>
          <Route path="/books/save/:name?" component={BookSave}/>
          <Route path="/books/detail/:name" component={BookDetail}/>
          <Route  path="/category/save" component = {CategorySave}/>
          <Route path="/books" exact component={BooksRouter} />
          <Route path="/category" exact component={Category}/>
          <Route path="/login" component={Login} />
          </section>
        <footer className={Styles.footer}>
          <p><b>© 2019 by 赵欣影 </b></p>
          <p>Handmade with </p>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
