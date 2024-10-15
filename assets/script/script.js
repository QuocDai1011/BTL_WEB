const images=[
    './assets/img/slide18-captionText.jpg',
    './assets/img/slide18-mountain.jpg',
    './assets/img/slide18-mountainPeace.jpg'
]
const titles=[
    'Caption Text',
    'Caption Two',
    'Caption Three'
];
let currentPage=0;
const pageNumber=document.getElementById('slide__page');
const pageImage=document.getElementById('slide__img-screen');
const textImage=document.getElementById('slide__title');
const turnLeft=document.getElementById('slide__turn-Left');
const turnRight=document.getElementById('slide__turn-Right');
const circleColors=document.querySelectorAll('.slide__circle-color');

function pageUpdate(){
    pageImage.src=images[currentPage];
    textImage.textContent=titles[currentPage];
    pageNumber.textContent=`${currentPage + 1 } / ${images.length}`;
    circleColors.forEach((circleColor,i) => {
        if(i==currentPage){circleColor.style.backgroundColor='rgb(113, 113, 113)';}
        else {circleColor.style.backgroundColor='rgb(187, 187, 187)';}
    })
}

function left(){
    currentPage=(currentPage - 1 + images.length) % images.length;
    pageUpdate();
}
function right(){
    currentPage=(currentPage + 1) % images.length;
    pageUpdate();
}
function pageNumberUpdate(j){
    currentPage = j;
    pageUpdate();
}
circleColors.forEach(circleColor =>{
    circleColor.addEventListener('click',()=>{
    const j= circleColor.getAttribute('data-index');
    pageNumberUpdate(parseInt(j));
    });
});

turnLeft.addEventListener('click',left);
turnRight.addEventListener('click',right);