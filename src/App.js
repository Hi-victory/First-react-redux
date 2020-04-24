import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import PostList from './components/post_list';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoList />
          <PostList />
        </header>
      </div>
    );
  }
}

export default App;
