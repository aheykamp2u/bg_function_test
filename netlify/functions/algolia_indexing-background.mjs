import algoliasearch from 'algoliasearch';

export default async (req, context) => {
  console.log('starting job');
  console.log('initing algolia client');
  const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
  const index = client.initIndex('andrew_test_index');
  
  console.log('generating objects');

  const objects = [];
  for(var i = 0; i < 1000; i++) {
    objects.push(generate_object(i));
  };

  console.log('indexing started');

  index
  .saveObjects(objects)
  .then(({ objectIDs }) => {
    console.log('success');
  })
  .catch(err => {
    console.log(err);
  });
};



const generate_object = (index) => {
  return {
    objectID: index,
    name: `test-object-${index}`,
    description1: `test-description-${index}`,
    description2: `test-description-${index}`,
    description3: `test-description-${index}`,
    description4: `test-description-${index}`,
    description5: `test-description-${index}`,
    description6: `test-description-${index}`,
    description7: `test-description-${index}`,
    description8: `test-description-${index}`,
    description9: `test-description-${index}`,
    description10: `test-description-${index}`,
    description12: `test-description-${index}`,
    description13: `test-description-${index}`,
    description14: `test-description-${index}`,
    description15: `test-description-${index}`,
    description16: `test-description-${index}`,
    description17: `test-description-${index}`,
    description18: `test-description-${index}`,
    description19: `test-description-${index}`,
    description21: `test-description-${index}`,
    description22: `test-description-${index}`,
    description23: `test-description-${index}`,
    description24: `test-description-${index}`,
    description25: `test-description-${index}`,
    description26: `test-description-${index}`,
    description27: `test-description-${index}`,
    description28: `test-description-${index}`,
    description29: `test-description-${index}`,
    description31: `test-description-${index}`,
    description31: `test-description-${index}`,
    description32: `test-description-${index}`,

  }
}
