const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    describe('some test case', () => {
      it('should return hello world response', (done) => {
        request(app)
          .get('/')
          .expect(404)
          .expect((res) => {
            expect(res.body).toInclude({
              error: 'Page not found'
            })
          })
          .end(done);
      });
    });
  });

  describe('GET /users', () => {
    describe('some test case', () => {
      it('should return user Diego on array response', (done) => {
        request(app)
          .get('/users')
          .expect(200)
          .expect((res) => {
            expect(res.body).toInclude({name: 'Diego', age: 32});
          })
          .end(done);
      });
    });
  });

});
