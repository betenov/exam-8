import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import Quote from "./components/Quote/Quote";
import NavMenu from "./containers/NavMenu/NavMenu";
import {Route, Routes} from "react-router-dom";
import UpdatedForm from "./containers/UpdatedForm/UpdatedForm";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <div>
        <Routes>
          <Route path={'/'} element={(
            <Quote/>
          )}/>
          <Route path='/edit-quote/:id' element={(
            <UpdatedForm/>
          )}/>
          <Route path={'addForm'} element={(
            <UpdatedForm/>
          )}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
