function setBaseRem() {
    var width = 0;
    width = window.innerWidth > 640 ? 640 : window.innerWidth;
    var html = document.getElementsByTagName('html')[0].style.fontSize = width / 10 + 'px';
}
setBaseRem();
