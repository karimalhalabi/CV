boxContainer = document.getElementsByClassName('stagger-visualizer')[0];
for(let i=0;i<500;i++)
{
    document.getElementById('active')
  box = document.createElement('div');
  box.classList.add('box');
  boxContainer.appendChild(box);
}
const animation = anime.timeline({
    targets:'.box',
    easing: 'easeInOutExpo',
});
let w = screen.width;
let h = screen.height;
let units = (w > h) ? 'vh' : 'vw';
if (h>w){
document.getElementById('fullScreen').requestFullscreen;
screen.orientation.lock('landscape-primary');
}
changeFont = () => {
    w = screen.width;
    h = screen.height;
    units = (w > h) ? 'vh' : 'vw';
    elements = document.getElementsByTagName('p');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = 2 + units;
    }
}

window.addEventListener('resize', changeFont);

animation
.add({
    targets:'.menue',
    opacity:0,
    duration:0,

})
.add({
    rotate: ()=>{
        return anime.random(-360,360)
    },
    translateX: ()=>{
        return anime.random(-w/3,w/3)
    },
    translateY: ()=>{
        return anime.random(-h/2,h/2)
    },
    duration:3000,
    delay:anime.stagger(20),
})
.add({
    targets:'.menue',
    rotate: 0,
    translateX:0,
    translateY:0,
    duration:500,
    opacity:0.2,
    delay:anime.stagger(20),
})
.add({
    targets:'.menue',
    rotate: 0,
    width:400,
    height:260,
    opacity:1,
    translateX:0,
    duration:1000,
    delay:anime.stagger(20),
})
art =[];
numberOfArt=10;
artindex = 2;
for(let i = numberOfArt; i>=2 ;i--){
    art[i]='art'+ i;
}
console.log(art);
let menue0 = document.querySelector('#menue0');
let articles = document.getElementsByClassName('art');
let leftArrow = document.querySelector('.leftArrow');
let rightArrow = document.querySelector('.rightArrow');
let mores = document.getElementsByClassName('more')

let removeItem = ()=>{
    menue0.style.visibility = 'collapse';
}
let resetPage= ()=>
{
   window.location.hash = "mainPage";    
}
function getGoodLogo(){
    switch (artindex) {
        case 4:
            document.getElementById('myPic').src = 'images/UOKLogo.png';
            break;
        case 5:
            document.getElementById('myPic').src = 'images/ASILogo.png';
            break;
        case 6:
            document.getElementById('myPic').src = 'images/WIULogo.png';
            break;
        case 7:
            document.getElementById('myPic').src = 'images/WIZLogo.png';
            break
        case 8:
            document.getElementById('myPic').src = 'images/DEILogo.png';

            break
        case 9:
            document.getElementById('myPic').src = 'images/CADTechLogo.png';
            break
        default:
            document.getElementById('myPic').src = 'images/kimo.jpg';
    }
}
resetPage= ()=>
{
   window.location.hash = "mainPage";    
}
menue0.addEventListener('click',()=>{
    document.getElementById('picArt').classList.add('artDownLeft');
    setTimeout(removeItem,1000 );
    window.location.hash = "art2";    

    // document.getElementById('art2').classList.add('artDownRight');
})

leftArrow.addEventListener('click',()=>{
    document.getElementById('picArt').classList.add('artDownLeft');
    artindex -=1
    if (artindex < 2) artindex = numberOfArt;   
    getGoodLogo();
    window.location.hash = art[artindex];
})

rightArrow.addEventListener('click',()=>{
    document.getElementById('picArt').classList.add('artDownLeft');
    artindex +=1
    if (artindex > numberOfArt) artindex = 2;   
    getGoodLogo();
    window.location.hash = art[artindex];

    // document.getElementById('art2').classList.add('artDownRight');
})
for (let i = 0; i < mores.length; i++) {
    mores[i].addEventListener('click', () => {
        document.getElementById('picArt').classList.add('artDownLeft');
        artindex += 1;
        if (artindex > numberOfArt) artindex = 2;
        getGoodLogo();
        window.location.hash = art[artindex];

    })
}

setTimeout(resetPage,500);