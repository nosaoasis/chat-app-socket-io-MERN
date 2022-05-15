import React from "react";
import { Routes, Route } from "react-router-dom"
import {Join, Chat} from './components/index'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
    </>
  )
}

export default App