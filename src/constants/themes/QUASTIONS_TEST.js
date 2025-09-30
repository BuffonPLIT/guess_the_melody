import { v4 as uuidv4 } from 'uuid';

const QUASTIONS_TEST = {
  name: 'For test',
  id: uuidv4(),
  type: 'iframe',
  color: '#000000',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Alex F',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/k85mRPqvMbE?start=6"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Lady Gaga',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bESGLojNYSo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Nirvana',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vabnZ9-ex7o"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Harry Potter',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iClEaJz_A0A"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
  ],
};

export { QUASTIONS_TEST };
