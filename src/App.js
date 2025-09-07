import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apiKey = "10dc50694eb24a6fbe095afbe53ea8cd"; 

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} key="sports" pageSize={9} country="us" category="sports" />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" pageSize={9} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News apiKey={this.apiKey} key="general" pageSize={5} country="us" category="general" />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} key="health" pageSize={5} country="us" category="health" />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} key="science" pageSize={5} country="us" category="science" />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports" pageSize={5} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology" pageSize={5} country="us" category="technology" />} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} key="business" pageSize={5} country="us" category="business" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
