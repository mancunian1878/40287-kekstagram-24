import {getRandomPositiveInteger} from '../utils/get-random-positive-integer';

const OBJECTS_TO_GEN = 25;
const MESSAGES = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра', 'В конце концов это просто непрофессионально.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = ['Ирина', 'Ибрагим', 'Олег', 'Камилла'];
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENT_MAX = 7;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: MESSAGES[_.random(0, MESSAGES.length - 1)],
  name: NAMES[_.random(0, NAMES.length - 1)],
});

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

const generateObjects = (count) => {
  const objects = [];
  for (let object = 1; object <= count; object++) {
    objects.push(createObject(object));
  }
  return objects;
};

generateObjects(OBJECTS_TO_GEN);

export {createComment, createObject, generateObjects,
  OBJECTS_TO_GEN,
  MESSAGES,
  NAMES,
  LIKES_MIN,
  LIKES_MAX,
  COMMENT_MAX,
  AVATAR_MIN,
  AVATAR_MAX
};
