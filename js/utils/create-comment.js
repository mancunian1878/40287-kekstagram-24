import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {MESSAGES, NAMES} from './data.js';

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: MESSAGES[_.random(0, MESSAGES.length - 1)],
  name: NAMES[_.random(0, NAMES.length - 1)],
});

export {createComment};
