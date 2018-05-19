const API = 'http://localhost:3000/'

class RobotsApi {

  getAllRobots(){
    return fetch(API + 'hosts')
      .then(response => response.json())
  }

  getRobot(id){
    let robotId = parseInt(id)
    return fetch(API + `hosts/` + robotId)
      .then(response => response.json())
  }

  addRobot(data) {
    return fetch(API + `hosts`, {
      method: 'POST',
      headers:
      { 'Content-Type': 'application/json' },
      body: JSON.stringify({ current_name: data.current_name,
                             height: data.height,
                             weight: data.weight,
                             intelligence_metric: data.intelligence_metric
                             })
    })
      .then(response => response.json())
  }

  updateRobot(data) {
    return fetch(API + `hosts/` + data.id, {
      method: 'PATCH',
      headers:
      { 'Content-Type': 'application/json' },
      body: JSON.stringify({ current_name: data.current_name,
                             height: data.height,
                             weight: data.weight,
                             intelligence_metric: data.intelligence_metric
                             })
    })
      .then(response => response.json())
  }

  deleteRobot(id) {
    return fetch(API + `hosts/` + id , { method: 'DELETE'})
      .then(response => {
        response.json()
      })
  }
}

module.exports = new RobotsApi;
