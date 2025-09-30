import { v4 as uuidv4 } from 'uuid';

const LANG = {
  name: 'language',
  id: uuidv4(),
  type: 'iframe',
  color: '#FFFF00',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Georgian',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5SMWMztS6_k?si=aMHmJ_6E2HYOmViS&amp;start=22"
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
      answer: 'Suomi',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Zrf3uxjWj6k?si=wyO3TiVM6VaTgWry"
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
      answer: 'English',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JtlUzwRaRao?si=gIxtaAAJpj1pwYV-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },

    // {
    //   user: null,
    //   id: uuidv4(),
    //   answer: "Indian",
    //   questionNode: (
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/M5On6yZhX94?si=WsRIH9n8tQLSJTjR&amp;start=12"
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
      answer: 'Español',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GMFewiplIbw?si=212rGZ-wQS6BNo0X&amp;start=39"
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
      answer: 'Ukraine',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/udUgNVPQfZY?si=GWQYFsR-HGn0oU2F"
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
      answer: 'Greece',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XGz4vbJjnkY?si=tQUpkQukAjXO3e-_&amp;start=54"
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
      answer: 'Belarus',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CgXkal3nPIA?si=lolHD6TgHoWxwIOX&amp;start=82"
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
      answer: 'Mongol',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jM8dCGIm6yc?si=o8CAiUN1RLN66iJI&amp;start=148"
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
      answer: 'Polski',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/U_FirAt6UKg?si=qlOfCT_OsPVgoHQR&amp;start=33"
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
      answer: 'Bulgarian',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IwqQEV95lns?si=PbRp7gwjDIw6ydDT"
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
      answer: 'China',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NXpIQSdX_wQ?si=nuMYnFnHOi75jCjg&amp;start=15"
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
      answer: 'Turkey',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/T_mtTxmjpwc?si=-v0TDWYBrI2CZe9T&amp;start=33"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};

export { LANG };
