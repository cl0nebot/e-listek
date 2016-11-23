import fixturesParser from 'elistek/utils/fixtures-parser';
import {module, test} from 'qunit';

const expectedResult = {
  "data": [
    {
      "id": "4d9rsd17",
      "attributes": {"name": "zemlobka", "type": "zelenina", "price": 3},
      "type": "items",
    }, {
      "id": "8leukqep",
      "attributes": {"name": "hodolka", "type": "zelenina", "price": 4},
      "type": "items",
    },
  ],
};

module('Unit | Utility | fixtures parser');

// Replace this with your real tests.
test('it works', assert => {
  const result = fixturesParser([{
    type: 'items',
    index: ["id", "name", "type", "price"],
    attributes: [
      ["4d9rsd17", "zemlobka", "zelenina", 3],
      ["8leukqep", "hodolka", "zelenina", 4],
    ],
  }]);
  assert.deepEqual(result, expectedResult);
});
