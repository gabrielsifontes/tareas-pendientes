import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './App.scss'

import AddTask from './components/AddTask'



function App() {

  return (
    <Container className='app'
      fluid /* Para que ocupe el 100vh de ancho */
    >
      <div className='header'>
        <h1>Tareas pendientes</h1>
      </div>

      <Row className='todo'>
        <Col className='todo__title'
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <h2>Today</h2>
        </Col>



        <Col className='todo_list'
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <p>Lista de tareas</p>
        </Col>



        <Col className='todo_input'
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <AddTask/>
        </Col>
      </Row>
    </Container>
  )
}

export default App
