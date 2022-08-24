// element를 변수로 선언
const slideList = document.querySelector('.slide_list');
const slideContents = document.querySelectorAll('.slide_list>li'); //array-> index값으로 데이타에 접근
const slideBtnNext = document.querySelector('#next');
const slideBtnPrev = document.querySelector('#prev');
//슬라이드 갯수
const slideLen = slideContents.length;
//슬라이드 넓이
const slideWidth = slideContents[0].clientWidth;
//element의 넓이/높이
//element.offsetWidth : margin값을 제외한 padding, border포함한 넓이
//element.clientWidth : margin, border를 제외된 padding값까지 포함한 넓이
//element.scrollWidth : 스크롤의 가려진 영역까지 계산

const slideSpeed = 1000; //밀리초단위
const startNum = 0;
//앞뒤에 마지막, 첫번째 슬라이드를 붙여서 두개가 더 많음 4-1-2-3-4-1
slideList.getElementsByClassName.width = slideWidth*(slideLen+2)+'px';

//first와 last slide copy
let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;

//node복제 : cloneNoe(true) -> 태그
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

//슬라이드 추가
//appendChild : 노드 추가. 한번에 하나의 node만 추가. 마지막에 노드 추가
//append : 노드, 텍스트등 추가기능. 여러개 추가 가능
//insertBefore : 특정 위치 앞에 노드 추가
slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);
slideList.style.left = -slideWidth*(startNum+1)+'px';

//슬라이드에 대한 변수 선언
let curIndex = startNum;
let curSlide = slideContents[curIndex];
let timeId;
//화면을 load하면 슬라이드가 자동으로 넘어가는 함수를 실행
startAutoPlay();

function startAutoPlay(){
    stopInterval();
    timeId = setInterval(nextImage, 2000);
}
function stopInterval(){
    clearInterval(timeId);
}
//슬라이드에 마우스를 가져갔을떄
slideList.addEventListener('mouseenter', e=> {
    stopInterval();
});

//슬라이드에 마우스를 뗏을때
slideList.addEventListener('mouseleave', e=>{
    startAutoPlay();
});
//next버튼 이벤트
slideBtnNext.addEventListener('click', function(){
    stopInterval();
    nextImage();
});

slideBtnNext.addEventListener('mouseleave', startAutoPlay);
//prev버튼 이벤트
// slideBtnPrev.addEventListener('click', function(){}
// slideBtnPrev.addEventListener('click', e=> { 이벤트객체
slideBtnPrev.addEventListener('click', prevImage);
slideBtnPrev.addEventListener('mouseleave', startAutoPlay);

function nextImage(){
    if(curIndex<=slideLen-1) {
        slideList.style.transition = slideSpeed+'ms';
        slideList.style.left = -slideWidth*(curIndex+2)+'px';
    } 
    if(curIndex == slideLen-1) {
        setTimeout(function(){ //지정된 초 후에 실행 (1초후에 실행)
            slideList.style.transition = '0ms';
            slideList.style.left = -slideWidth*(startNum+1)+'px';
        }, slideSpeed);
        curIndex = -1;
    }   
    curIndex++;
};
function prevImage(){
    stopInterval();
    if(curIndex>=0) {
        slideList.style.transition = slideSpeed+'ms';
        slideList.style.left = -slideWidth*curIndex+'px';
    }
    if(curIndex ==0)  {
        setTimeout(function(){
            slideList.style.transition = '0ms';
            slideList.style.left = -slideWidth*slideLen + 'px';
        }, 1000);
        curIndex = slideLen;
    }
    curIndex--;
};
