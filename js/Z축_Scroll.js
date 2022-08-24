const el = document.querySelector('section');
const art = document.querySelectorAll('section>article');
const menu = document.querySelectorAll('.scrollNavi>li');

const h1 = document.querySelector('h1');

window.addEventListener('scroll', ()=> {
    //현재 scroll의 위치
    let scroll = document.documentElement.scrollTop; 
    // h1.textContent = scroll;
    for(let i=0; i<art.length; i++){
        art[i].setAttribute('style', 'transform:translateZ(' + parseInt((-5000*i)+scroll) + 'px)');
        //i==0 0~5000
        //i==1 5000~10000
        if(scroll>=i*5000 && scroll<(i+1)*5000) {
            for(let j=0; j<menu.length; j++){
                menu[j].classList.remove('on');
                art[j].classList.remove('on');
            }
            menu[i].classList.add('on');
            art[i].classList.add('on');
        }
    }    
});
for(let k=0; k<menu.length; k++){
    menu[k].addEventListener('click', e=>{
        window.scroll({top:5000*k});
    });
}