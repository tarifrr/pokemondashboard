import React from 'react';
import {Button, Col} from 'react-bootstrap/lib/'

const SelectItemsPerPageButtons = ({options,optionHandler,selectedValue,allValue}) => {
  return(
    <Col sm={12}>
      {
        options.map((option) =>  {
          return <Button onClick={optionHandler} key={option} bsStyle={ option === selectedValue ? "primary" : "default" }>{option}</Button>
        })

      }
      {
        allValue ? <Button key={allValue} onClick={optionHandler} bsStyle={ allValue === selectedValue ? "primary" : "default" }>All Values</Button> : false
      }
    </Col>
  )
}

export default SelectItemsPerPageButtons;
