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
      response.body[0].current_name.should.equal("Robot1");
    })
    .catch((error) => {
      throw error;
    });
  });

  it('should return one robot', () => {
    return chai.request(server)
    .get('/hosts/0')
    .then((response) => {
      response.body.should.have.property('current_name');
      response.body.current_name.should.equal("Robot1");
    })
    .catch((error) => {
      throw error;
    });
  });

  
});

describe('API Routes', () => {

});
