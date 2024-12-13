const { expect } = require('chai');
const {
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey,
} = require('../index');

describe('Objects', function () {
  describe('updateEmployeeWithKeyAndValue(object, key, value)', function () {
    it('returns an object with the original key-value pairs and the new key-value pair', function () {
      const employee = { name: 'Sam', streetAddress: '11 Broadway' };
      const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');
      expect(updatedEmployee).to.eql({ name: 'Sam', streetAddress: '12 Broadway' });
    });

    it('does not modify the original object', function () {
      const employee = { name: 'Sam', streetAddress: '11 Broadway' };
      updateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');
      expect(employee.streetAddress).to.equal('11 Broadway');
    });
  });

  describe('destructivelyUpdateEmployeeWithKeyAndValue(object, key, value)', function () {
    it('updates the object destructively and returns the updated object', function () {
      const employee = { name: 'Sam', streetAddress: '11 Broadway' };
      const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');
      expect(updatedEmployee).to.eql({ name: 'Sam', streetAddress: '12 Broadway' });
    });
  });

  describe('deleteFromEmployeeByKey(object, key)', function () {
    it('deletes the key non-destructively and returns a new object', function () {
      const employee = { name: 'Sam', streetAddress: '11 Broadway' };
      const updatedEmployee = deleteFromEmployeeByKey(employee, 'streetAddress');
      expect(updatedEmployee).to.eql({ name: 'Sam' });
    });

    it('does not modify the original object', function () {
      const employee = { name: 'Sam', streetAddress: '11 Broadway' };
      deleteFromEmployeeByKey(employee, 'streetAddress');
      expect(employee.streetAddress).to.equal('11 Broadway');
    });
  });

  describe('destructivelyDeleteFromEmployeeByKey(object, key)', function () {
    it('deletes the key destructively and modifies the original object', function () {
      const employee = { name: 'Sam', streetAddress: '11 Broadway' };
      destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
      expect(employee.streetAddress).to.be.undefined;
    });
  });
});
