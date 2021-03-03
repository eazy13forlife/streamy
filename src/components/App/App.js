import React from "react";
import { Router, Route, Link } from "react-router-dom";
import StreamCreate from "../streams/StreamCreate/StreamCreate.js";
import StreamEdit from "../streams/StreamEdit/StreamEdit.js";
import StreamDelete from "../streams/StreamDelete/StreamDelete.js";
import StreamShow from "../streams/StreamShow/StreamShow.js";
import StreamList from "../streams/StreamList/StreamList.js";
import Header from "../Header/Header.js";
import history from "../../history.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete/:id" exact component={StreamDelete} />
        <Route path="/streams/show/:id" exact component={StreamShow} />
      </Router>
    </div>
  );
};

export default App;
