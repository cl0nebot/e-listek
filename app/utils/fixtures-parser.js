export default function fixturesParser(input) {
  const ret = {data: []};

  // over models
  input.forEach(items => {
    // over records
    items.attributes.forEach(item => {
      const serialized = {
        attributes: {},
        type: items.type,
      };

      // over attributes
      items.index.forEach((index, i) => {
        if (index === 'id') {
          serialized.id = item[i];
        } else {
          serialized.attributes[index] = item[i];
        }
      });

      ret.data.push(serialized);
    });
  });

  return ret;
}
