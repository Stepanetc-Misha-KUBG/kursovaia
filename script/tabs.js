let subject = document.querySelectorAll('.subject'),
    subjectLink = document.querySelectorAll('.subject-list a');

function hiden() {
    subject.forEach(item => {
        item.style.display = 'none';
    });
}

function show(i) {
    subject[i].style.display = 'block';
}

subjectLink.forEach((item, i) => {
    item.addEventListener('click', () => {
        for(let key = 0; key < subjectLink.length; key++){
            subjectLink[key].classList.remove('active');
        }
        item.classList.add('active');

        hiden();
        show(i)
    })
});


hiden();
show(i = 0)