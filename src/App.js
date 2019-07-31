import React, { Component } from 'react';
import './App.css';
import {CardList} from './cardlist/cardlist.componet'
import {SearchBox } from './search-box/search-box.component'
class App extends Component {

  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField : ''
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const {monsters, searchField} = this.state
    const filterdMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monster-Rolodex</h1>
        <SearchBox eventHandler = {e => this.setState({searchField: e.target.value})}
                              placeHolder = 'Monster here' / >
        <CardList monsters = {filterdMonster}>
        </CardList>

      </div>
    );
  }
}

export default App;
