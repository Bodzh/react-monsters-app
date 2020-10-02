import React from 'react';
import { MonstersList } from './components/MonstersList'
import { Search } from './components/Search'
import './App.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchFilter: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  onSearch = (e) => {
    this.setState({ searchFilter: e.target.value })
  } 

  render() {
  const { monsters, searchFilter } = this.state
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFilter.toLowerCase()))

  return (
    <div className="App">
      <h1 className="App__title">Robo shit</h1>
      <Search placeholder="monsters search" handleChange={ e => this.onSearch(e) } /> 
      <MonstersList monsters={ filteredMonsters } />
    </div>
  );
  }
}

export default App;
