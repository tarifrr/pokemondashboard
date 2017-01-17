import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import PokemonIndexList from './components/PokemonIndexList';
import PokemonModal from './components/PokemonModal';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: [],
      loading: false,
      showModal: false,
      activePage: 1,
      limit: 50,
      count: 0,
      offset: 0,
      totalPages: 0,
      selectedPokemon: null
    };
    this.loadPokemon = this.loadPokemon.bind(this);
    this.changePage = this.changePage.bind(this);
    this.enforcePageLimit = this.enforcePageLimit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  loadPokemon(url){
    fetch(url)
      .then(response => { return response.json();
      }).then( json => {
        let pages = Math.round(json.count / this.state.limit);

        this.setState({
            pokemon: json.results,
            totalPages: pages,
            loading: true,
            count: json.count
      });

      }).catch(error => {console.log(error)})
  }

  componentWillMount(){
    this.loadPokemon(`${this.props.baseUrl}/pokemon/?limit=${this.state.limit}`);
  }

  changePage(pageNumber){
    let offset = pageNumber * this.state.limit;

    this.setState({
      activePage: pageNumber
    }, () => { this.loadPokemon(`${this.props.baseUrl}/pokemon/?limit=${this.state.limit}&offset=${offset}`); });
  }

  enforcePageLimit(event){
    this.setState({
      activePage: 1,
      limit: +event.target.innerHTML || this.state.count
    }, () => {this.loadPokemon(`${this.props.baseUrl}/pokemon/?limit=${this.state.limit}&offset=0`)}  );
  }

  handleOpenModal(pokemon){
      if(pokemon !== null)
        fetch(`${pokemon.url}`)
          .then(response => {
             return response.json();
          }).then(json => {
              console.log(json);
              this.setState({
                selectedPokemon: json,
                showModal: true
              });
          }).catch(error =>{
              console.log("Error :", error);
          })
  }

  handleCloseModal(){
    this.setState({
      showModal: false
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ReactJS Tutorial PokeDashBoard</h2>
        </div>
        {this.state.loading? null: 'Loading...'}
        <PokemonIndexList toggleModal={this.handleOpenModal} display={this.state.loading} optionHandler={this.enforcePageLimit} options={[10,50,100,200]} allValue={this.state.count} selectedValue={this.state.limit} listOfPokemon={this.state.pokemon} bsSize="small" activePage={this.state.activePage}
        items={this.state.totalPages} onSelect={this.changePage} />

        <PokemonModal closeModal={this.handleCloseModal} showModal={this.state.showModal} pokemon={this.state.selectedPokemon} />


      </div>
    );
  }
}

export default App;
