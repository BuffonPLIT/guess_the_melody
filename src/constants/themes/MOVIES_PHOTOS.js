import { v4 as uuidv4 } from 'uuid';

const MOVIES_PHOTOS = {
  name: 'Movies Photo',
  id: uuidv4(),
  type: 'image',
  color: '#FFA500',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Monika Belucci',
      questionNode: 'https://i.imgur.com/wJW0nuX.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Jim Carrey',
      questionNode: 'https://i.imgur.com/ta4X5bo.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Bruce Willis',
      questionNode: 'https://i.imgur.com/KvGXEmo.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Sharliz Teron',
      questionNode: 'https://i.imgur.com/go3SqtW.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Harrison Ford',
      questionNode: 'https://i.imgur.com/5536Imm.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Leonardo Di Caprio',
      questionNode: 'https://i.imgur.com/R6I0pN4.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Sylvester Stallone',
      questionNode: 'https://i.imgur.com/pcjFidS.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Scarlett Johansson',
      questionNode: 'https://i.imgur.com/nL3SWqB.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Pamela Andersen',
      questionNode: 'https://i.imgur.com/usW15vm.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Daniel Radcliffe',
      questionNode: 'https://i.imgur.com/mOwUn6u.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Milla Jovovich',
      questionNode: 'https://i.imgur.com/cCVkCiA.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Megan Fox',
      questionNode: 'https://i.imgur.com/YWCGA7o.png',
    },
  ],
};

export { MOVIES_PHOTOS };
