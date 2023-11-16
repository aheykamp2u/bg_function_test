import algoliasearch from 'algoliasearch';

export default async (req, context) => {
  console.log('starting job');
  console.log('initing algolia client');
  const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
  const index = client.initIndex('andrew_test_index');
  
  console.log('generating objects');

  const objects = [];
  for(var i = 0; i < 100; i++) {
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
  }
}
