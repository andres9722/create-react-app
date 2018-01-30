import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CoursesList from './CoursesList'
import CourseAddForm from './CourseAddForm'
import uid from 'uid'
import { courses } from '../data/courses.json'

class App extends Component {
  constructor (...props) {
    super(...props)
    this.state = {
      courses: []
    }
    this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.resetData = this.resetData.bind(this)
  }

  handleOnAddCourse (e) {
    e.preventDefault()

    const form = e.target
    const course = {
      id: form.id.value,
      name: (form.name.value) ? form.name.value : App.defaultProps.name,
      teacher: (form.teacher.value) ? form.teacher.value : App.defaultProps.teacher
    }

    this.setState({
      courses: this.state.courses.concat([course])
    })

    form.reset()
  }

  fetchData () {
    setTimeout(() => this.setState({courses: courses}), 1000)
  }

  resetData () {
    this.setState({courses: []})
  }

  render () {
    if (!this.state.courses.length) {
      return (
        <div>
          <p>No hay cursos!</p>
          <button onClick={this.fetchData}>Cargar Cursos</button>
        </div>
      )
    } else {
      return (
        <div>
          <CourseAddForm onAddCourse={this.handleOnAddCourse} />
          <CoursesList courses={this.state.courses} />
          <button onClick={this.resetData}>Borrar Cursos</button>
        </div>
      )
    }
  }

  componentDidMount () {
    this.fetchData()
  }
}

App.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired
}

App.defaultProps = {
  id: uid(10),
  name: 'Curso desconocido',
  teacher: 'Profesor no asignado'
}

export default App
