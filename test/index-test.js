const { expect } = require('chai');

const {
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey,
} = require('../index');

/*global describe, it */

describe('Objects', function () {
  describe('updateEmployeeWithKeyAndValue(object, key, value)', function () {
    it('returns an object with the original key-value pairs and the new key-value pair', function () {
      const obj = { prop: 1 };

      expect(updateEmployeeWithKeyAndValue(obj, 'prop2', 2)).to.deep.equal({
        prop: 1,
        prop2: 2,
      });
    });

    it('does not modify the original object, but rather returns a clone with the new data', function () {
      const obj = { prop: 1 };

      updateEmployeeWithKeyAndValue(obj, 'prop2', 2);

      expect(obj['prop2']).to.equal(undefined);
    });

    it('returns an object with an updated key-value pair', function () {
      const obj = { prop: 'old value' };

      const newObj = updateEmployeeWithKeyAndValue(obj, 'prop', 'new value');

      expect(newObj['prop']).to.equal('new value');
    });
  });

  describe('destructivelyUpdateEmployeeWithKeyAndValue(object, key, value)', function () {
    it('updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object', function () {
      const obj = { prop: 1 };

      expect(destructivelyUpdateEmployeeWithKeyAndValue(obj, 'prop2', 2)).to.deep.equal({
        prop: 1,
        prop2: 2,
      });

      expect(obj).to.deep.equal({
        prop: 1,
        prop2: 2,
      });
    });
  });

  describe('deleteFromEmployeeByKey(object, key)', function () {
    it('deletes `key` from a clone of object and returns the new object (it is non-destructive)', function () {
      const obj = { prop: 1 };
      const newObj = deleteFromEmployeeByKey(obj, 'prop');

      expect(newObj['prop']).to.equal(undefined);
    });

    it('does not modify the original object (it is non-destructive)', function () {
      const obj = { prop: 1 };

      deleteFromEmployeeByKey(obj, 'prop');
      expect(obj['prop']).to.equal(1);
    });
  });

  describe('destructivelyDeleteFromEmployeeByKey(object, key)', function () {
    it('returns object without the deleted key/value pair', function () {
      const obj = { prop: 1 };
      destructivelyDeleteFromEmployeeByKey(obj, 'prop');

      expect(obj['prop']).to.equal(undefined);
    });

    it('modifies the original object', function () {
      const obj = { prop: 1 };
      destructivelyDeleteFromEmployeeByKey(obj, 'prop');

      expect(obj['prop']).to.equal(undefined);
    });
  });
});

