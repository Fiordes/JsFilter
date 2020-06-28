const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', e => {
    if (e.target.tagName !== 'LI') return false;

    let filterClass = e.target.dataset.filter;


    filterBox.forEach(el => {
        el.classList.remove('hide')
        if (!el.classList.contains(filterClass)) {
            el.classList.add('hide')
        }
    });



});