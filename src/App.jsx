import { useState, useEffect } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { getDocs, collection } from 'firebase/firestore'
import { map, size } from 'lodash'

import './App.scss'
import db from "./assets/utils/firebase"

import AddTask from './components/AddTask'
import Task from './components/Task'



function App() {
  const [tasks, set_tasks] = useState(null)
  const [reloadTasks, set_reloadTasks] = useState(false)



  useEffect(()=> {
    (async ()=> {
      await getDocs(collection(db, "tasks"))
      .then(response=> {
        const arrayTasks = []
        response.docs.map(task=> {
          const object = task.data()
          object.id = task.id
          arrayTasks.push(object)
        })
        set_tasks(arrayTasks)
      })
    })()
    set_reloadTasks(false)
  }, [reloadTasks])



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
          {!tasks ? (
            <div className='loading'>
              <Spinner 
                animation='border' 
              />
              <span>Cargando...</span>
            </div>
          ) : size(tasks) === 0 ? (
            <h3>No hay tareas</h3>
          ) : (
            map(tasks, (task, index)=> <Task key={index} task={task} set_reloadTasks={set_reloadTasks} />)
          )}
        </Col>



        <Col className='todo_input'
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <AddTask set_reloadTasks={set_reloadTasks} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
