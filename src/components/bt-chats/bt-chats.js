export default {
  name: 'BtChats',
  props: ['closeChat'],
  data() {
    return {
      // role
      // admin 1
      // user 2
      // moderator 3
      // currentUser 4
      message: [
        {
          author: 'mart',
          imgSrc:
            'https://sun1-87.userapi.com/s/v1/ig1/s7xN_KLttIm-XLxjHpEUEjcelcJQjfRQHWck45Gu7AdxRtUKG2iDXcgrTx1zndRKMJfRG7A9.jpg?size=200x200&quality=96&crop=0,0,2048,2048&ava=1',
          role: 2,
          msg: 'Соощение от другого пользователя',
          time: '11:00',
        },
        {
          author: 'Admin',
          imgSrc:
            'https://avatars.akamai.steamstatic.com/95d527235a19d26c99ba565a5f7226a480fbd772_full.jpg',
          role: 1,
          msg: 'Сообщение от администратора',
          time: '11:05',
        },
        {
          author: 'Moderator',
          imgSrc:
            'https://avatars.akamai.steamstatic.com/d3eb39d70f297a4191bea908797cd7972a77ad86_full.jpg',
          role: 3,
          msg: 'Сообщение от модератора',
          time: '15:30',
        },
        {
          author: 'Paradox-art',
          imgSrc:
            'https://sun1-26.userapi.com/s/v1/if1/fKF81RvFb2H_xAOYVB4iqiVjTPklHEYXQYA4XFg4p7ZKpLnShTWLqugxpCA1KeYpKTKzHdM9.jpg?size=200x200&quality=96&crop=1361,95,1036,1036&ava=1',
          role: 4,
          msg: 'Мое сообщение',
          time: '16:20',
        },
        {
          author: 'mart',
          imgSrc:
            'https://sun1-92.userapi.com/s/v1/ig2/azXN0HqTIBSXveh6qPszPLXaQBG1L8rlnxUq4-owoYFM0jsPdzYGwKt1wYnPfeeOLLst4zZCw0vHaspCqfogW4N7.jpg?size=200x200&quality=96&crop=111,111,843,843&ava=1',
          role: 2,
          msg: 'Соощение от другого пользователя. Очекнь длинное длинное длинное длинное сообщение',
          time: '17:10',
        },
        {
          author: 'PIGKL_HACKER',
          imgSrc:
            'https://avatars.akamai.steamstatic.com/50767cea96889a121066ed45c098873cb258f8f3_full.jpg',
          role: 2,
          msg: 'Сайт бомба, вложил 100 рублей, а получил в 3 раза больше!!! Кейсы суперские!',
          time: '17:10',
        },
        {
          author: 'OKITA SOUJI',
          imgSrc:
            'https://sun1-83.userapi.com/s/v1/ig2/E_7iSakVVzE7IFSlajoQvqJ0dhQM5wY_6hLgat_V3LZyZ7OH8LRJ-2rWZRuxLKxzWVNtRLpnbSHY-ad1tdL1G6JL.jpg?size=200x200&quality=95&crop=65,1,604,604&ava=1',
          role: 2,
          msg: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона,',
          time: '17:10',
        },
        {
          author: 'Moderator',
          imgSrc:
            'https://avatars.akamai.steamstatic.com/d3eb39d70f297a4191bea908797cd7972a77ad86_full.jpg',
          role: 3,
          msg: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.',
          time: '15:30',
        },
        {
          author: 'Admin',
          imgSrc:
            'https://avatars.akamai.steamstatic.com/95d527235a19d26c99ba565a5f7226a480fbd772_full.jpg',
          role: 1,
          msg: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur',
          time: '11:05',
        },
      ],
    };
  },
};
