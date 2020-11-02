import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
// This class is fed to index.js
// Here they use React.Dom to send this app (denoted as <App />) to the --root-- in index.html 


class App extends Component{
  state = {
    characters : [],
    }

    handleSubmit = (characters) => {
      this.setState({characters: [... this.state.characters, characters]})
    }

    removeCharacter = (index) => {
      const {characters} = this.state
      this.setState({
        characters: characters.filter((character, i) =>{
          return i !== index
        }),
      })
    }

    componentDidMount() {
      const url = 
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

      fetch(url)
      .then((result) => result.json())
      .then((result) =>{
        this.setState({
          data: result,
        })
      })
    }

    render(){
      const { characters } = this.state
    // This passes the  const list into the Table class using props
      return(
        <div className="container">
            <Table characterData = {characters} removeCharacter={this.removeCharacter}
            />
            <Form handleSubmit={this.handleSubmit} />
        </div>
      )
    }
  }

  export default App