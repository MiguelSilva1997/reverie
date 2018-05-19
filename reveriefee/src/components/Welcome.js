import React, {Component} from 'react'
import {Jumbotron, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

import RobotsApi from '../services/RobotsApi'
import RobotTable from './RobotTable'

class Welcome extends Component {
  constructor(props, context) {
    super(props, context)

    this.onSubmit = this.onSubmit.bind(this)
    this.update = this.update.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
    this.delete = this.delete.bind(this)

    this.state = {
      robots: [],
      current_name: '',
      height: 0,
      weight: 0,
      intelligence_metric: 0,
      show: false,
      current_robot: {}
    }
  }

  currentName = e => this.setState({current_name: e.target.value})
  height = e => this.setState({height: e.target.value})
  weight = e => this.setState({weight: e.target.value})
  intelligence = e => this.setState({intelligence_metric: e.target.value})


  componentWillMount() {
    RobotsApi.getAllRobots()
    .then(response => {
      this.setState({robots: response})
    })
  }

  onSubmit(e) {
    RobotsApi.addRobot(this.state)
      .then(response => {
        return "success"
      })
  }

  onUpdate(){
    let robot = this.state.current_robot
    robot['current_name'] = this.state.current_name
    robot['height'] = this.state.height
    robot['weight'] = this.state.weight
    robot['intelligence_metric'] = this.state.intelligence_metric
    RobotsApi.updateRobot(robot)
      .then(response => {
        return 'success'
      })
  }

  update(e){
    e.preventDefault()
    let robot = this.state.robots[parseInt(e.target.id)]
    this.setState({show: true, current_robot: robot, current_name: robot.current_name, height: robot.height, weight: robot.weight, intelligence_metric: robot.intelligence_metric})
  }

  delete(e){
    RobotsApi.deleteRobot(e.target.id)
  }

  updateForm() {
    if (this.state.show) {
      return (
        <form onSubmit={this.onUpdate}>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>
            <FormControl name="current_name" value={this.state.current_name} onChange={this.currentName} type="text" placeholder="Jane Doe" />
          </FormGroup>
          <FormGroup controlId="formInlineHeight">
            <ControlLabel>Height</ControlLabel>
            <FormControl name="height" value={this.state.height} onChange={this.height} type="number" />
          </FormGroup>
          <FormGroup controlId="formInlineWeight">
            <ControlLabel>Weight</ControlLabel>
            <FormControl name="weight" value={this.state.weight} onChange={this.weight} type="number" />
          </FormGroup>
          <FormGroup controlId="formInlineWeight">
            <ControlLabel>intelligence_metric</ControlLabel>
            <FormControl name="intelligence_metric" value={this.state.intelligence_metric} onChange={this.intelligence} type="number" />
          </FormGroup>
          <Button type="submit">Update Robot</Button>
        </form>
      )
    }else {
      return (
        <div></div>
      )
    }
  }


  render() {
    return (
      <div>
        <Jumbotron style={{marginTop: '10px'}} >
          <h1>Robot World!</h1>
          <p>
            This is a simple robot application.
          </p>
          <p>
            <form onSubmit={this.onSubmit}>
              <FormGroup controlId="formInlineName">
                <ControlLabel>Name</ControlLabel>
                <FormControl name="current_name" value={this.state.name} onChange={this.currentName} type="text" placeholder="Jane Doe" />
              </FormGroup>
              <FormGroup controlId="formInlineHeight">
                <ControlLabel>Height</ControlLabel>
                <FormControl name="height" value={this.state.height} onChange={this.height} type="number" />
              </FormGroup>
              <FormGroup controlId="formInlineWeight">
                <ControlLabel>Weight</ControlLabel>
                <FormControl name="weight" value={this.state.weight} onChange={this.weight} type="number" />
              </FormGroup>
              <FormGroup controlId="formInlineWeight">
                <ControlLabel>intelligence_metric</ControlLabel>
                <FormControl name="intelligence_metric" value={this.state.intelligence_metric} onChange={this.intelligence} type="number" />
              </FormGroup>
              <Button type="submit">Create Robot</Button>
            </form>
          </p>
        </Jumbotron>
        <RobotTable robots={this.state.robots} update={this.update} delete={this.delete}/>
        {this.updateForm()}
      </div>
    )
  }
}

export default Welcome;
