import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import './Cardview.css'


function Cardview({flatdata}) {
  return (
    <> 
    <Link to={`/view-flat/${flatdata.id}`}  style={{textDecoration:'none',color:'white'}}>   
       <Card style={{ width: '16rem' }} className="d1">
    <Card.Img variant="top" src={flatdata.photograph} className="d3"/>
    <Card.Body>
      <Card.Title>{flatdata.name}</Card.Title>
      <Card.Text>

       <p> <strong>Neighborhood</strong> {flatdata.neighborhood}</p>
       <p> <strong>BuiltupArea</strong> {flatdata.BuiltupArea}</p>
      </Card.Text>
    </Card.Body>
  </Card>
  </Link>
  </>
  )
}

export default Cardview