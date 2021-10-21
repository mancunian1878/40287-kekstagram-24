const OBJESTS_TO_GEN = 25;
const MESSAGE = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра',
  'В конце концов это просто непрофессионально.', 
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = ['Ирина', 'Ибрагим', 'Олег', 'Камилла'];


const createComment = (id) => ({
  id,
  avatar: `img/avatar-${Math.ceil(Math.random() * 6)}.svg`,
  message: MESSAGE[_.random(0, MESSAGE.length - 1)],
  name: NAMES[_.random(0, NAMES.length - 1)]
})
const createObject = (id) => {
  const comments = []
  const commentsCount = Math.ceil(Math.random() * 5)

  for (let i = 1; i <= commentsCount; i++) {
    comments.push(createComment(i))
  }

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;
  
  return Math.floor(result);
}


  return {
    id,
    url: `photos/${id}.jpg`,
    description: 'Мой первый опыт в фотографии',
    likes: getRandomPositiveInteger(15, 200),
    comments
  }
};



const generateObjects = (count) => {
  for (let i = 1; i <= count; i++) {
    console.log(createObject(i))
  }
};

generateObjects(OBJESTS_TO_GEN)
