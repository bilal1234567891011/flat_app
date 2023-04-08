import {React,useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Review from './components/Review';


function Flatview() {


  const params=useParams()

  var [datas,changedata]=useState([])


  const fetchdatas=async()=>{
  const result = await fetch('/flat.json')
  result.json().then(data=>{
    changedata(data.restaurants)
  })
  }
  const restaurant =datas.find(item=>item.id==params.id)


useEffect(()=>{
  fetchdatas()
},[])
  return (

    <>
      {
         restaurant?(
          <Row>
            <Col lg={6} md={6} className='ps-5 pt-5 pb-5 ms-5 text-center'>
      <img className='rounded border border-danger' style={{height:'600px'}} src={restaurant.photograph}/>
            </Col>
      
            <Col   className='me-5 mt-5 text-center'>
            <ListGroup variant='flush'>
            <ListGroup.Item> <h1 className='text-danger'> {restaurant.name}</h1></ListGroup.Item>
            <ListGroup.Item> <p>Neighborhood <strong className='fs-5'>{restaurant.neighborhood}</strong></p> </ListGroup.Item>
            <ListGroup.Item> <p>Adress <strong className='fs-5'>{restaurant.address}</strong></p> </ListGroup.Item>
            <ListGroup.Item> <p>BuiltupArea <strong className='fs-6'>{restaurant.BuiltupArea}</strong></p> </ListGroup.Item>
            <ListGroup.Item>
      <Review className='mt-3' reviewdata={restaurant.reviews}></Review>
      
            </ListGroup.Item>
      
          </ListGroup>
      
            </Col>
          </Row> ):""
      }  
    </>
  )
}

export default Flatview