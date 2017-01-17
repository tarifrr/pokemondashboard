import React from 'react';
import {Col,Button, Modal} from 'react-bootstrap/lib/'
import PokemonInfo from './PokemonInfo';

const PokemonModal = ({closeModal, showModal, pokemon}) => {



    return(
      <div>
        <Col>

        <Modal
          show={showModal}
          onHide={closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">{pokemon === null ? "Loading...." : pokemon.name }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <PokemonInfo pokemon={pokemon}/></Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>


      </div>

)

}

export default PokemonModal;
