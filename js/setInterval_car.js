const pannel = document.querySelector('#pannel');
const play = document.querySelector('#play');
const back = document.querySelector('#return');
const pause = document.querySelector('#stop');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const pannelImg = document.querySelector('#pannel>img');
let curIndex=1;
let timeId;
//1.next버튼을 click했을때
next.addEventListener('click', e=>{
    nextImage();
});
//2.prev버튼을 click했을때
prev.addEventListener('click', ()=>{
    prevImage();
});
//3.play버튼을 click했을때는 자동으로 회전을 한다.
play.onclick = function(){
    clearInterval(timeId);
    timeId = setInterval(nextImage, 100);
};
// 4.return버튼을 click했을때는 play버튼과 반대방향
back.addEventListener('click', function(){
    clearInterval(timeId);
    timeId = setInterval(prevImage, 100);
});
//5.stop버튼을 click했을때는 자동회전을 멈춘다
pause.addEventListener('click', function(){
    clearInterval(timeId);
});
function nextImage(){
    var index = curIndex+1;
    if(index>36){index=1;}
    pannelImg.setAttribute('src', 'img12/ABP_' +index+'.webp');
    curIndex = index;
}
function prevImage(){
    var index = curIndex-1;
    if(index<1) {index=36;}
    pannelImg.setAttribute('src', 'img12/ABP_' +index+'.webp');
    curIndex = index;
}