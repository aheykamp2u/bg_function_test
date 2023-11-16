import algoliasearch from 'algoliasearch';

export default async (req, context) => {
  console.log('starting job');
  console.log('generating objects');

  const objects = [];
  for(var i = 0; i < 100; i++) {
    objects.push(generate_object(i));
  };

  console.log(objects);
};



const generate_object = (index) => {
  return {
    objectID: index,
    name: `test-object-${index}`,
  }
}
