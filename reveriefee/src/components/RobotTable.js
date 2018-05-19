import React, {Component} from 'react'
import {Table, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


class RobotTable extends Component {
  constructor(props, context) {
    super(props, context)
  }

  onRender(){
    return this.props.robots.map((robot, i)=> {
      return (
        <tr key={robot.id} id={robot.id}>
          <td>{robot.id}</td>
          <td>{robot.current_name}</td>
          <td>{robot.height}</td>
          <td>{robot.weight}</td>
          <td>{robot.intelligence_metric}</td>
          <td>{robot.date_added}</td>
          <td>{robot.first_active}</td>
          <td><Link to={
            {pathname: '/hosts/' + robot.id,
            state: { robotId: robot.id }}
            } >
            View</Link></td>
          <td><Button bsStyle="success" id={i} onClick={this.props.update}>Update</Button></td>
          <td><Button bsStyle="warning" id={robot.id} onClick={this.props.delete}>Delete</Button></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Intelligence</th>
            <th>Date Added</th>
            <th>First Acvtive Date</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.onRender()}
        </tbody>
      </Table>
    )
  }
}

export default RobotTable;
