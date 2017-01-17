import React from 'react';
import {Col,Pagination} from 'react-bootstrap';

const PaginationContainer = ({buttonSize, activePage, totalPages, onSelect}) => {


    return(
      <Col sm={12}>
        { totalPages > 1 ? <Pagination bsSize={buttonSize} activePage={activePage} items={totalPages} onSelect={onSelect}/>:null}
      </Col>



    )



}

export default PaginationContainer;
