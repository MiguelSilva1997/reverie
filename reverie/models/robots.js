const environment = process.env.NODE_ENV || 'development'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)
pry = require('pryjs')
class Robots {

  getRobots() {
    return database.select().from('robots')
  }

  getRobot(id) {
    return database.select().returning('*').from('robots').where('id', id)
      .then(result => result[0])
  }

  addRobot(data) {
    return database('robots').returning('*').insert({current_name: data['current_name'],
                                                     height: parseFloat(data['height']),
                                                     weight: parseFloat(data['weight']),
                                                     intelligence_metric: parseInt(data['intelligence_metric']),
                                                     date_added: new Date,
                                                     first_active: new Date,
                                                    })
      .then(result => {
        result[0]
      })
  }

  update(data, id) {
    return database('robots').returning('*').where('id', id).update({current_name: data.current_name,
                                                                      height: parseFloat(data['height']),
                                                                      weight: parseFloat(data['weight']),
                                                                      intelligence_metric: parseInt(data['intelligence_metric'])
                                                                    })
      .then(result => result[0])
  }

  deleteFood(id){
    return database('robots').returning('*').where('id', id).del()
      .then(result => result[0])
  }

}

module.exports = new Robots;
