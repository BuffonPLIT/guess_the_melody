import { v4 as uuidv4 } from 'uuid';

const MOVIES_1 = {
  name: 'Movies 1',
  id: uuidv4(),
  type: 'iframe',
  color: '#FF4500',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Диктатор',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6vhl7jVOeSE?si=RIOZRm_cJiZsNTOv&amp;start=125"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Warcraft',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Sro5JO_PB9M?si=YMYSrSR5NXe-p70x&amp;controls=0&amp;start=22"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Underworld',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EnNvqa7DCn8?si=vQy6yAyfHV002PJM&amp;start=184"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Mad Max',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/e2MHdpjbvL8?si=-4ALjyWrvO3yOCb7"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'The millers',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ibGMVjBNy_4?si=5sEUqJRKJp2nHs29&amp;start=67"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Бешеные псы',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JKZOKjMu1vI?si=3r99cV6fHSYnMe5J"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Люди Х',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HmAtIXdnzwo?si=tta4k8l0Yl1LHs5z&amp;start=99"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Pulp fiction',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WMIOPYeLzWM?si=BLc7wrAVEN0kONYV&amp;start=186"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'LOTR',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JegdkOnOhDU?si=nuiTraWtTgJCn-1G&amp;start=64"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Укрощение строптивого',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Z_XoQiAcW88?si=0zU7be1k_sogKGkz&amp;start=90"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Matrix',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ksuohw5_rR0?si=9ihUrG8Asd82Xuov&amp;start=44"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Брюс всемогущий',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dEcuYo9kG04?si=dnDMvhYLwjsDBFJ1&amp;start=201"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};

export { MOVIES_1 };
