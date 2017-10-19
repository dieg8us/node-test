const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      let res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });

    it('shouls async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });

  it('should square a number', () => {
    let res = utils.square(11);

    expect(res).toBe(121).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(11, (square) => {
      expect(square).toBe(121).toBeA('number');
      done();
    });
  });

});


it('should expect some values', () => {
  // expect({name: 'diego'}).toEqual({name: 'Diego'});
  // expect([2,3,4]).toInclude(2);
  // expect([2,3,4]).toExclude(1);
  expect({
    name: 'Diego',
    age: 32,
    location: 'Santiago'
  }).toExclude({
    age: 23
  });
});

it('should verify first and last name are set', () => {
  // let user = {
  //   firstName: '',
  //   lastName: ''
  // };

  let user = utils.setName({}, "Diego Uribe");

  expect(user).toInclude({firstName: "Diego"});
  expect(user).toInclude({firstName: "Diego", lastName: "Uribe"});
  // expect(user.firstName).toBe("Diego");
  // expect(user.lastName).toBe("Uribe");
});
