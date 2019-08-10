'use strict'

var slider = document.getElementById('all');
var art = document.getElementById('art');
var branding = document.getElementById('branding');
var illustration = document.getElementById('illustration');
var web = document.getElementById('web-design');

function changePictures(option){
    switch(option){
        case 1:
            art.style.display = 'block';
            slider.style.display = 'none';
            branding.style.display = 'none';
            illustration.style.display = 'none';
            web.style.display = 'none';
            break;
        case 2:
            branding.style.display = 'block';
            slider.style.display = 'none';
            art.style.display = 'none';
            illustration.style.display = 'none';
            web.style.style.display = 'none';
            break;
        case 3:
            illustration.style.display = 'block';
            slider.style.display = 'none';
            art.style.display = 'none';
            branding.style.display = 'none';
            web.style.display = 'none';
            break;
        case 4:
            web.style.display = 'block';
            slider.style.display = 'none';
            art.style.display = 'none';
            illustration.style.display = 'none';
            branding.style.display = 'none';
            break;
        case 5:
            slider.style.display = 'block';
            art.style.display = 'none';
            illustration.style.display = 'none';
            branding.style.display = 'none';
            web.style.display = 'none';
        default:
    }
}