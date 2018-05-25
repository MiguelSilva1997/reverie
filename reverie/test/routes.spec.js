const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app.js');

chai.use(chaiHttp);

describe('Client Routes', () => {
  it('should return all the robots', () => {
    return chai.request(server)
    .get('/hosts/')
    .then((response) => {
      response.body[0].should.have.property('current_name');
      response.body[0].current_name.should.equal("Robot2");
    })
    .catch((error) => {
      throw error;
    });
  });

  it('should return one robot', () => {
    return chai.request(server)
    .get('/hosts/1')
    .then((response) => {
      response.body.should.have.property('current_name');
      response.body.current_name.should.equal("Robot2");
    })
    .catch((error) => {
      throw error;
    });
  });

  it('should add a robot', () => {
    return chai.request(server)
      .post('/hosts')
      .send({date_added: new Date, first_active: new Date, current_name: "Robot4", height: 5.5, weight: 55 , intelligence_metric: 15})
      .then((response) => {
        response.should.have.status(201);
        response.body.message.should.equal('Successfully added robot.')
      })
      .catch((error) => {
        throw error;
      });
  });

  it('should update a robot', () => {
    return chai.request(server)
      .patch('/hosts/2')
      .send({date_added: new Date, first_active: new Date, current_name: "Robot5", height: 5.3, weight: 100, intelligence_metric: 5})
      .then((response) => {
        response.should.have.status(201);
      })
      .catch((error) => {
        throw error;
      });
  });

  it('should delete a robot', () => {
    return chai.request(server)
      .delete('/hosts/2')
      .then((response) => {
        response.should.have.status(201);
        response.body.message.should.equal('Successfully Deleted Robot')
      })
      .catch((error) => {
        throw error;
      });
  });

});
