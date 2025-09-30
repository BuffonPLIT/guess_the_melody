import { v4 as uuidv4 } from 'uuid';

const RANDOM = {
  name: 'Random',
  id: uuidv4(),
  type: 'iframe',
  color: '#E6E6FA',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'A Day To Remember ',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Pn-6eOxnEMI?si=bUfzQ4PosA8A5pqb&amp;start=3"
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
      answer: 'Bring Me The Horizon - Can You Feel My Heart',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QJJYpsA5tv8?si=Dvv-EixQmztIXyZs"
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
      answer: 'Taylor Swift - Blank Space',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/e-ORhEE9VVg?si=MwJtjJk6JprBKRQK&amp;start=5"
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
      answer: 'Papa Roach - Between Angels And Insects',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/H2jCbXiEQI4?si=lAZALzguZEpKYOVH"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    // {
    //   user: null,
    //   id: uuidv4(),
    //   answer: "Николай Скориков",
    //   questionNode: (
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/_xgQbkjCTRw?si=hItuzsbNPGXFnBs6&amp;start=55"
    //       title="YouTube video player"
    //       frameborder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //       allowfullscreen
    //     ></iframe>
    //   ),
    // },
    {
      user: null,
      id: uuidv4(),
      answer: 'Fall Out Boy - Thnks fr th Mmrs',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/onzL0EM1pKY?si=G5dN6SehijlE6wD4&amp;start=75"
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
      answer: 'Dua Lipa - New Rules',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/k2qgadSvNyU?si=xYZv9v4_eBj-emIL&amp;start=6"
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
      answer: 'Käärijä - Huhhahhei',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oF0YcfP179c?si=ClxidqGY77ed25GO&amp;start=63"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Skillet - Hero',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uGcsIdGOuZY?si=9UIRn6DZ-s9PelnH"
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
      answer: 'Doja Cat - Paint The Town Red',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/m4_9TFeMfJE?si=QmKPffzAHp4YOwbC&amp;start=63"
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
      answer: 'Limp Bizkit - Break Stuff',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZpUYjpKg9KY?si=DvRpclv4O5ptBqyI"
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
      answer: 'Rihanna - Where Have You Been',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HBxt_v0WF6Y?si=XC3bMSE7JpNjoG_s&amp;start=75"
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
      answer: 'Linkin Park',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vjVkXlxsO8Q?si=VwmITb_LckA6S00J&amp;start=49"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};

export { RANDOM };
