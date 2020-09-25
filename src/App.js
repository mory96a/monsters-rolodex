import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.js';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchedFilter: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchedFilter } = this.state;
    const filterdMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchedFilter.toLowerCase());
    });
    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox
          placeholder='filter monsters'
          handleSearch={e => this.setState({ searchedFilter: e.target.value })}
        />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
