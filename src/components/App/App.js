import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamCreate from "../streams/StreamCreate/StreamCreate.js";
import StreamEdit from "../streams/StreamEdit/StreamEdit.js";
import StreamDelete from "../streams/StreamDelete/StreamDelete.js";
import StreamShow from "../streams/StreamShow/StreamShow.js";
import StreamList from "../streams/StreamList/StreamList.js";
import Header from "../Header/Header.js";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;
