import { Injectable } from '@angular/core';

export interface ListAllMenu {
  id: number;
  img: string;
  name: string;
  link?: string;
}

export interface PhoneArr {
  id: number;
  img: string;
  name: string;
  price: number;
  description: string;
  link: string;
}

export interface BookArr {
  id: number;
  img: string;
  name: string;
  price: number;
  description: string;
  author: string;
  link: string;
}
export interface NotebookArr {
  id: number;
  img: string;
  name: string;
  price: number;
  description: string;
  link: string;
}

export interface HeadsetsArr {
  id: number;
  img: string;
  name: string;
  price: number;
  link: string;
}
export interface KeybordsArr {
  id: number;
  img: string;
  name: string;
  price: number;
  link: string;
}
export interface BlogList {
  id: number;
  img: string;
  name: string;
  link: string;
  text: string;
  post: string;
  postImg: string;
}
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  phoneArr: PhoneArr[] = [
    {
      id: 1,
      img: 'https://i.ebayimg.com/thumbs/images/g/L-0AAOSwAPFgfzFq/s-l300.webp',
      name: 'Google Pixel 3 XL 128GB',
      price: 280.97,
      description:
        'Марка	Google Цвет	Не розовый Операционная система	Chrome OS, Android Фактор формы	Смартфон Объем памяти	4ГБ Оператор беспроводной связи	Разблокирован Размер экрана	5.5 дюймов Сотовая связь	4G Другие особенности камеры	Задний, Передний Тип дисплея	OLED',

      link: 'https://www.amazon.com/Goggle-Pixel-XL-Certified-Refurbished/dp/B07HKT2BY1/ref=sr_1_3?crid=2DHSLC363XY4M&dchild=1&keywords=google+pixel+3xl+128gb&qid=1626253389&sprefix=Google+Pixel+3+XL+128GB%2Caps%2C320&sr=8-3',
    },
    {
      id: 2,
      img: 'https://img.mvideo.ru/Pdb/30051557b.jpg',
      name: 'Samsung Galaxy Note20 Ultra ',
      price: 900.53,
      description:
        'Экран 6.9 /3088x1440 Пикс Оперативная память (RAM)  12 ГБ Встроенная память (ROM) 512 ГБ Основная камера МПикс 108/12/12/Лазер датчик AF Фронтальная камера МПикс 10',
      link: 'https://www.amazon.com/Samsung-Electronics-Unlocked-Smartphone-Long-Lasting/dp/B08BX7QGKF/ref=sr_1_1_sspa?dchild=1&keywords=Samsung+Galaxy+Note20+Ultra&qid=1626255157&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFMQjNGVU1PMjRWUlomZW5jcnlwdGVkSWQ9QTAyNDk0MDAyRzVDUzNFSDZBOE5aJmVuY3J5cHRlZEFkSWQ9QTA5NDMzMzkxUTlLUFc3RkY2OExGJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    },
    {
      id: 3,
      img: 'https://i.ebayimg.com/thumbs/images/g/RoAAAOSw7O9g5EOX/s-l300.webp',
      name: 'iPhone XS Max 256GB',
      price: 595.32,
      description:
        'На мобильном телефоне установлен процессор Apple A12 Bionic с частотой 2600 МГц, 4 Гб оперативной памяти и 256 Гб постоянной памяти. Экран смартфона 6.5 дюймов с oled типом матрицы, фронтальная камера на 7 Мп, основная - на 12 Мп.',
      link: 'https://www.amazon.com/Apple-iPhone-Max-Fully-Unlocked/dp/B07KFN43WC/ref=sr_1_3?dchild=1&keywords=iPhone+XS+Max+256GB&qid=1626255230&sr=8-3',
    },
    {
      id: 4,
      img: 'https://i.ebayimg.com/thumbs/images/g/W4sAAOSwNghfhvt9/s-l300.webp',
      name: 'Apple iPhone 12 Ultimi',
      price: 918.13,
      description:
        'iPhone 12 оснащён OLED дисплеем диагональю 6,1 дюйма, произведённым по технологии Super Retina XDR, c разрешением экрана 2532×1170 пикселей и плотностью 460 PPI (пикселей на дюйм). Пиковая яркость 1200 нит. Экран покрыт керамическим покрытием Ceramic Shield, произведённым совместно с компанией Corning.',
      link: 'https://www.amazon.com/Apple-iPhone-Locked-Carrier-Subscription/dp/B08L5QP2K6/ref=sr_1_1_sspa?dchild=1&keywords=Apple+iPhone+12+Ultimi&qid=1626255266&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyRlNOTUpISEc4MlpXJmVuY3J5cHRlZElkPUEwODA3NTM0MlI1S1hRRDZKUkJQTyZlbmNyeXB0ZWRBZElkPUEwODg0Njc4MlAySFJGT1E4MTlBVSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
    },
    {
      id: 5,
      img: 'https://mzimg.com/big/j1/gjrj1e8boj1.jpg',
      name: 'Xiaomi Mi 10T',
      price: 496.42,
      description:
        'Экран:6.67 ", 2400x1080 (20:9), 144 Гц, 395 ppiПамять:128 ГБ, ОЗУ 8 ГБПроцессор:8 ядер(а), 2.84 ГГцКамера:3 модуля, оптический зумВидео:fullHD 60 к/с, ultraHD 4KЕмкость батареи:5000 мАчВес:216 г',
      link: 'https://www.amazon.com/Xiaomi-DotDisplay-Battery-Unlocked-Smartphone/dp/B08HHCXBND/ref=sr_1_2?dchild=1&keywords=Xiaomi+Mi+10T&qid=1626255300&s=electronics&sr=1-2',
    },
    {
      id: 6,
      img: 'https://images-na.ssl-images-amazon.com/images/I/61cjeSE%2BZ-L._AC_SX466_.jpg',
      name: 'iPhone Xr',
      price: 711.39,
      description:
        'Экран:6.1 ", 1792х828 (19.5:9), 323 ppiПамять:128 ГБ, ОЗУ 3 ГБПроцессор:6 ядер(а), 2.4 ГГцВидео:fullHD 60 к/с, ultraHD 4K, стабилизацияЕмкость батареи:2940 мАчВес:194 г',
      link: 'https://www.amazon.com/Apple-iPhone-XR-Fully-Unlocked/dp/B07P6Y7954/ref=sr_1_4?dchild=1&keywords=iPhone+Xr&qid=1626255335&s=electronics&sr=1-4',
    },
  ];
  booksArr: BookArr[] = [
    {
      id: 7,
      img: 'https://telegra.ph/file/56cb8a9d2ba93480d3f8a.jpg',
      name: '​JavaScript in 24 Hours (2015)',
      author: 'Phil Ballard',
      price: 34.99,
      description:
        'Всего за 24 урока по часу или меньше Sams Teach Yourself JavaScript за 24 часа поможет вам изучить основы веб-программирования с использованием языка JavaScript. Эта книга, предназначенная для начинающих, не имеющих опыта в программировании, реализует простой пошаговый подход, демонстрирующий, как использовать JavaScript для добавления широкого набора интерактивных фич и эффектов на ваши веб-страницы.',
      link: 'https://www.amazon.com/JavaScript-Hours-Sams-Teach-Yourself-ebook/dp/B07H2KXFWP/ref=sr_1_2?dchild=1&keywords=JavaScript+in+24+Hours+%282015%29&qid=1626254506&sr=8-2',
    },
    {
      id: 8,
      img: 'http://sun9-28.userapi.com/impg/LYfaHtgRVr_YwQCmQWGg-McrNEj9lIJRCppTOQ/-bGANvGe48U.jpg?size=604x604&quality=96&sign=e4bf029dbd1c663cfae62d44ab56e78f&type=album',
      name: 'Java Cookbook (2020)',
      author: ' Ian F. Darwin ',
      price: 23.99,
      description:
        'Java продолжает расти и развиваться, и эта книга тоже обновляется. С помощью данного руководства вы ознакомитесь с сотнями практических рецептов по широкому кругу тем Java. Вы узнаете полезные техники практически для всего - от обработки строк и функционального программирования до сетевого взаимодействия. Это обновленное издание охватывает изменения, внесенные в Java 12, 13 и 14.',
      link: 'https://www.amazon.com/Java-Cookbook-Problems-Solutions-Developers/dp/1492072583/ref=sr_1_1?dchild=1&keywords=Java+Cookbook+Ian+F.+Darwin&qid=1626255449&sr=8-1',
    },
    {
      id: 9,
      img: 'https://m.media-amazon.com/images/I/419aaEMtQlS.jpg',
      name: 'The Kubernetes Book (2020)',
      author: ' Nigel Poulton ',
      price: 22.0,
      description:
        'Java продолжает расти и развиваться, и эта книга тоже обновляется. С помощью данного руководства вы ознакомитесь с сотнями практических рецептов по широкому кругу тем Java. Вы узнаете полезные техники практически для всего - от обработки строк и функционального программирования до сетевого взаимодействия. Это обновленное издание охватывает изменения, внесенные в Java 12, 13 и 14.',
      link: 'https://www.amazon.com/Kubernetes-Book-Version-November-2018-ebook/dp/B072TS9ZQZ/ref=sr_1_4?dchild=1&keywords=The+Kubernetes+Book+Nigel+Poulton+%282020%29&qid=1626255545&sr=8-4',
    },
    {
      id: 10,
      img: 'https://images-na.ssl-images-amazon.com/images/I/41+dGSSUGdL._SX325_BO1,204,203,200_.jpg',
      name: 'Advanced R, Second Edition (2019)',
      author: 'Hadley Wickham',
      price: 45.0,
      description:
        'Advanced R помогает понять, как R работает на фундаментальном уровне. Она написана для программистов, которые хотят углубить свое понимание языка, и тех, кто имеет опыт работы с другими языками.',
      link: 'https://www.amazon.com/Advanced-Second-Chapman-Hall-CRC/dp/0815384572/ref=sr_1_1?dchild=1&keywords=Advanced+R%2C+Second+Edition+Hadley+Wickham&qid=1626255612&sr=8-1',
    },
    {
      id: 11,
      img: 'https://eloquentjavascript.net/img/cover.jpg',
      name: 'Eloquent JavaScript, 3rd Edition (2019)',
      author: 'Marijn Haverbeke',
      price: 16.89,
      description:
        'JavaScript лежит в основе почти каждого современного веб-приложения, от социальных приложений, таких как Twitter, до браузерных игровых движков, таких как Phaser и Babylon. Несмотря на то, что JavaScript прост для начинающих, это — гибкий и сложный язык, который вы можете использовать для создания полнофункциональных приложений. Это тщательно переработанное третье издание Eloquent JavaScript углубляется в язык JavaScript, чтобы показать вам, как писать красивый и эффективный код. Было добавлено множество новых упражнений.',
      link: 'https://www.amazon.com/Eloquent-JavaScript-3rd-Introduction-Programming-ebook/dp/B07C96Q217/ref=sr_1_1_sspa?dchild=1&keywords=Eloquent+JavaScript%2C+3rd+Edition+%282019%29&qid=1626255643&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyWlVJSDlPNUIzNURGJmVuY3J5cHRlZElkPUEwMDM1MzE4SjhORFEyUFFPNUxaJmVuY3J5cHRlZEFkSWQ9QTA1NDc4OTEyU0RLOVdCS05JTVpBJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    },
    {
      id: 12,
      img: 'https://images-na.ssl-images-amazon.com/images/I/511YUCKEYrL._SX342_SY445_QL70_FMwebp_.jpg',
      name: 'Programming TypeScript (2019)',
      author: ' Boris Cherny',
      price: 26.49,
      description:
        'Любой программист, работающий с динамически типизированным языком, скажет вам, как трудно масштабироваться на большее количество строк кода и разработчиков. TypeScript отличается от JavaScript возможностью явного статического назначения типов, поддержкой использования полноценных классов (как в традиционных объектно-ориентированных языках), а также поддержкой подключения модулей, что призвано повысить скорость разработки, облегчить читаемость, рефакторинг и повторное использование кода, помочь осуществлять поиск ошибок на этапе разработки и компиляции, и, возможно, ускорить выполнение программ. Если вы — программист со средним уровнем знаний JavaScript, автор научит вас работать с TypeScript. Вы поймете, как TypeScript поможет устранить ошибки в вашем коде и позволит масштабироваться.',
      link: 'https://www.amazon.com/Programming-TypeScript-Making-JavaScript-Applications/dp/1492037656/ref=sr_1_2?dchild=1&keywords=Programming+TypeScript&qid=1626255671&sr=8-2',
    },
  ];

  notebookArr: NotebookArr[] = [
    {
      id: 13,
      img: 'https://m.media-amazon.com/images/I/61X0jUEm10L._AC_UY218_.jpg',
      name: 'CHUWI HeroBook Plus 15.6',
      price: 399.99,
      description:
        ' inch Intel J4125 LPDDR4X 12GB RAM,256GB SSD Laptop,Windows 10 Notebook,Thin and Lightweight Notebook with 2.4G/5G WiFi,RJ45 Interface,BT 5.1 up to 1TB SSD',
      link: 'https://www.amazon.com/CHUWI-HeroBook-Plus-Lightweight-Interface/dp/B08P6MRCQ7/ref=sr_1_1_sspa?dchild=1&keywords=Honor+Magicbook&qid=1626255758&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExMUdLUUFXRUZFNVZBJmVuY3J5cHRlZElkPUEwODkxOTkxWFhMWkhRQllZR0JNJmVuY3J5cHRlZEFkSWQ9QTA1MDA2MTgxWjZQMDU4UlBaWE5WJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    },
  ];
  HeadsetsArr: HeadsetsArr[] = [
    {
      id: 14,
      img: 'https://m.media-amazon.com/images/I/71nLO-mJD3L._AC_SR180,120_QL70_.jpg',
      name: 'ASTRO Gaming A50',
      price: 299.99,
      link: 'https://www.amazon.com/dp/B07R4Q8FQY/ref=redir_mobile_desktop?_encoding=UTF8&aaxitk=19a6bcf256c16a462467fa991325e001&hsa_cr_id=8435511030801&pd_rd_plhdr=t&pd_rd_r=f59dc9b9-b334-48af-a9fd-ce967e32bef1&pd_rd_w=UNbCL&pd_rd_wg=V4Opp&ref_=sbx_be_s_sparkle_mcd_asin_0_img',
    },
  ];
  KeybordsArr: KeybordsArr[] = [
    {
      id: 21,
      img: 'https://m.media-amazon.com/images/I/71mzcD2N9iL._AC_UY218_.jpg',
      name: 'FIODIO Mechanical Gaming Keyboard',
      price: 34.99,
      link: 'https://www.amazon.com/FIODIO-Mechanical-Anti-Ghosting-Quick-Response-Multimedia/dp/B086161951/ref=sr_1_1_sspa?dchild=1&keywords=Keyboards&qid=1626257428&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEySzVXUDJaVTdZTVpLJmVuY3J5cHRlZElkPUEwOTAxMTcyM1VTR1hSV0JMWkFXUyZlbmNyeXB0ZWRBZElkPUEwNzU5MjU0OTVYVDc4QUREU0U0JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    },
    {
      id: 22,
      img: 'https://m.media-amazon.com/images/I/617RSxX2hCL._AC_UL320_.jpg',
      name: 'Redragon K552 Mechanical Gaming',
      price: 48.99,
      link: 'https://www.amazon.com/Redragon-K552W-RGB-Mechanical-Keyboard-Equivalent/dp/B07D3GB4N3/ref=sxin_12_alexaas_1_B07D3GB4N3?cv_ct_cx=Keyboards&dchild=1&keywords=Keyboards&pd_rd_i=B07D3GB4N3&pd_rd_r=7d8a1e28-bff1-498b-bff9-30c464d9c655&pd_rd_w=2dFAM&pd_rd_wg=ZbVbv&pf_rd_p=0ba9ec09-8e28-4b22-8e68-77e0fdc8b488&pf_rd_r=5JV91EG4PQ1SB94SAQZQ&qid=1626257428&sr=1-2-509f3c19-353d-402d-9e8e-afdddb9f06c9',
    },
  ];

  listAll: ListAllMenu[] = [
    {
      id: 14,
      img: 'https://m.media-amazon.com/images/I/51q7Td1wWUL._AC_UL320_.jpg',
      name: 'Headsets',
      link: 'headsets',
    },
    {
      id: 15,
      img: 'https://m.media-amazon.com/images/I/81yOuAUQAiL._QL65_AC_UL640_.jpg',
      name: 'Keyboards',
      link: 'keyboards',
    },
    {
      id: 16,
      img: 'https://m.media-amazon.com/images/I/71URFGI1JjS._AC_UL320_.jpg',
      name: 'Chairs',
    },
    {
      id: 17,
      img: 'https://m.media-amazon.com/images/I/7116U9cSW2L._AC_UY218_.jpg',
      name: 'Computer mice',
    },
    {
      id: 18,
      img: 'https://m.media-amazon.com/images/I/813mn9vTO9S._AC_UY218_.jpg',
      name: 'Video Games',
    },
    {
      id: 19,
      img: 'https://m.media-amazon.com/images/I/61CWilwhiRL._AC_UY218_.jpg',
      name: 'Sound Bars',
    },
    {
      id: 20,
      img: 'https://m.media-amazon.com/images/I/71I7m1tG9YL._AC_UY218_.jpg',
      name: 'Game',
    },
  ];

  blogList: BlogList[] = [
    {
      id: 23,
      img: 'https://habrastorage.org/web/4b7/c49/881/4b7c4988138b4ba5bc1f3fe69d6e77a2.jpg',
      name: 'How to choose the right laptop for programming',
      link: '/post',
      text: "Choosing a laptop that is suitable for programming is not an easy task. It's not hard to get confused looking through the various options. There are many different models on the market, each of which has a specific set of characteristics. You can write code on almost any laptop. However, your productivity will increase if you find the right tool for the task you are doing. There are different types of development, and each has its own tool. Thus, there is no one-size-fits-all solution.",
      post: `Mobility  The laptop can be chosen in any shape and size. Decide how lightweight and portable it needs to be. If you do not have to move often, then you should pay attention to 15-inch laptops. They offer the best specs and plenty of screen space for multitasking, so if you work in multiple locations or travel a lot, 13- or 14-inch laptops are your choice. They're lighter, and the battery will last longer. Unless you're buying a 2-in-1 laptop, the touchscreen doesn't justify the extra cost. I would not recommend purchasing a laptop with a touchscreen. Display The display of a laptop is one of the most important parts of a laptop, especially for programmers. If you are developing, you spend a lot of time in front of the screen. You need to pay attention to detail. The screen resolution of most budget laptops is 1366 x 768, which in my opinion is a rather mediocre resolution. The screen space of such a display is not enough for multitasking. Well, the text will not be clear enough for reading. On the other hand, a 4k display is too much, especially considering that its presence will significantly increase both the cost of a laptop and battery consumption. In any case, do not buy a laptop with a resolution of less than Full HD 1920 x 1080 (1080p). If you have to pay a little extra for 1080p resolution, do it. Also, make sure the display has sufficient viewing angles, the screen should not act as a mirror! Processor (CPU) A laptop's CPU has a huge impact on your performance, so don't try to save on it.There are different types of processors with different characteristics to look out for. The most significant characteristics are: cache size, number of cores, frequency and TDP (heat dissipation requirements). In general, an Intel core i5 or i7 processor with a frequency of 3GHz and more will be suitable for most. RAM (RAM) I do not think that you can seriously program on a laptop with less than 4GB of RAM. My recommendation for the minimum amount of RAM is 8GB. Even that may not be enough with the advent of Electron apps that use a lot of RAM. If you can afford it, invest in 16GB of RAM. Memory Type and Amount Purchasing an SSD should practically be your number one priority. This will give you a significant performance boost over a standard hard drive. Any operation will be significantly faster with an SSD, including loading the operating system, compiling code, launching applications, loading projects. The recommended minimum size of an SSD is 256GB. If you have enough funds, a 512GB or 1TB SSD is the best option. If price matters, then get a smaller SSD that will hold your operating system, as well as your applications and most frequently used documents (such as project files). Everything else - such as music and videos - will be stored on a larger hard drive. Keyboard You can't afford to compromise on the quality of the keyboard, since it is on it that you will type the code day and night.I prefer laptops with compact keyboards, it is very important to test the keyboard thoroughly before buying. Make sure the keys are comfortable and comfortable to press. A backlit keyboard is useful if you plan on frequently working in poorly lit rooms. Power A good battery may not matter much to you if you are mostly close to a power outlet. However, you should be interested in battery life of 6 hours or more; do not rely on the battery life specified by the manufacturer. Read descriptions on trustworthy websites, see what real users write in forums and reviews. Operating System The operating system you choose will largely determine which laptop you buy. Windows users have a number of options, if you prefer macOS you're limited to one manufacturer. Linux can be installed on most laptops, but it's better to get one that's officially supported by Linux. Some vendors, such as Dell and System 76, offer high quality products with Linux preinstalled. I recommend that you pay attention to these options first, otherwise do your research to make sure the laptop you choose works well with your preferred distribution.`,
      postImg: '',
    },
  ];
  favoritePhones: any[] = [];
  shopPhones: any[] = [];
  favoriteLike: any[] = [];
}
