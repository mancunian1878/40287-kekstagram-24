import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {createComment} from './create-comment.js';

const createObject = (id) => {
  const comments = [];
  const commentsCount = getRandomPositiveInteger(0, 7);

  for (let comment = 1; comment <= commentsCount; comment++) {
    comments.push(createComment(comment));
  }

  return {
    id,
    url: `photos/${id}.jpg`,
    description: 'Мой первый опыт в фотографии',
    likes: getRandomPositiveInteger(15, 200),
    comments,
  };
};

export {createObject};
