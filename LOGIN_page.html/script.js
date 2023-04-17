function showform(){
    document.querySelector('.pop-up').classList.add('classOverlay');
    document.querySelector('.Loginform').classList.add('classloginform');
}
function closeform(){
    document.querySelector('.pop-up').classList.remove('classOverlay');
    document.querySelector('.Loginform').classList.remove('classloginform');
}

var c=document.querySelector('span');
c.addEventListener("click",closeform)