export function filterArrayOfObjectsByID(array, prop, id){
  return array.filter(el => el[prop] === id );
}