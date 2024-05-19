const toggle = document.querySelector('.toggle').addEventListener('click', toggleMainList);
const mainList = document.getElementById('main__list');



function toggleMainList(e) {
    mainList.classList.toggle('open');
    this.classList.toggle('opened');
    console.log(e)
    
};



   

