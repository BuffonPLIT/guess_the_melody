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
const QUASTIONS_80S = {
  name: '80s',
  id: uuidv4(),
  type: 'iframe',
  color: '#006400',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'ABBA - Gimme!Gimme!Gimme!',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XEjLoHdbVeE?start=18"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Boney M - Daddy Cool',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FYGTT7YhywA?start=23"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Europe - The final Countdown',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9jK-NcRmVcw?start=13"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'CC Catch - Cause You Are Young',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/u0sp-2dF3ME?start=34"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Dead Or Alive - You Spin Me Round',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PGNiXGX2nLU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Shocking Blue - Venus',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8LhkyyCvUHk?start=32"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Kiss - I Was Made For Loving You',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZhIsAZO5gl0?start=34"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'a-Ha - Take On Me',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/djV11Xbc914?start=19"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Michael Jackson - Beat It',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oRdxUFDoQe0?start=52"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Madonna - La Isla Bonita',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zpzdgmqIHOQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Queen - Another One Bites',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rY0WxgSXdEE?start=45"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Modern Talking - Cheri Cheri Lady',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eNvUS-6PTbs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
  ],
};
const QUASTIONS_SOUNDTRACK_4 = {
  name: 'Soundtrack 4',
  id: uuidv4(),
  type: 'iframe',
  color: '#FF0000',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Taxi',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/i8ITGzgccn0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'The Fifth Element',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oliRQhuy5P8?start=25"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Terminator 2',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/piLwaJKQGkA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Friends',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rGqzXQQEn6A?start=122"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Wensday',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qik_1dDvzEs?start=10"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'The Lord Of The Ring',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VfZBayQxkx8?start=173"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Pulp Fiction',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WSLMN6g_Od4?start=85"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Requiem For A Dream',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rgmriPFK2-I?start=42"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Leon',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QK-Z1K67uaA?start=173"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Transformers 2',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lxxBlVoVvZY?start=77"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Forsage 3',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/z_V5cIaDRAw?start=6"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Yamakasi',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YpC5V5CwGXg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
  ],
};
const GUES_LANGUAGE = {
  name: 'Guess language',
  id: uuidv4(),
  type: 'iframe',
  color: '#FFD700',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Franch',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ig8U7GLIrok?start=60"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Jewish',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/37SodCJn9Co?start=43"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Serbian',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-vD_BGtcVHE?start=79"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Belarusian',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nax9G1YoTDQ?start=59"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Icelandian',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pqnMkUcTmys?start=64"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Netherlands',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lA3mbnV1wUI?start=5"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Japanice',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XIROsysWyL8?start=19"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Deuch',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zOvsyamoEDg?start=55"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Ukrainian',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YTTtHUJ9xfc?start=19"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Moldavian',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ig8m5uxRvhk?start=32"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Lithuanian',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/W_l0uoANOaA?start=151"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Gypsy',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6ZqaXHSE7gY?start=18"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
  ],
};
const QUASTIONS_90S = {
  name: '90s 3',
  id: uuidv4(),
  type: 'iframe',
  color: '#32CD32',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'The Cranberries - Zombie',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6Ejga4kJUts?start=153"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Nirvana - Smells Like Teen Ppirit',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hTWKbfoikeg?start=116"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Shakira - Whenever',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/weRHyjj34ZE?start=3"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Avrile Lavigne - Complicated',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5NPBIwQyPWE?start=68"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Ricky Martin - Livin La Vida Loca',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/p47fEXGabaY?start=68"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'DMX - Party Up',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/thIVtEOtlWM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Cristina Aguilera - Genie in A Bott...',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kIDWgqDBNXA?start=46"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Natalia Oreiro - Cambio Dolor',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/G6OYDUomYwI?start=44"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'The Offspring - The Kids Are Not ...',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7iNbnineUCI?start=34"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Britney Spearts - Baby One Mory Time',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/C-u5WLJ9Yk4?start=20"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Jenifer Lopez - Jenny from the',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dly6p4Fu5TE?start=45"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Rammstein - Du Hast',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/W3q8Od5qJio?si=Mu5QaAawXjWwjxUZ&amp;start=217"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const QUASTIONS_00S = {
  name: '2000s',
  id: uuidv4(),
  type: 'iframe',
  color: '#00FF00',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Green Day - American Idiot',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ee_uujKuJMI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'The Cardigans - My Favourite Game',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/u9WgtlgGAgs?start=31"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Justin Timberlake - Cry Me A River...',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DksSPZTZES0?start=11"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Alizee - Moi Lolita',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QpbHdIrtpNo?start=135"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Katty Perry - I Kiss A Girl',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tAp9BKosZXs?start=69"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'The Black Eyed Peas - My Humps',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iEe_eraFWWs?start=45"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Bomfunk MC"s - Something Going On',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MSqDIWI__Ew?start=40"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: '50 Cent - In Da Club',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5qm8PH4xAss"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Lady Gaga - Just Dance',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2Abk1jAONjw?start=4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Armin Van Buren feat Sharon den Adel',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TxvpctgU_s8?start=56"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Rihanna - Disturbia',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/E1mU6h4Xdxc?start=69"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Beyonce - Crazy In Love',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ViwtNLUqkMY?start=4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
  ],
};
const QUASTIONS_ACTUAL = {
  name: '2010+',
  id: uuidv4(),
  type: 'iframe',
  color: '#CCFFCC',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Billie Eilish - bad guy',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DyDfgMOUjCI?start=20"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'PSY - GENTLEMAN',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ASO_zypdnsQ?start=50"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
          src="https://www.youtube.com/embed/k2qgadSvNyU?start=70"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Imagine Dragons - Believer',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7wtfhZwyrcc?start=153"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Luis Fonsi - Despacito',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kJQP7kiw5Fk?start=83"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'DIE ANTWOORD - BABY"S ON FIRE',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HcXNPI-IPPM?start=192"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Justin Bieber - Sorry',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fRh_vgS2dFE?start=153"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
          src="https://www.youtube.com/embed/HBxt_v0WF6Y?start=135"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Adele - Rolling in the Deep',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rYEDA3JcQqw?start=41"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'KAZKA — ПЛАКАЛА',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5Fv19KVVya8?start=93"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Shakira - Waka Waka',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pRpeEdMmmQ0?start=26"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Rammstein - Deutschland',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NeQM1c-XCDc?start=69"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
  ],
};
const METAL_1 = {
  name: 'Metal Childhood 1',
  id: uuidv4(),
  type: 'iframe',
  color: '#00008B',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'HIM - Wicked Game',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8oYodfK4DkE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Slipknot - Psychosocial',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5abamRO41fE?start=21"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Korn - Freak On a Leash',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jRGrNDV2mKc?start=79"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Within Temptation - Stand My Ground',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/98xh5Hb9QAM?start=45"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'System Of A Down - Toxicity',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iywaBOMvYLI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Limp Bizkit - Rollin',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RYnFIRc0k6E?start=61"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Lordi - Hard Rock Hallelujah',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-6Xl9tBWt54?start=39"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Marilyn Manson - Tainted Love',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Tlf8Aq5edgo?start=30"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Nightwish - Nemo',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kIBdpFJyFkc?start=59"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Static-X - The Only',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vMCbJB4yNXo?start=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Black Sabbath - Paranoid',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WLAsNzYA8gk?start=15"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Metallica - The Unforgiven',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ckom3gf57Yw?start=27"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
  ],
};
const QUASTIONS_80S_2 = {
  name: '80s',
  id: uuidv4(),
  type: 'iframe',
  color: '#4A7C59',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Madonna - Like A Prayer',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/79fzeNUqQbQ?start=40"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Bad Boys Blue - You"re A Woman',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5dkpk1gmaDc?start=144"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Modern Talking - You"re My Heart',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4kHl4FoK1Ys?start=4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Depeche Mode - Enjoy The Silence',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/aGSKrC7dGcY?start=74"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Bon Jovi - You Give Love A Bad Name',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KrZHPOeOxQQ?start=6"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Boney M. - Gotta Go Home',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ddq5Rdx8Uw4?start=3"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'ABBA - Lay All Your Love On Me',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ulZQTrV8QlQ?start=74"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Scorpions - Still Loving You',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CjRas1yOWvo?start=120"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Deep Purple - Smoke On The Water',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gBiNR9SY7Gw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Michael Jackson - Smooth Criminal',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/h_D3VFfhvs4?start=65"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Duran Duran - Come Undone',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Epj84QVw2rc?start=104"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'AC/DC - Hells Bells',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/etAIpkdhU9Q?start=68"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
  ],
};
const QUASTIONS_SOUNDTRACK_2 = {
  name: 'Soundtrack 2',
  id: uuidv4(),
  type: 'iframe',
  color: '#B22222',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'The Rock',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gPtPxqTdkig?start=256"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: '8 mile',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1UbigwBZlKo?start=30"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
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
          src="https://www.youtube.com/embed/tuRhE7y6-EA?start=277"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Blade',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cNOP2t9FObw?start=9"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Titanic',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OSZCFFpix2g?start=75"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Pirates Of Caribbean',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8TTUBMTInVE?start=20"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'The Office',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lNL0Ty_8_ck"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Saw',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hWaNoK3gN6M?start=52"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Peppa Pig',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yUlVxPjjoo0?start=30"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Wlly Wonka',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QkC8wPSmcPg?start=30"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'James Bond',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/U9FzgsF2T-s"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Zorro',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3ctXOC_NIDE?start=44"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
  ],
};
const QUASTIONS_SOUNDTRACK_3 = {
  name: 'Soundtrack 3',
  id: uuidv4(),
  type: 'iframe',
  color: '#DC143C',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'The Lord Of The Ring',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1OvmsZ5-gYw?start=117"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Amelie',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2W_G3xmSGfo?start=58"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'From Dusk Till Dawn',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_05lRKSdJBM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Sinister',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_PgwXe6lAsQ?start=138"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Rocky',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DhlPAj38rHc?start=9"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Ognem i Mieczem',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3_VcE1yOzPU?start=49"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Resident Evil',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EBGvtkVVas0?start=59"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Dirty Dancing 2',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sC5wFByeqn8?start=15"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Indiana Jones',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CXDY0jvaCPw?start=3"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Prison Break',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/aXBVoZ48fRc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'The Mask',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CL0VoyeqZ3c"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Eurotrip Remaster',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jUR0RtGJUqc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
  ],
};
const QUASTIONS_RAP = {
  name: 'Rap+Hip-Hop',
  id: uuidv4(),
  type: 'iframe',
  color: '#000000',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'The Black Eyed Peas - Don"t Phunk With My Heart',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/P4Bda6_usuc?start=58"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: '50 Cent - Candy Shop',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SRcnnId15BA?start=29"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Bomfunk MC"s - Freestyler',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ymNFyxvIdaM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Will Smith - Party Starter',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FYxvPOK6_xg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Die Antwoord - Rich Bitch',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8bdeizHM9OU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Dr. Dre - Still D.R.E. ft. Snoop Dogg',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_CL6n0FJZpk?start=31"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Cypis - Putin',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dBqBJ6C5Mkw?start=34"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'DMX - Where The Hood At',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6CqXgs-7ico?start=21"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Eminem - Without Me',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YVkUvmDQ3HY?start=236"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: '2Pac - California Love feat. Dr. Dre',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/omfz62qu_Bc?si=NS1K76w8hM7wwcHQ&amp;start=217"
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
      answer: 'Kalush Orchestra - Stefania',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Z8Z51no1TD0?start=70"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Coolio - Gangsta"s Paradise',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fPO76Jlnz6c?start=12"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
  ],
};
const POP_1 = {
  name: 'Pop Childhood 1',
  id: uuidv4(),
  type: 'iframe',
  color: '#FF69B4',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Kylie Minogue - Can"t Get You Out Of My Head',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/c18441Eh_WE?start=7"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'French Affair - Comme ci comme ca',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nsFEN-e94VA?si=v-wA8_Yelp92ENXD&amp;start=75"
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
      answer: 'Anastacia - Sick and Tired',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HzfyCuPVpCY?start=19"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Calogero - Face à la mer',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MFhKnRLEihE?start=20"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Girls Aloud - Sound Of The Underground',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/V9Wv4SCBiTE?start=45"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Spice Girls - Wannabe',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gJLIiF15wjQ?start=75"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Sonia & Selena - Deja que mueva, mueva, mueva',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/O-_DYw7d_gI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Britney Spears - Oops!...I Did It Again',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CduA0TULnow?start=36"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Cher - Believe',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nZXRV4MezEw?start=74"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Alizée - J"ai pas vingt ans !',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/B8uoyPZhuUw?start=70"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Ace of Base - All That She Wants ',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/d73tiBBzvFM?start=93"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Titiyo - Come Along',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yLsVGwNWOA4?start=33"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
  ],
};
const POP_NEW = {
  name: 'New Pop',
  id: uuidv4(),
  type: 'iframe',
  color: '#FFB6C1',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Dua Lipa - Levitating Featuring DaBaby',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TUVcZfQe-Kw?start=19"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Adele - Hello',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YQHsXMglC9A?start=129"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Meghan Trainor - Me Too',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qDRORgoZxZU?start=36"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Время и Стекло - Дим',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NJPXs7J7JyY?start=44"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Mylène Farmer feat. Sting - Stolen Car',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HQkkmYIu95I?start=99"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Rihanna - We Found Love ft. Calvin Harris',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tg00YEETFzg?start=88"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Becky G, Bad Bunny - Mayores',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GMFewiplIbw?start=38"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Indila - Ainsi Bas La Vida',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ig8U7GLIrok?start=45"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Shakira - Chantaje (Official Video) ft. Maluma',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6Mgqbai3fKo?start=96"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Jennifer Lopez - On The Floor ft. Pitbull',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/t4H_Zoh7G5A?start=106"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Katy Perry - Roar',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CevxZvSJLk8?start=67"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Billie Eilish, Khalid - lovely',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/V1Pl8CzNzCw?start=71"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
  ],
};
const ROCK = {
  name: 'Rock',
  id: uuidv4(),
  type: 'iframe',
  color: '#00BFFF',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Nickelback - How You Remind Me',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1cQh1ccqu8M?start=26"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Travis - Sing',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eYO1-gGWJyo?start=32"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'One Step Closer - Linkin Park',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4qlCC1GOwFw?start=25"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Nirvana - Come As You Are',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vabnZ9-ex7o?start=9"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'No Doubt - Don"t Speak',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TR3Vdo5etCQ?start=36"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Blur - Song 2',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SSbBvKaM6sk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Rammstein - Links 2 3 4',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ph-CA_tu5KA?start=8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Avril Lavigne - Girlfriend ',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Bg59q4puhmg?start=72"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Sum 41 - In Too Deep',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/emGri7i8Y2Y?start=36"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Океан Ельзи - Я так хочу...',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ll4fBm1apsA?start=58"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'The Offspring - Pretty Fly',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AltMeuPkWRs?start=5"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Крамбамбуля - Госцi',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7LMflMPqx1s?start=11"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          al
        ></iframe>
      ),
    },
  ],
};
const ROCK_3 = {
  name: 'Rock 3',
  id: uuidv4(),
  type: 'iframe',
  color: '#7DF9FF',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Ляпic - Панас',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GTUt2eed3yA?si=TjhIH3Elm-6otWHd"
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
      answer: 'Warlock',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ddllHHATQgs?si=sejk7O8FITnxWFQ3&amp;start=116"
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
      answer: 'The Rasmus - No Fear (Official Music Video)',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qMYxkh224Tg?si=IVkTQ-cA-Gk5XGEJ&amp;start=116"
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
      answer: 'Zdob si Zdub x Irina Rimes - Sanziene',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HG4__bwU-Tc?si=pwXHwhchhYEpM7Vj&amp;start=155"
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
      answer: 'AFI - Miss Murder',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YU4hhNKsPog?si=JaOBdk-KdagqVSk8&amp;start=200"
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
      answer: 'PIERSI - Bałkanica',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XOIQoobgB40?si=3PEX9PCco5uugVeE&amp;start=68"
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
      answer: 'Crazy Town - Butterfly',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6FEDrU85FLE?si=IgRaTkVFUBA1SUNv&amp;start=142"
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
      answer: 'Воплі Відоплясова',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/35XGJbsJb-A?si=nIFnQtgX2nGJcq7K&amp;start=214"
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
      answer: 'Travis - Sing',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eYO1-gGWJyo?si=nrZ9a9df0f31hVuk&amp;start=54"
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
      answer: 'Bloodhound Gang - I Hope You Die',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kbGSa11yA1c?si=Y3Ji1agspibhDmDV&amp;start=205"
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
      answer: 'Amy Macdonald - This is the Life',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iRYvuS9OxdA?si=51dnkd4gLoOXyFkI&amp;start=85"
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
      answer: 'Billy Talent - Rusted From The Rain ',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RAOnUF8t20w?si=utqivQ5XeCZCAyJU&amp;start=61"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const STARS_PHOTOS = {
  name: 'Music Photo',
  id: uuidv4(),
  type: 'image',
  color: '#FF8C00',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Мiхалок',
      questionNode: 'https://i.imgur.com/MOKth32.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Kurt Cobain',
      questionNode: 'https://i.imgur.com/4E45jVS.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Shakira',
      questionNode: 'https://i.imgur.com/eC2s8Ig.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Lady Gaga',
      questionNode: 'https://i.imgur.com/oygF3Va.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Dorofeeva',
      questionNode: 'https://i.imgur.com/Cue5wH4.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: '50 Cent',
      questionNode: 'https://i.imgur.com/ri6j7HM.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Beatles',
      questionNode: 'https://i.imgur.com/SSZmRTs.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Elton John',
      questionNode: 'https://i.imgur.com/aRaYyMS.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Данилко Андрій',
      questionNode: 'https://i.imgur.com/A0j7IcH.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Rihanna',
      questionNode: 'https://i.imgur.com/TMfgSb2.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Eminem',
      questionNode: 'https://i.imgur.com/mCfSOka.png',
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Halochka',
      questionNode: 'https://i.imgur.com/IyIOkpc.png',
    },
  ],
};
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
const QUASTIONS_SOUNDTRACK_1 = {
  name: 'Soundtrack 1',
  id: uuidv4(),
  type: 'iframe',
  color: '#8B0000',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: '1 + 1',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Y7jjaNge8gc?si=ig9DFhrRTPSTFiv_&amp;start=37"
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
      answer: 'Interstalor',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UDVtMYqUAyw?si=bGOb_3x8UmpZqkmr"
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
      answer: 'Голодные игры',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/F3hTW9e20d8?si=TgatswwmbgkyU8VU&amp;start=104"
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
      answer: 'Snatch',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bjnYwNwCEaM?si=OOjo7JnIdZdNj4sv&amp;start=292"
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
      answer: 'Секс в большом городе',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jNNTEMI5Bmk?si=eq3Wgrj7uPaA9sAO"
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
      answer: 'Астерикс и Обеликс',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kTUi2lp7oWM?si=SvpIjPpNNsZGW1II&amp;start=19"
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
      answer: 'Ghostbusters',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Fe93CLbHjxQ?si=E6rH3CdPan2mRD4b&amp;start=7"
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
      answer: 'Крестный отец',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ithOIlnhv_A?si=fQtaENAOYjJq2RjN"
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
      answer: 'Хороший плохой злой',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5PCeUkRRezY?si=xJJ6VEVYpcIyWfiM&amp;start=8"
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
      answer: 'Острые козырьки',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KGD2N5hJ2e0?si=Mx5XQtrhWCziFGcK&amp;start=2"
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
      answer: 'Дюна',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BdtiYwSP9ko?si=rcLt8MukS9-vv20v&amp;start=191"
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
      answer: 'Полицейсая академия',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jRxgXzk_L0s?si=2ltHx_-jTBaAXCPY&amp;start=21"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
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
const EUROVISION = {
  name: 'Eurovision countries',
  id: uuidv4(),
  type: 'iframe',
  color: '#FF1493',
  list: [
    // {
    //   user: null,
    //   id: uuidv4(),
    //   answer: "ITA",
    //   questionNode: (
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/M-aoyPa41Ic?si=4HZ-jkOAATGqLKSB&amp;start=53"
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
      answer: 'ITA',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RVH5dn1cxAQ?si=LC2w99CejenogHmu&amp;start=124"
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
      answer: 'AUS',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QRUIava4WRM?si=37nqYPg4qNXgWy8t&amp;start=54"
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
      answer: 'NOR',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WXwgZL4zx9o?si=qpdrvSy0FNMMTnrR&amp;start=25"
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
    //   answer: "GER",
    //   questionNode: (
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/7pL9vdpSvnY?si=xl0KzDmUm501Gp9h&amp;start=87"
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
      answer: 'FIN',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gAh9NRGNhUU?si=_DCUS0PCXFUsBtG9&amp;start=53"
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
      answer: 'NED',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GXOqK4Au5nA?si=FgAAfBZfPcLWOFfD&amp;start=53"
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
    //   answer: "ISR",
    //   questionNode: (
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/84LBjXaeKk4?si=O_X5VzI_TzhCNNTd&amp;start=22"
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
      answer: 'MOL',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pHXDMe6QV-U?si=Xuww2LkNGt3LskFz&amp;start=46"
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
    //   answer: "SWE",
    //   questionNode: (
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/Pfo-8z86x80?si=_IzlQ038EOmFklex&amp;start=46"
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
      answer: 'ARM',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/T2LwuUaBBpQ?si=neFnQVeF-dPAvwf0&amp;start=214"
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
    //   answer: "FIN",
    //   questionNode: (
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/l6rS8Dv5g-8?si=quEEiURRCf248L9f&amp;start=46"
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
      answer: 'BLR',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/coFfFZvPmRY?si=W1QagOeK6mLoygIC&amp;start=53"
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
    //   answer: "TUR",
    //   questionNode: (
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/TzKgojZqO5Y?si=UzefeYQhkKUlVQJm&amp;start=50"
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
      answer: 'SRB',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FSueQN1QvV4?si=kiJ_1tL-XjwnRpFF&amp;start=118"
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
      answer: 'POL',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VJ920cN2HmA?si=848CQ9pYOYoECx2v&amp;start=14"
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
    //   answer: "SWE",
    //   questionNode: (
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/3FsVeMz1F5c?si=BBnthvYudJae_gq2&amp;start=87"
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
      answer: 'AZE',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FTQ22S5YC7Q?si=utOlKAu17pUXI3NO&amp;start=50"
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
      answer: 'UKR',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hfjHJneVonE?si=Tf0GaU_0LtL9ciZi&amp;start=97"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const SPOTIFY_FROM_2010 = {
  name: 'Spotify from 2010',
  id: uuidv4(),
  type: 'iframe',
  color: '#FF85C1',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Ke$ha',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iP6XpLQM2Cs?si=zn29233taQxg-rx4&amp;start=41"
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
      answer: 'Eminem Rihanna',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uelHwf8o7_U?si=Z7V0Dey48Gtdjkg-&amp;start=70"
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
      answer: 'Jessie J - Price Tag ft. B.o.B',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qMxX-QOV9tI?si=WRkltpR9SJYOV-IG&amp;start=60"
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
      answer: 'LMFAO - Party Rock Anthem ft. Lauren Bennett, GoonRock',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KQ6zr6kCPj8?si=CqNKqsFS_-IT2ft7&amp;start=114"
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
      answer: 'Maroon 5 - One More Night',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fwK7ggA3-bU?si=RiMtsoI0cGQofBI_&amp;start=114"
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
      answer: 'PINK',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OpQFFLBMEPI?si=lS_eLTdNZsAWEFf0&amp;start=50"
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
      answer: 'Miley Cyrus - Wrecking Ball',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/My2FRPA3Gf8?si=qBsQgbTnQ8YIAFZW&amp;start=4"
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
      answer: 'Taylor Swift - Shake It Off',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nfWlot6h_JM?si=pXe2uSfUzlS83gSV&amp;start=4"
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
      answer: 'Ed Sheeran - Shape of You',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JGwWNGJdvx8?si=Ml4llNk5pLv5TMM8&amp;start=3"
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
      answer: 'Ariana Grande - 7 rings',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QYh6mYIJG2Y?si=JGOYlvrMKxyAwkle&amp;start=41"
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
      answer: 'The Kid LAROI, Justin Bieber - STAY',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kTJczUoc26U?si=C4IZyA5HmJjpqO3F&amp;start=58"
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
      answer: "Dua Lipa - Don't Start Now",
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oygrmJFKYZY?si=QuCLrmhdPm610eBM&amp;start=11"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const METAL_2 = {
  name: 'Metal childhood 2',
  id: uuidv4(),
  type: 'iframe',
  color: '#0000FF',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Papa Roach - Scars',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eHbNU9WuVgw?si=KvP1Cx53nmYijo0h&amp;start=42"
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
      answer: 'Evanescence - Bring Me To Life',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3YxaaGgTQYM?si=jJ5OTxJ0_dZnXDHP&amp;start=4"
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
      answer: 'P.O.D. - Youth of the Nation',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EDKwCvD56kw?si=UBZlwZymAHx6nKQG&amp;start=60"
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
      answer: 'Linkin Park - Numb',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kXYiU_JCYtU?si=4m1ZMC-FiMmAYjbJ"
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
      answer: 'Disturbed - Prayer',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DWSlOCEzRGo?si=QkSHrICYn87xf1_j&amp;start=19"
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
      answer: 'Limp Bizkit - Lonely World',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7VybmTgucZ8?si=ohOie3L8LMODc-d1&amp;start=76"
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
      answer: 'Drowning Pool - Sinner',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QiKK7ULsqXk?si=EQJ66j5g5WQoi-iy&amp;start=32"
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
      answer: 'Rammstein - Engel',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/x2rQzv8OWEY?si=VzKOdHOoSvPFd2U_"
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
      answer: 'Slipknot - Wait And Bleed',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/B1zCN0YhW1s?si=Qs70Ls_ZNi6xJSXc"
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
      answer: 'Ill Nino - What You Deserve',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PEv9knEqGcU?si=qnijHpufU8V7w8du&amp;start=85"
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
      answer: 'Within Temptation - Angels',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VK9qfVQ4Z04?si=ttrugxwuwuEjTeKj&amp;start=54"
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
      answer: 'Cradle Of Filth - Nymphetamine ',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6dW6aNAZGTM?si=sodGdWv3lHgA6_MW&amp;start=82"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const METAL_HARD = {
  name: 'METAL HARD',
  id: uuidv4(),
  type: 'iframe',
  color: '#4169E1',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'ARCH ENEMY - Nemesis',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/n9AcG0glVu4?si=2vn-wYMU08FAEJQ1&amp;start=10"
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
      answer: 'Amon Amarth',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ARnBgW5XgSo?si=CbqbUpAiPuaUxv93&amp;start=32"
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
      answer: 'Clawfinger - Two Sides',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2gv4cPCZXpc?si=WssQvt5GFUj5AsUk&amp;start=76"
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
      answer: 'Marilyn Manson',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ypkv0HeUvTc?si=z3ZXKtsMCl3ckAmf&amp;start=30"
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
      answer: 'Rob Zombie',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EqQuihD0hoI?si=deW6HVScAhjC7hsE&amp;start=15"
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
      answer: 'HÄMATOM - Es regnet Bier',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kuy2JsaWFv4?si=lxyZrGFm5f_Q8nQb&amp;start=63"
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
      answer: 'Deathklok',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AGst_LhwUmk?si=KoJdcolTU5kCuqGB&amp;start=6"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        // <iframe
        //   width="560"
        //   height="315"
        //   src="https://www.youtube.com/embed/S7sOZ_TFUXg?si=MKjUq93Kyi-6vCxU&amp;start=11"
        //   title="YouTube video player"
        //   frameborder="0"
        //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //   allowfullscreen
        // ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Turmion Kätilöt',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YBOqcjyFbI4?si=Vvc11Z2CT31QnTBi&amp;start=37"
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
      answer: "LEAVES' EYES - Hell To The Heavens",
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0JPs7rFNGP4?si=7-qd8xKQGAe5zJ5r&amp;start=73"
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
      answer: 'Hollywood Undead',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IOjzS0axfMw?si=GsAPvtt32fi07CHw&amp;start=84"
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
      answer: 'Omut',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xzVGxeatNHI?si=a4Gg9doHUmx5ejNs&amp;start=71"
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
      answer: 'Korpiklaani',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/e7kJRGPgvRQ?si=4dj5aWabSk1zky_l&amp;start=3"
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
    //   answer: "MANNTRA - SANJAJ",
    //   questionNode: (
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/6Dy69lFJVfY?si=1sz5x5Dczr_opYv1"
    //       title="YouTube video player"
    //       frameborder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //       allowfullscreen
    //     ></iframe>
    //   ),
    // },
  ],
};
const X90 = {
  name: '90s 1',
  id: uuidv4(),
  type: 'iframe',
  color: '#228B22',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Alex C., Yass',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CQian1hYNaA?si=eL9O9RQS_QwwWw5r&amp;start=84"
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
      answer: 'Sting',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/C3lWwBslWqg?si=o5qrILtgyebAsIBE&amp;start=9"
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
      answer: 'Lou Bega',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EK_LN3XEcnw?si=6Z7jS2qJaEhkOwuU&amp;start=134"
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
      answer: 'Aqua',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZyhrYis509A?si=E42qCm6FhrRpmvwA"
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
      answer: 'R.E.M.',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xwtdhWltSIg?si=TfiKjypJKdRvACyy&amp;start=221"
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
      answer: 'The Verve',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1lyu1KKwC74?si=TE6od0AZ-90n_LRg&amp;start=109"
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
      answer: 'Britney Spears',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/C-u5WLJ9Yk4?si=CTWHuhm4Mb0dYC8K&amp;start=139"
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
      answer: 'Haddaway',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HEXWRTEbj1I?si=zjHIM7oQZv9Fu-2D&amp;start=75"
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
      answer: 'Bon Jovi',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9BMwcO6_hyA?si=OUU4Ui2PGA_okFck&amp;start=168"
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
      answer: 'Mr.President',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EScLmWJs82I?si=8rWzGXtQogC_ahfr&amp;start=168"
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
      answer: 'Aerosmith',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JkK8g6FMEXE?si=8n9Sza1u7MweWPoz&amp;start=147"
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
      answer: 'Dido',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1TO48Cnl66w?si=Q6yzxoAw_ZdA1UCu&amp;start=72"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const OLDOLD = {
  name: 'Old Mix',
  id: uuidv4(),
  type: 'iframe',
  color: '#106140',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Modern Talking',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/K5DALXwOe0s?si=b-9PWJVOuXcO_txP&amp;start=17"
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
      answer: 'Whitney Houston',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eH3giaIzONA?si=6pC2pFOzATj2unER&amp;start=73"
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
      answer: 'The Police',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OMOGaugKpzs?si=Q7lsZv0-rvJdfxSc&amp;start=73"
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
      answer: 'Kansas',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tH2w6Oxx0kQ?si=lLa24T6jLUsOTcFZ&amp;start=16"
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
      answer: 'E-rotic',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZgjKQLXyuGE?si=8OcfeQfiEVVmhny0&amp;start=16"
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
      answer: 'Phil Collins',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YkADj0TPrJA?si=FT-yIYGXeukcgTc7&amp;start=31"
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
      answer: 'Jefferson Airplane',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5Jj3wZVc7nw?si=MDG4-C3-3bulOqea&amp;start=9"
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
      answer: 'Warlock',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RcMt6zI7VkM?si=flbWyyjnXBFi_PcM&amp;start=42"
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
      answer: 'ABBA',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/unfzfe8f9NI?si=326T-bgogiSazVE8&amp;start=12"
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
      answer: 'A Touch Of Class',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pSVbF6DGH9U?si=O2337bt0wEsJZG4S&amp;start=12"
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
      answer: 'Bonney M',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ghGiv7YLC7Q?si=gZiHPLy0RCCyQ53Z&amp;start=12"
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
      answer: 'George Michael',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/izGwDsrQ1eQ?si=629AS3DN614RncVr&amp;start=52"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const X902 = {
  name: '90s 2',
  id: uuidv4(),
  type: 'iframe',
  color: '#10a510',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Puff Daddy',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NKMtZm2YuBE?si=GprxwUnZJwjrtTt3&amp;start=153"
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
      answer: 'Enrique Iglesias',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ixqOgtNERAQ?si=0ZaMaWsxPcY8vVIw&amp;start=35"
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
      answer: 'Shania Twain',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZJL4UGSbeFg?si=X6dzoBlWn63ZHsFL"
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
      answer: 'Toni Braxton',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/p2Rch6WvPJE?si=lgoUBL3tjk0ChOb-&amp;start=121"
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
      answer: 'Michael Jackson',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XAi3VTSdTxU?si=uX__D6Di1lnbX_w7&amp;start=225"
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
      answer: 'Scatman John',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Hy8kmNEo1i8?si=BMpbeGicmxqPmS3m"
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
      answer: 'Corona - The Rhythm of the Night',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OnT58cIJSpw?si=xWMr-LhTOpfgBPN_"
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
      answer: 'Mariah Carey - All I Want for Christmas Is You',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/aAkMkVFwAoo?si=aWtmXgCPjevhlhcD&amp;start=55"
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
      answer: 'Rednex',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mOYZaiDZ7BM?si=V_XFKDArkmyLzVRP"
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
      answer: 'Chumbawamba',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2H5uWRjFsGc?si=KhXYOik4qIy44xK1&amp;start=133"
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
      answer: 'The Cardigans',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NI6aOFI7hms?si=FsmpXG2CDsFPcr56&amp;start=69"
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
      answer: 'Duran Duran',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FqIACCH20JU?si=jMg5NSkvCbyp2zkv&amp;start=144"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const POPROCK = {
  name: 'Rock 2',
  id: uuidv4(),
  type: 'iframe',
  color: '#87CEFA',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Smash Mouth - All Star',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/L_jWHffIx5E?si=FJDqxkptu1jJkXUZ&amp;start=102"
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
      answer: 'RHCP',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YlUKcNNmywk?si=5BAk2-b9QqJMgZCn&amp;start=54"
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
      answer: 'Sum 41',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/By7ctqcWxyM?si=F8Jk-1SmnvXL5D3v"
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
      answer: 'The Rasmus',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7gwO8-oqwFw?si=FQPQ_VIayDYZLf4g"
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
      answer: 'Billy Talent ',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9BXNKyoW_Ow?si=iXX19az-0utXGOqH&"
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
      answer: 'Liquido',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PJ7E40Ec5ec?si=Lwre5L5diARo8ece&amp;start=15"
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
      answer: 'Foo Fighters',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SBjQ9tuuTJQ?si=Txbdvg4BCQ-X_W1e&amp;start=32"
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
      answer: 'Three Days Grace',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xqds0B_meys?si=hqofOgltka5AmoJH"
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
      answer: 'Spiderbait',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nU1VfYYKMDk?si=VmgrTBE7rhWCZ1Ml"
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
      answer: 'Muse',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/w8KQmps-Sog?si=kO_1WhtF0uGLxhC3"
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
      answer: 'The White Stripes',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0J2QdDbelmY?si=-TXWxnFoi27yacao"
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
      answer: 'Bloodhound Gang',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kbGSa11yA1c?si=69A82Ru_rlSjdbGr&amp;start=139"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
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
const MOVIES_2 = {
  name: 'Movies 2',
  id: uuidv4(),
  type: 'iframe',
  color: '#FF6347',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Robocop',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8OcryKLL250?si=On4pTqVC2ayGNj6r&amp;start=4"
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
      answer: 'Пираты карибского моря',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8NNfiH5nURM?si=iJAiZfvkJqTNGYjw&amp;start=30"
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
      answer: 'Игра престолов',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jKeivA6vWds?si=JY7z6NYhiX8VuA6l&amp;start=63"
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
      answer: 'Троя',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cltAbAsIPQA?si=Qed6JiDcbxm-c3bD&amp;start=18"
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
      answer: 'Леон',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eBdOZO8auZ0?si=47xS3j7HfSC65SId&amp;start=10"
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
      answer: 'Молчание ягнят',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UUwXHkYZ4VQ?si=n5f3V9o_VQj7uspf&amp;start=203"
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
      answer: 'Зеленая миля',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Sxxm8Gto2t8?si=WpcwvN73ljUQl_Bx&amp;start=34"
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
      answer: 'Красная жара',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/l4XTAwu668M?si=iamfu86DYX51n9MM&amp;start=86"
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
      answer: 'Мальчишник в вегасе',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Es_U9ob9-Ic?si=GwH5Yi40Y9SXEJJq&amp;start=127"
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
      answer: 'Темный рыцарь',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/l1_i7ldTQTQ?si=WfZffv3gB9Zp9n97&amp;start=1"
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
      answer: 'Голодные игры',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qcq8yAykEeQ?si=5BbsviBbm6noxAxi"
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
      answer: 'пятый элемент',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YH5idV0Bbe8?si=39_7qoTnAAGnM7TS&amp;start=44"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const X2000_2010_2 = {
  name: '2000s 2',
  id: uuidv4(),
  type: 'iframe',
  color: '#98FF98',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Flo Rida - Low',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/U2waT9TxPU0?si=6HCKqbiWoR-TjZlB&amp;start=8"
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
      answer: 'Madcon',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zrFI2gJSuwA?si=3vRfR_1aDMnZNr18&amp;start=30"
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
      answer: 'The Black Eyed Peas - Pump It ',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZaI2IlHwmgQ?si=i_ubSpcHbQ4nf8iM&amp;start=9"
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
      answer: 'Evanescence',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5anLPw0Efmo?si=pj28YQo8gzjlKwHs"
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
      answer: 'Beyoncé',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4m1EFMoRFvY?si=-K7WIUSQ9I3d3eRH"
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
      answer: 'P!nk - Get The Party Started',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mW1dbiD_zDk?si=e-FLcOUcObbuhUVJ&amp;start=27"
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
      answer: 'System Of A Down',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zUzd9KyIDrM?si=rX9N9cvGJ6ByuC9K"
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
      answer: 'Usher - Yeah! (Official Video) ft. Lil Jon, Ludacris',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GxBSyx85Kp8?si=6VJfEQJmjsZBeY__"
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
      answer: 'Kanye West Duft Punk- Stronger',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PsO6ZnUZI0g?si=4CVd16NCfWwE9_40&amp;start=187"
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
      answer: 'Rammstein - Keine Lust',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1M4ADcMn3dA?si=zuceb1yZEiMPa1-k&amp;start=176"
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
      answer: 'Madonna - Hung Up ',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EDwb9jOVRtU?si=B-EPa88gLmu7TNvG&amp;start=26"
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
      answer: 'JAY-Z - Empire State Of Mind ft. Alicia Keys',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vk6014HuxcE?si=rXI06omBnzNFLfPr&amp;start=50"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const X2000_2010_3 = {
  name: '2000s 3',
  id: uuidv4(),
  type: 'iframe',
  color: '#C1FFC1',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Outkast - Hey Ya! ',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PWgvGjAhvIw?si=AIfyshVrbq5-NeR4&amp;start=186"
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
      answer: 'Poker Face',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oG-4Uvhm4lI?si=95WimmA4QHsy6dve&amp;start=1"
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
      answer: "What I've Done [Official Music Video] - Linkin Park",
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8sgycukafqQ?si=zCZ7YvCEaOP9Y_i1&amp;start=17"
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
      answer: 'Metallica - The Day That Never Comes',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dkNfNR1WYMY?si=jmVTqalOILx0CctL&amp;start=92"
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
      answer: 'Coldplay - Clocks',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/d020hcWA_Wg?si=WQR-lN_2NpCroZpg&amp;start=4"
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
      answer: 'Nelly Furtado - Say It Right',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6JnGBs88sL0?si=fuX3mYFrqFVMHBzO&amp;start=67"
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
      answer: 'Daddy Yankee',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CCF1_jI8Prk?si=VQ0iiwN3InXVfV31"
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
      answer: 'The Killers - Mr. Brightside',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gGdGFtwCNBE?si=KxBc9zALXBMWyhEI&amp;start=164"
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
      answer: 'Queens Of The Stone Age - No One Knows',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/s88r_q7oufE?si=ZFPLWMPJW9JYgBa8&amp;start=66"
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
      answer: 'Rihanna - Umbrella (Orange Version) (Official Music Video) ft. JAY-Z',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CvBfHwUxHIk?si=GF-D29YlqfrhxQml&amp;start=11"
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
      answer: 'Gorillaz - Feel Good Inc.',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HyHNuVaZJ-k?si=dcaEUJgozVz4Ayic&amp;start=17"
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
      answer: 'Akon - Smack That (Official Music Video) ft. Eminem',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bKDdT_nyP54?si=5YVDSUYFkSe8o_kT&amp;start=37"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
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
const RAP = {
  name: 'H-H/Rap/RnB',
  id: uuidv4(),
  type: 'iframe',
  color: 'black',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'The Black Eyed Peas - My Humps',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iEe_eraFWWs?si=m2hY_FisgmDFpyxx&amp;start=7"
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
      answer: 'Нестандартный вариант',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yhEyPT5tIp0?si=Xu-_uTWaH-MNzPN_&amp;start=77"
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
      answer: "Bomfunk MC's - (Crack It) Something Going On",
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MSqDIWI__Ew?si=KzJRusyJ2p8_OY1o&amp;start=38"
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
      answer: 'KALUSH feat Skofka - Додому',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OF7bh0Y3vyo?si=nXFHxkGon08nQyVv&amp;start=162"
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
      answer: 'Eminem - The Real Slim Shady ',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eJO5HU_7_1w?si=haC5IL1Ofl7lEvo1"
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
      answer: 'Nelly - Dilemma',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8WYHDfJDPDc?si=dtQcLAeFd4OGXyBo&amp;start=159"
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
      answer: 'Грибы - тает лёд',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/i9AHJkHqkpw?si=rCmI8-792ho1e5Z9&amp;start=68"
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
      answer: 'Dr. Dre - The Next Episode (Official Music Video) ft. Snoop Dogg, Kurupt, Nate Dogg',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QZXc39hT8t4?si=31O0-0aX67jSobAY&amp;start=72"
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
      answer: '50 Cent - P.I.M.P. (Snoop Dogg Remix) ft. Snoop Dogg, G-Unit',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UDApZhXTpH8?si=dcOnZjgrWntwHmUC"
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
      answer: 'Макс Корж - Горы по колено',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WujKJpxaUHk?si=_K6wLlaj5PdXDdGu&amp;start=149"
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
      answer: "DMX - Ruff Ryders' Anthem",
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ThlhSnRk21E?si=aXjPBAcHMsqEo-qP&amp;start=9"
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
      answer: 'M.C. Hammer',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/otCpCn0l4Wo?si=ePvSolT33hzTz_a4&amp;start=15"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const TOP_SPOTIFY_2000 = {
  name: 'spotify 2000',
  id: uuidv4(),
  type: 'iframe',
  color: '#FF69B4',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: "Jennifer Lopez - Let's Get Loud",
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Q91hydQRGyM?si=X4u7qfIes04FIp-n&amp;start=91"
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
      answer: 'blink-182 - All The Small Things',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9Ht5RZpzPqw?si=qpiHORcGOVAVaHA6&amp;start=16"
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
      answer: 'Melanie C - I Turn To You',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lsjKK_s_nyY?si=2msr0ZTE4XEQ7fRu&amp;start=60"
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
      answer: 'Alizée - Moi... Lolita',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QpbHdIrtpNo?si=P_mZ2L6UjJ_mdQOv&amp;start=82"
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
      answer: 'Modjo - Lady',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mMfxI3r_LyA?si=aRqjRhH-PRk1odY3&amp;start=16"
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
      answer: 'Backstreet Boys - Shape Of My Heart',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OT5msu-dap8?si=aFK6lIeUjQMfYh3B&amp;start=111"
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
      answer: 'Madonna - Music',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Sdz2oW0NMFk?si=wTbrEPxRDnlYJ4xB&amp;start=200"
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
      answer: 'Baha Men - Who Let The Dogs Out ',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ojULkWEUsPs?si=s01ZaE6jjaw_AXHZ&amp;start=8"
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
      answer: 'LeAnn Rimes - Cant Fight The Moonlight',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bx3s99FNXzI?si=W9SelYpxuV9ukkso&amp;start=50"
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
      answer: 'Melanie C - Never Be The Same Again',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2nEzfa43VF8?si=8_YFGr6-qjm8_emP&amp;start=71"
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
      answer: 'Foster The People - Pumped Up Kicks',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SDTZ7iX4vTQ?si=k7sXhI3a3Jr4V_Mv&amp;start=66"
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
      answer: 'Eminem - Lose Yourself',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_Yhyp-_hX2s?si=Hh_3DOyj6gp3af1V&amp;start=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const DANCE = {
  name: 'Dance',
  id: uuidv4(),
  type: 'iframe',
  color: '#FFC0CB',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Scooter - How Much Is The Fish? ',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cbB3iGRHtqA?si=QenKLBCdJq7ib5HK&amp;start=121"
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
      answer: "The Black Eyed Peas - Let's Get It Started",
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IKqV7DB8Iwg?si=_OtLRfD5GAA52Cxl&amp;start=48"
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
      answer: 'Canción Del Mariachi - Antonio Banderas, Los Lobos • Desperado',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1nA6f6vDxtg?si=BZlfDV74ZrTHNcio&amp;start=31"
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
      answer: 'Las Ketchup - The Ketchup Song',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/V0PisGe66mY?si=AlqIMk5yradf_udV&amp;start=26"
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
      answer: 'Shakira - Ojos Así',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5BzkbSq7pww?si=2GacEKfFxNjBYmWx&amp;start=83"
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
      answer: 'The Chemical Brothers',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tpKCqp9CALQ?si=PV_BWF8iXOkJDWTS&amp;start=49"
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
      answer: 'Mark Ronson - Uptown Funk',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OPf0YbXqDm0?si=w_1fDEPRtmTwOOlO&amp;start=125"
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
      answer: 'PSY - GANGNAM STYLE',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9bZkp7q19f0?si=-ia0sTpIpCRsTkTY&amp;start=67"
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
      answer: 'Go_A - ШУМ',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sDeMfL8Ib9A?si=lpKbEF5WLzhRor3s&amp;start=172"
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
      answer: 'The Prodigy - Smack My Bitch Up',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hZPECFQ4NhE?si=3qBTqx-xCoBB3O06&amp;start=106"
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
      answer: 'Zdob si Zdub - Видели ночь',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/A1hhCIfPtIc?si=-tUirfI16q1bA2xH&amp;start=109"
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
      answer: 'LMFAO - Sexy and I Know It',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wyx6JDQCslE?si=IPcxcHnkCZykOCaY&amp;start=117"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const QUASTIONS_BELARUS = {
  name: 'Belarus лёгкае',
  id: uuidv4(),
  type: 'iframe',
  color: '#4B0082',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Крамбамбуля - З новым Годам',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Dp-CT_EhoPo?start=46"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },

    {
      user: null,
      id: uuidv4(),
      answer: 'Леприконсы - Хали Гали',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rUd2diUWDyI?start=8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Песняры - касіў ясь канюшыну',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/muPzgpf9Y-g"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },

    {
      user: null,
      id: uuidv4(),
      answer: 'NAVIBAND - ІНШЫМІ',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/la_Yrf7kK3U?start=17"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },

    {
      user: null,
      id: uuidv4(),
      answer: 'Стары Ольса - Песня а князю Вітаўце',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9eJqGRxReuM?si=gCqi0PVnnIYpd3yV&amp;start=43"
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
      answer: 'Песняры - Пагоня',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YNdKXMX5BdU?si=O9fNy0L0rra55HHo&amp;start=164"
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
      answer: 'Ляпис Трубецкой - Зорачкi',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ejmPzQU8B2Q?start=8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },

    {
      user: null,
      id: uuidv4(),
      answer: 'Dzieciuki — Прадаецца краіна',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HEWWtyyaCjU?si=wf-1CimL5zQYfJQp&amp;start=137"
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
      answer: 'PAWA - Гандзюленька (feat. Testamentum Terrae)',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xxjd0US5INg?si=ILEZZwNI8XJYlheU&amp;start=29"
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
      answer: 'NRM - простыя словы',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/y6CUCjsZkmU?si=4GYTY8SItCH8d0H3&amp;start=11"
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
      answer: 'Ксения Ситник (Meghan Trainor Cover)',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7tJgo4QL_bc?si=eMVXF8g6O5FCqUgB&amp;start=82"
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
      answer: 'NIZKIZ - Небяспечна',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BsL6KP3JSzQ?si=KtkVeLPV8ryWg5wb&amp;start=52"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const QUASTIONS_BELARUS_2 = {
  name: 'Belarus цяжкае',
  id: uuidv4(),
  type: 'iframe',
  color: '#6A0DAD',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Arcanum - Таямніца часу',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_3El2Sq17R0?si=gAu4E70UIhmLOl_w&amp;start=57"
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
      answer: 'Дрыгва - Святочная',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/b2QTAEt0i9U?si=3eL5Ix9YGu-M0aT1&amp;start=57"
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
      answer: 'Sciana - Ya Edu',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SUR4pnWMcQk?si=mBmZ8jT4i4mJdR2f&amp;start=108"
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
      answer: 'Дай Дарогу! - Баю Бай 2020',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1WsSMMEh5wM?start=73"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },

    {
      user: null,
      id: uuidv4(),
      answer: 'Гузiк гр Нейро',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pyjTQkfF0G8?si=NWyixFgVkQ8otiXN&amp;start=37"
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
      answer: 'Wartha - Ziamla',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-TstGG2LNQ8?si=JlFwpUd3-YvVnBPe&amp;start=118"
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
      answer: 'Znich - Дунаю',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Xt9vK0RgXiQ?si=LHlrqjCIyNg3OnU5&amp;start=48"
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
      answer: 'Глюкі - Птушкі',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/l1tWeNHaNvg?si=grG_AuGaVymqumkJ&amp;start=37"
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
      answer: 'Irdorath - VAUKALAK',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NG7WQkqhScw?si=3tQGJD9xbuaa8T2J&amp;start=79"
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
      answer: 'Litvintroll - Da Siabra',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/w_mYLnN5uG8?si=4vTTHl9wana_3YxR&amp;start=72"
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
      answer: 'ТТ34 - Дом который построил Джек',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ic_Z_B8xJnA?si=n5857naJ-hjjS72o&amp;start=165"
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
      answer: 'Rasta',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7IsPpGH-q6k?si=cT5umT-Iat1cdaMT&amp;start=276"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const QUASTIONS_UKRAINE = {
  name: 'Ukraine',
  id: uuidv4(),
  type: 'iframe',
  color: '#9370DB',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'YARMAK FT. ALISA',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mOOClonYKmc?si=Z7nUqJD_IoSyIugP&amp;start=31"
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
      answer: 'Ruslaa - Wild Dances',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/10XR67NQcAc?start=11"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Воплі Відоплясова - ВЕСНА',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/X0DGNu6L0-8?start=54"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Верка Сердючка - Ще Не Вмерла Украина',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lxkMBansplg?start=34"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'THE HARDKISS feat. MONATIK - Кобра',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YDqQ9W0_BBM?start=88"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Океан Ельзи - Там, де нас нема',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CBOO8SMr1t8?start=15"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Бумбокс - Ой у лузі червона калина',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GBcJcdNqhhw?start=90"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ),
    },
    {
      user: null,
      id: uuidv4(),
      answer: 'Червона рута',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sC5NUunV-Tk?si=7EN8rVNkZtEH6YSv&amp;start=9"
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
      answer: 'PROBASS ∆ HARDI - ДОБРОГО ВЕЧОРА',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BvgNgTPTkSo?si=yk-gavNs9E7V31I5&amp;start=37"
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
      answer: 'DOROFEEVA - Кохаю, але не зовсім',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Qo_cAmJMPx4?si=NnR7BJivdGeiDYWW&amp;start=61"
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
      answer: 'Jamala - 1944',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wNECV2h-y58?si=9u3BOPQrwp1BEJM2&amp;start=164"
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
      answer: 'Скрябін - Коломийки',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7M-NgL8E_CM?si=_bJ_kS0yGgnKSryD&amp;start=121"
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
      answer: 'Go-A - ЖАЛЬМЕНІНА',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4vEeYQ9wwuc?si=2tkU7mY63kNez0dK&amp;start=91"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const MULTFILM = {
  name: 'Mult 2025',
  id: uuidv4(),
  type: 'iframe',
  color: '#D2B48C',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Геркулес',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vz5cnudiA8c?si=YY4CRUqLXk0cUUSY&amp;start=31"
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
      answer: 'Утиные истории',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7jg9Weev_cw?si=XLOvbnp97zBslDOp"
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
      answer: 'Сэйлор Мун',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kg-McDlm_98?si=5iXcXKdcaTixd4iG&amp;start=27"
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
      answer: 'Чип и Дейл',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pgIwVivBs6k?si=380iS1shPmQEcILV"
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
      answer: 'Покемоны',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MyCnrWd7vVY?si=CAdjpq7XLDjQ1GNv&amp"
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
      answer: 'Жил-был пес',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/aOEJCxsWAew?si=3-CUEmhOTpOoMrT_"
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
      answer: 'Аладин',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JMnSp0cCSTk?si=di31uhIq9tRmRlzU&amp;start=15"
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
      answer: 'Том и Джерри',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3cu0KOzunpI?si=PCxe3PsVbJCmAcoP"
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
      answer: 'Русалочка',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cNELRQnUwto?si=AEpMJfqmVrsIUEwO&amp;start=8"
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
      answer: 'Губка Боб',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mHx9fAAcVAk?si=ytLZTZIMW8X9YvUM"
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
      answer: 'Розовая пантера',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Aj9pqa-WrXU?si=GZhV58F9O9nfllXc&amp;start=5"
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
      answer: 'Шрэк',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6XmHDZWTjnQ?si=3hsFKoozKFRxhg6e&amp"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};
const ADD = {
  name: 'Add 2025',
  id: uuidv4(),
  type: 'iframe',
  color: '#A0522D',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Фери',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4lUk7piZHjk?si=JM00ZqycE-rAbkpt"
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
      answer: 'Мерси шоколад',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Z0tbBXW5WWQ?si=BSeBnTeVyHWkhWJ4"
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
      answer: 'Бондюэль',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/373WJpWWIQk?si=bfcq9Pxqf5A8P2Pb&amp;start=5"
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
      answer: 'Модум',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fdcQp1HQ0r8?si=l8pvP8hhBRXcdzLg&amp;start=2"
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
      answer: 'Матиас',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HTdRu1LB6N4?si=AlSxn_kgYuZhnZss&amp;start=2"
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
      answer: 'Лидский квас',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/L2Mf40XZTwk?si=iSyj_vd1HsSoe_Ne&amp;start=2"
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
      answer: 'Олвэйс',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jk_HAhBvVu8?si=9yusSjSNhTaWCb-t"
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
      answer: 'Тайд',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uOkV7Z-yDYg?si=QbC4dnWDcU-D-9Pt&amp;start=5"
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
      answer: 'Простоквашино',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/n5jMBS6rH_0?si=5M0CGkHyVahOumEH&amp;"
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
      answer: 'Колгейт',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/799Qs_lAp4g?si=ZHNu3ShtTKnZT7-X&amp;"
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
      answer: 'Алiварыя',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-uCHYRFPH5o?si=Q6-CAtedV9b4IzMx&amp;start=12"
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
      answer: 'Лiдскае пiва',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/J37NoGlMjGE?si=gl67MB2xw7u9W6n9&amp;"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};

const QUASTIONS_MOVIES_2025 = {
  name: 'MOVIES 2025',
  id: uuidv4(),
  type: 'iframe',
  color: '#8B4513',
  list: [
    {
      user: null,
      id: uuidv4(),
      answer: 'Побег из Шоушенка',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/00QoDkBsVjs?si=X4YoY-h0Hx4Pc8e9&amp;start=96"
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
      answer: 'Бой цовский клуб',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8M2UwQXCUa4?si=M9fgidFDGX4tc1SX&amp;start=25"
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
      answer: 'Сердцеедки',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/epm1IXL5qNw?si=OU0kn6gbDNoNvNw6&amp;start=801"
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
      answer: 'Гладиатор',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UnbEmj6qXIY?si=San464dPAifIRofM&amp;start=89"
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
      answer: 'Пришельцы коридоры времени',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/a5mlis-UDv0?si=3rs464m73WfESoCy&amp;start=40"
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
      answer: 'Американский пирог',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Oj0S7r1xUpA?si=kX8sr1fA0EZt49cY&amp;"
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
      answer: 'Хроники Нарнии',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kBr17rM4W7o?si=QDsW3KsO9scK-lWN&amp;start=12"
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
      answer: 'Евротур',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/o5afVq8hgJI?si=u2k0IifBmepA6ABj&amp;"
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
      answer: 'Один Дома',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/p9mJ38pbdac?si=gpd21jbIuyB1bUTR&amp;start=26"
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
      answer: 'Эффект бабочки',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1GErBP7bcJ4?si=2phZKk5bHEdZmdOg&amp;start=121"
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
      answer: 'Воздушная тюрьма',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rluEJdokANk?si=e4Q9be0MrkmyIi1x"
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
      answer: 'Очень страшное кино',
      questionNode: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iLWzc81F9Zk?si=8kFVoUtypn_GhuKT&amp;start=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
  ],
};

// eslint-disable-next-line no-sparse-arrays
export const MUSIC_THEME_LIST = [
  QUASTIONS_SOUNDTRACK_1,
  QUASTIONS_SOUNDTRACK_2,
  QUASTIONS_SOUNDTRACK_3,
  QUASTIONS_SOUNDTRACK_4,
  MOVIES_1,
  MOVIES_2,

  METAL_1,
  METAL_2,
  METAL_HARD,
  ROCK,
  POPROCK,
  ROCK_3,

  EUROVISION,
  POP_1,
  TOP_SPOTIFY_2000,
  SPOTIFY_FROM_2010,
  POP_NEW,
  DANCE,

  RAP,
  QUASTIONS_RAP,
  QUASTIONS_TEST,

  QUASTIONS_BELARUS,
  QUASTIONS_BELARUS_2,
  QUASTIONS_UKRAINE,

  OLDOLD,
  QUASTIONS_80S,
  QUASTIONS_80S_2,
  X90,
  X902,
  QUASTIONS_90S,

  QUASTIONS_00S,
  X2000_2010_2,
  X2000_2010_3,
  QUASTIONS_ACTUAL,

  LANG,
  GUES_LANGUAGE,

  RANDOM,

  MOVIES_PHOTOS,
  STARS_PHOTOS,

  MULTFILM,
  ADD,
  QUASTIONS_MOVIES_2025,
];
