const items = document.querySelectorAll("article"); //array
const aside = document.querySelector('aside');
const close1 = aside.querySelector('span');
for (let i=0; i<items.length;i++){
    items[i].addEventListener('mouseenter', e=>{
        e.currentTarget.querySelector('video').play();
    });
    items[i].addEventListener('mouseleave', e=>{
        e.currentTarget.querySelector('video').pause();
    });
    items[i].addEventListener('click', function(e){
        let tit = e.currentTarget.querySelector('h2').innerText;
        let txt = e.currentTarget.querySelector('p').innerText;
        let vidsrc = e.currentTarget.querySelector('video').src;

        aside.querySelector('h1').innerText = tit;
        aside.querySelector('p').innerText = txt;
        aside.querySelector('video').src = vidsrc;
        aside.querySelector('video').play();
        aside.classList.add('on');
    });
    close1.addEventListener('click', function(){
        aside.classList.remove('on');
        aside.querySelector('video').pause();
    });
}