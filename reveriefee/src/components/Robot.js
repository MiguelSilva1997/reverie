import React, {Component} from 'react'
import {Panel, Row, Col } from 'react-bootstrap'

import RobotsApi from '../services/RobotsApi'

class Robot extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      robot: {},
      
    }
  }

  componentWillMount() {
    RobotsApi.getRobot(this.props.match.params.id)
    .then(response => {
      this.setState({robot: response})
    })
  }



  render() {
    return (
      <div style={{marginTop: "10px"}}>
        <Row>

          <Panel bsStyle="success">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Name</Panel.Title>
            </Panel.Heading>
            <Panel.Body>{this.state.robot.current_name}</Panel.Body>
          </Panel>

          <Panel bsStyle="success">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Height</Panel.Title>
            </Panel.Heading>
            <Panel.Body>{this.state.robot.height}</Panel.Body>
          </Panel>

          <Panel bsStyle="success">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Weight</Panel.Title>
            </Panel.Heading>
            <Panel.Body>{this.state.robot.weight}</Panel.Body>
          </Panel>

        </Row>

        <Row>

          <Panel bsStyle="success">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Intelligence</Panel.Title>
            </Panel.Heading>
            <Panel.Body>{this.state.robot.intelligence_metric}</Panel.Body>
          </Panel>

          <Panel bsStyle="success">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Date Added</Panel.Title>
            </Panel.Heading>
            <Panel.Body>{this.state.robot.date_added}</Panel.Body>
          </Panel>

          <Panel bsStyle="success">
            <Panel.Heading>
              <Panel.Title componentClass="h3">First Active</Panel.Title>
            </Panel.Heading>
            <Panel.Body>{this.state.robot.first_active}</Panel.Body>
          </Panel>

        </Row>

      </div>
    )
  }
}

export default Robot;
