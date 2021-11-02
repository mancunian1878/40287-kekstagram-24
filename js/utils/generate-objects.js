import {createObject} from './create-object.js';
import {OBJESTS_TO_GEN} from './data.js';

const generateObjects = (count) => {
  const objects = [];
  for (let object = 1; object <= count; object++) {
    objects.push(createObject(object));
  }
  return objects;
};

generateObjects(OBJESTS_TO_GEN);

export {generateObjects};
