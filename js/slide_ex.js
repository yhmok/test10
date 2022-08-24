//서브메뉴 숨기기
let submenu = document.getElementsByClassName('sub');
//여러개--> 배열 submenu[0], submenu[1]
// submenu[0].style.display = "none";
// submenu[1].style.display = "none";
for(let i=0; i<submenu.length; i++){
    submenu[i].style.display = "none";
}

//슬라이드 숨기기. 첫번째 슬라이드를 제외하고 나머지 슬라이드 숨기기
let slide = document.getElementsByClassName('myslide');
// //slide[0], slide[1], slide[2]
for(let i=1; i<slide.length; i++){
    slide[i].style.display = "none";
}
//마우스를 메뉴에 가져갔을때
function showmenu(no){
    submenu[no].style.display = 'block';
}
//마우스를 메뉴에서 떨어졌을때
function hidemenu(no){
    submenu[no].style.display = 'none';
}
//슬라이드 움직이기
let slideIdx=0;
let tid;
//slide[0], slide[1], slide[2]

function plusslide(no){ //-1, 1
   //전체 슬라이드를 안보임
   for(let i=0; i<slide.length; i++){
       slide[i].style.opacity = '0';
   }

   slideIdx += no;  //1 -> 2 -> 3
                    //slideIdx = slideIdx + no(1), 
                    //slideIdx = slideIdx + no(-1)

   if(slideIdx<0) {slideIdx = slide.length-1;}
   if(slideIdx==slide.length) {slideIdx = 0;}

   slide[slideIdx].style.opacity = '1';
   //slide[1].style.display = 'block';
   //slide[2].style.display = 'block';
   //slide[3].style.display = 'block'; -> slide[0].style.display = 'block';
}
function stopslide(){
    clearInterval(tid);
}
function startslide(){
    tid = setInterval("plusslide(1);", 3000);
}
startslide();
