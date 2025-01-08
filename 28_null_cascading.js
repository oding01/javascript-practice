const result = [
  {
    post_id: 1,
    title: '자바스크립트 문법을 잘 사용하는 방법',
    desc: '닥치고 많이 만들고 작성하세요',
    writer: {
      user_id: 10,
      username: 'Aaron',
      address: {
        city: 'Mapo',
        postcode: '04212',
      },
    },
    replies: [
      {
        desc: '너무 유익한 글이네요!',
        writer: {
          user_id: 20,
          username: 'Baron',
          ip: '10.0.0.1',
          statistics: {
            level: 'Silver',
            replies: 32,
            posts: 10,
          },
        },
      },
      {
        desc: '장난하냐? 이딴게 글이라고',
        writer: {
          user_id: 30,
          username: 'Caron',
          ip: '10.0.0.2',
          statistics: {
            level: 'Iron',
            replies: 3,
            posts: 0,
          },
        },
      },
      {
        desc: '윗댓분 너무 인성파탄나셨네요',
        writer: {
          user_id: 40,
          username: 'Daron',
          ip: '10.0.0.3',
          statistics: {
            level: 'Gold',
            replies: 67,
            posts: 12,
          },
        },
      },
    ],
  },
  {
    post_id: 2,
    title: '자바 스프링 개발을 쉽게하는 방법',
    desc: '닥치고 많이 만들고 작성하세요',
    writer: {
      user_id: 20,
      username: 'Baron',
    },
    replies: [],
  },
  {
    post_id: 3,
    title: 'AWS 설계 및 인프라 설정 쉽게하는 방법',
    desc: '닥치고 많이 만드세요',
    writer: {
      user_id: 30,
      username: 'Caron',
      address: {
        city: 'Seoul',
        postcode: '03171',
      },
    },
    replies: [
      {
        desc: '맞아요 AWS 는 확실히 많이 만들어봐야하는듯',
        writer: {
          user_id: 50,
          username: 'Earon',
          ip: '10.0.0.4',
        },
      },
    ],
  },
];

result.map((post) => {
  const postMain = `----------
> 글 제목 : ${post.title}
> 글 내용 : ${post.desc}
> 글 쓴이 : ${post.writer.username} | 사는곳 : ${
    post.writer.address?.city ?? '미기재'
  }`;
  const postComment = post.replies[0]
    ? `    \n    - 최근 댓글 : ${post.replies[0]?.desc}
    - 최근 댓글 작성자 : ${post.replies[0]?.writer.username} | ${
        post.replies[0]?.writer.statistics?.level ?? '등급없음'
      }
  `
    : '';
  return console.log(postMain + postComment);
});
