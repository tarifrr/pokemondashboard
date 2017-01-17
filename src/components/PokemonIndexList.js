import React from 'react';
import PokeList from './PokeList';
import SelectItemsPerPageButtons from './SelectItemsPerPageButtons';
import PaginationContainer from './PaginationContainer';

const PokemonIndexList = ({display,optionHandler,options,allValue, selectedValue, listOfPokemon,toggleModal, buttonSize, activePage, items, onSelect}) => {

  let style = {display: "none"};

  if (display){
    style.display = "initial";
  }
  else{
    style.display = "none";
  }

  return(
    <div style={style}>
      <SelectItemsPerPageButtons options={options} optionHandler={optionHandler} allValue={allValue} selectedValue={selectedValue}/>

      <PokeList listOfPokemon={listOfPokemon} toggleModal={toggleModal}/>

      <PaginationContainer buttonSize={buttonSize} activePage={activePage} totalPages={items} onSelect={onSelect}/>

    </div>
)



}

export default PokemonIndexList;
