import './data/data.js';
import './utils/get-random-positive-integer.js';
import {createObject} from './data/data.js';
import {OBJESTS_TO_GEN} from './data/data.js';

const generateObjects = (count) => {
  const objects = [];
  for (let object = 1; object <= count; object++) {
    objects.push(createObject(object));
  }
  return objects;
};

generateObjects(OBJESTS_TO_GEN);
