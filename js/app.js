const number10 = document.querySelector('#number10')
const number6 = document.querySelector('#number6')
const number4 = document.querySelector('#number4')
const wrapper10 = document.querySelector('#wrapper10')
const wrapper6 = document.querySelector('#wrapper6')
const wrapper4 = document.querySelector('#wrapper4')
wrapper6.style.display = 'none';
wrapper4.style.display = 'none';
number10.style.color = 'yellow';
number10.addEventListener('click',function () {
    number10.style.color = 'yellow';
    number6.style.color = 'white';
    number4.style.color = 'white';
    wrapper6.style.display = 'none';
    wrapper4.style.display = 'none';
    wrapper10.style.display = 'unset';
})
number6.addEventListener('click',function () {
    number6.style.color = 'yellow';
    number10.style.color = 'white';
    number4.style.color = 'white';
    wrapper10.style.display = 'none'
    wrapper4.style.display = 'none'
    wrapper6.style.display = 'unset';
})
number4.addEventListener('click',function () {
    number4.style.color = 'yellow';
    number6.style.color = 'white';
    number10.style.color = 'white';
    wrapper6.style.display = 'none'
    wrapper10.style.display = 'none'
    wrapper4.style.display = 'unset';
})
