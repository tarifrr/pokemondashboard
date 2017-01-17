import React from 'react';
import {ListGroupItem, ListGroup, Col} from 'react-bootstrap/lib/';


const PokeList = ({listOfPokemon, toggleModal}) => {

  let pokemon  = listOfPokemon.map((creature) => {
      return(
          <Col sm={6} md={4} key={creature.name}><ListGroupItem className="pokemon" onClick={toggleModal.bind(null,creature)}> {creature.name} </ListGroupItem></Col>
        )
      });

      return(
        <Col sm={8} md={10} smOffset={2} mdOffset={1}>
          <ListGroup> {pokemon} </ListGroup>
        </Col>

      )


  }

  export default PokeList;
