console.log('Loaded!');
//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'Nice value';

//Now move the image
var img = document.getElementById('madi');
madi.onClick = function(){
    madi.style.marginLeft = '100px';
};