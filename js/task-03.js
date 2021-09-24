const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let liWithImg = images.map(item => {
  // let newLiEl = document.createElement('li');
  // let newImgEl = document.createElement('img');
  // newImgEl.scr = item.url;
  // newImgEl.alt = item.alt;
  // console.log(newImgEl);
  return `<li><img src=${item.url} alt= ${item.alt}> </li>`
});
console.log(liWithImg);
console.log(liWithImg=liWithImg.join(''));
const findUl = document.querySelector('.gallery');
console.log(findUl);
findUl.insertAdjacentHTML('afterbegin', liWithImg);
document.querySelector('.gallery').style.display = "flex";
document.querySelector('.gallery').style.listStyle = 'none';
document.querySelector('.gallery').style.flexWrap = 'wrap';
document.querySelector('.gallery').style.justifyContent = 'space-around';
document.querySelectorAll('li').forEach(
  item => {
    item.style.display = "block";
    item.style.width = '30%';
    // item.style.marginRight = '30px'
  }
)
document.querySelectorAll('img').forEach(
  item => {
    item.style.display = "block";
    item.style.maxWidth = '100%';
  }
)
