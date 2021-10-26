const OBJESTS_TO_GEN = 25;
const MESSAGES = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра',
  'В конце концов это просто непрофессионально.', 
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = ['Ирина', 'Ибрагим', 'Олег', 'Камилла'];

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));

  const result = Math.random() * (upper - lower + 1) + lower;
  
  return Math.floor(result);
}


const createComment = (id) => ({
  id,
  avatar: 'img/avatar-${getRandomPositiveInteger(1, 6)}.svg',
  message: MESSAGES[_.random(0, MESSAGES.length - 1)],
  name: NAMES[_.random(0, NAMES.length - 1)],
});

const createObject = (id) => {
  const comments = [];
  const commentsCount = getRandomPositiveInteger(0, 7);

  for (let comment = 1; comment <= commentsCount; comment++) {
    comments.push(createComment(comment));
  };

  return {
    id,
    url: 'photos/${id}.jpg',
    description: 'Мой первый опыт в фотографии',
    likes: getRandomPositiveInteger(15, 200),
    comments
  }
};



const generateObjects = (count) => {
  for (let i = 1; i <= count; i++) {
    createObject(i);
  }
};

generateObjects(OBJESTS_TO_GEN)
