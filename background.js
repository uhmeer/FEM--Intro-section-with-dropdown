const triggers = document.querySelectorAll('#trigger');
const background = document.getElementById('dropdownBg');
const nav = document.getElementById('top');
const arrowTrigger = document.querySelectorAll('.arrow-icon');




function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => {
        if(this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active');
        }
    }, 50);




    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownLocation = dropdown.getBoundingClientRect();
    const navLocation = nav.getBoundingClientRect();

    const coordinates = {
      height: dropdownLocation.height,
      width: dropdownLocation.width,
      top: dropdownLocation.top - navLocation.top,
      left: dropdownLocation.left - navLocation.left
    };
    
    

    background.style.setProperty('width', `${coordinates.width}px`);
    background.style.setProperty('height', `${coordinates.height}px`);
    background.style.setProperty('transform', `translate(${coordinates.left}px, ${coordinates.top}px)`);


    // console.log(dropdownLocation)

    // console.log(dropdown);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}


triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
