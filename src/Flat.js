import {React,useState,useEffect} from 'react'
import Cardview from './Cardview'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Flat() {
var [resturentList,setResturent]=useState([])

const fetchData=async()=>{
  const result =await fetch('/flat.json')
  result.json().then(data=>{
    setResturent(data.restaurants)
  })
}
useEffect(()=>{
  fetchData()
},[])
  return (
    <Row>
      {
        resturentList.map(item=>(
       <Col className='p-5' lg={4} md={6}>
       <Cardview flatdata={item}></Cardview>
       </Col>   
        ))
      }
      </Row>
  )
}

export default Flat