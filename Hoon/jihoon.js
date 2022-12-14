gsap.registerPlugin(ScrollTrigger);
// 이렇게하면 대각선으로 흘러간다.
//빨간색 어몽어스 출발

gsap.to(".member1", {
  x: 700,
  // y: 600,
  duration: 8,
  rotation: 540,
  scaleY: 2,
  scaleX: 2,
});

gsap.to(".member1", {
  y: 600,
  duration: 8,
  delay: 2,
  rotation: 1080,
  scaleY: 1,
  scaleX: 1,
  opacity: 0,
});
//파란색 어몽어스 출발
gsap.to(".member2", {
  x: 700,
  duration: 8,
  rotation: 540,
  scaleY: 2,
  scaleX: 2,
});
gsap.to(".member2", {
  y: -200,
  duration: 8,
  delay: 2,
  rotation: 1080,
  scaleY: 1,
  scaleX: 1,
  opacity: 0,
});
//보라색 어몽어스 출발
gsap.to(".member3", {
  x: -800,
  duration: 7,
  rotation: 630,
  scaleY: 2,
  scaleX: 2,
});

gsap.to(".member3", {
  y: 650,
  duration: 7,
  delay: 2,
  scaleY: 1,
  scaleX: 1,
  opacity: 0,
});

//녹색어몽어스 출발
gsap.to(".member4", {
  x: -850,
  duration: 7,
  rotation: 630,
  scaleY: 2,
  scaleX: 2,
});

gsap.to(".member4", {
  y: -300,
  duration: 7,
  delay: 2,
  scaleY: 1,
  scaleX: 1,
  opacity: 0,
});

//timeline() 써서 구현하기

//생성자 함수

function MovieInfo(
  title,
  director,
  actor,
  genre,
  time,
  rating,
  ost,
  url,
  letterColor,
  borderColor,
  boxColor
) {
  this.title = title;
  this.director = director;
  this.actor = actor;
  this.genre = genre;
  this.time = time;
  this.rating = rating;
  this.ost = ost;
  this.url = url;
  this.letterColor = letterColor;
  this.borderColor = borderColor;
  this.boxColor = boxColor;
}
//1 악마는 프라다를 입는다 테마: 흰 ,보더색깔: 빨
let movie1 = new MovieInfo(
  "악마는 프라다를 입는다",
  "데이빗 프랭클",
  "메릴 스트립, 앤해서웨이",
  "코미디,드라마",
  "109분",
  "12세 이상",
  "https://www.youtube.com/watch?v=pxyuwD-nmeg&list=RDpxyuwD-nmeg&start_radio=1&rv=pxyuwD-nmeg&t=115",
  "https://namu.wiki/w/%EC%95%85%EB%A7%88%EB%8A%94%20%ED%94%84%EB%9D%BC%EB%8B%A4%EB%A5%BC%20%EC%9E%85%EB%8A%94%EB%8B%A4(%EC%98%81%ED%99%94)",
  "rgb(0,0,0)",
  "rgb(0,0,0)",
  "rgb(255,255,255)"
);
//2 step up 3 테마: 빨 , 보더색깔: 빨 글자: 흰
let movie2 = new MovieInfo(
  "STEP UP 3",
  "존 추",
  "샤니 빈슨, 릭 말람브리, 애덤 G. 세바니",
  "드라마",
  "107분",
  "12세 이상",
  "https://www.youtube.com/watch?v=IKrGakIb5jk",
  "https://namu.wiki/w/%EC%8A%A4%ED%85%9D%20%EC%97%85%203D?from=%EC%8A%A4%ED%85%9D%EC%97%85%203",
  "rgb(255,255,255)",
  "rgb(255,0,0)",
  "rgb(255,0,0)"
);
//3 007 notime todie 테마: 청회색
let movie3 = new MovieInfo(
  "007 No time to die",
  "캐리 후쿠나가",
  "다니엘 크레이그, 레아 세이두, 라미 말렉",
  "액션,첩보",
  "163분",
  "12세 이상",
  "https://www.youtube.com/watch?v=1I0ikQgGHjU",
  "https://namu.wiki/w/007%20%EB%85%B8%20%ED%83%80%EC%9E%84%20%ED%88%AC%20%EB%8B%A4%EC%9D%B4",
  "rgb(255,255,255)",
  "rgb(0,0,0)",
  "rgb(70,125,152)"
);
//4 그레이 50가지 테마: 회색
let movie4 = new MovieInfo(
  "그레이의 50가지 그림자",
  "샘 테일러존슨",
  "다코타 존슨, 제이미 도넌",
  "로맨스,드라마",
  "125분",
  "청소년 관람불가",
  "https://www.youtube.com/watch?v=RuxfYnDl6p0",
  "https://namu.wiki/w/%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%9D%98%2050%EA%B0%80%EC%A7%80%20%EA%B7%B8%EB%A6%BC%EC%9E%90(%EC%98%81%ED%99%94)",
  "rgb(106,106,106)",
  "rgb(173,170,170)",
  "rgb(173,170,170)"
);
//5 아저씨 테마: 검정
let movie5 = new MovieInfo(
  "아저씨",
  "이정범",
  "원빈, 김새론",
  "범죄,액션",
  "119분",
  "18세 이상 관람가",
  "https://www.youtube.com/watch?v=1ufN1m0BfB4",
  "https://namu.wiki/w/%EC%95%84%EC%A0%80%EC%94%A8(%EC%98%81%ED%99%94)",
  "rgb(255,255,255)",
  "rgb(45,46,52)",
  "rgb(45,46,52)"
);

//js로 제어한번 해볼까?
const bdColor = document.querySelector("#jh-second>.container");
const mvTitle = document.querySelector("#title>p");
const mvtitleBoxcolor = document.querySelector("#title");
const mvDirector = document.querySelector("#director>p");
const mvActor = document.querySelector("#actor>p");
const mvGenre = document.querySelector("#genre>p");
const mvTime = document.querySelector("#time>p");
const mvRating = document.querySelector("#rating>p");
//난 바보인가봐~~~ a태그 까지 선택해야했었는데 ㅠ
const mvSoundtrack = document.querySelector("#soundtrack>a");
// 이거 const 따른데에서 2번 줘서 진짜 짜증 ㅡㅡ
const mvInfo = document.querySelector("#moveNM");
const mvImg = document.querySelector(".mv-img>img");

// console.log(mvTitle); //악마는 프라다를 입는다
// console.log(mvDirector); //데이빗프랭클
console.log(mvtitleBoxcolor);
// 화살표 버튼 id제어하기
const prevBtn = document.querySelector("#prev-Btn");
const nextBtn = document.querySelector("#next-Btn");
//const container = document.querySelector("#jh-second >.container");

// console.log(prevBtn);

//nextBtn 누르면 변경되는 함수 만들기
// const moveNM = document.querySelector("#moveNM");

// moveNM.addEventListener("click", function () {
//   console.log("i 클릭");
// });
// console.log(container.style.border);
//현재 1부터시작
const movies = [movie1, movie2, movie3, movie4, movie5];
const len = movies.length - 1;
let num = 0;
console.log(len);

prevBtn.addEventListener("click", function () {
  console.log("좌측 클릭");
  //현재 num===0 일때 if문 분기
  if (num === 0) {
    mvTitle.innerHTML = movies[len].title;
    mvDirector.innerHTML = movies[len].director;
    mvActor.innerHTML = movies[len].actor;
    mvGenre.innerHTML = movies[len].genre;
    mvTime.innerHTML = movies[len].time;
    mvRating.innerHTML = movies[len].rating;
    mvSoundtrack.setAttribute("href", movies[len].ost);
    mvInfo.setAttribute("href", movies[len].url);
    // mvInfo.href = movies[num + 1].url;
    mvImg.setAttribute("src", `img/movie${len}.jfif`);
    mvtitleBoxcolor.style.backgroundColor = movies[len].boxColor;
    mvTitle.style.color = movies[len].letterColor;
    bdColor.style.border = `1px solid ${movies[len].borderColor}`;
  }
  //num!=0일때 if문 분기
  else {
    mvTitle.innerHTML = movies[num - 1].title;
    mvDirector.innerHTML = movies[num - 1].director;
    mvActor.innerHTML = movies[num - 1].actor;
    mvGenre.innerHTML = movies[num - 1].genre;
    mvTime.innerHTML = movies[num - 1].time;
    mvRating.innerHTML = movies[num - 1].rating;
    mvSoundtrack.setAttribute("href", movies[num - 1].ost);
    mvInfo.setAttribute("href", movies[num - 1].url);
    // mvInfo.href = movies[num + 1].url;
    mvImg.setAttribute("src", `img/movie${num - 1}.jfif`);
    mvtitleBoxcolor.style.backgroundColor = movies[num - 1].boxColor;
    mvTitle.style.color = movies[num - 1].letterColor;
    bdColor.style.border = `1px solid ${movies[num - 1].borderColor}`;
  }
  num--;
  console.log(num);
  if (num === -1) {
    num = len;
  }
});
// console.log(movie1.url);
//우측화살표 클릭했을때
nextBtn.addEventListener("click", function () {
  console.log("우측 클릭");
  // mvTitle.innerHTML = movie2.title;
  //내가 원하는거는 movie 1,2,3,4,5도 변수로 받고싶다 이말이야~
  mvTitle.innerHTML = movies[num + 1].title;
  mvDirector.innerHTML = movies[num + 1].director;
  mvActor.innerHTML = movies[num + 1].actor;
  mvGenre.innerHTML = movies[num + 1].genre;
  mvTime.innerHTML = movies[num + 1].time;
  mvRating.innerHTML = movies[num + 1].rating;
  mvSoundtrack.setAttribute("href", movies[num + 1].ost);
  mvInfo.setAttribute("href", movies[num + 1].url);
  // mvInfo.href = movies[num + 1].url;
  mvImg.setAttribute("src", `img/movie${num + 1}.jfif`);
  mvtitleBoxcolor.style.backgroundColor = movies[num + 1].boxColor;
  mvTitle.style.color = movies[num + 1].letterColor;
  bdColor.style.border = `1px solid ${movies[num + 1].borderColor}`;

  num++;
  console.log(num);
  if (num >= 4) {
    num = -1;
  }
});
//mvtitleBoxcolor.style.backgroundColor = "black";
console.log();
// console.log(movies[2].ost);
// next 버튼이나 prev 버튼 누를시 jh-second로
// 이동시키기

//nav bar 붙이기
//animation 붙이기
//textsection 붙이기
