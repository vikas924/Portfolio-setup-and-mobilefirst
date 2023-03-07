 function showhide(){
    let element = document.querySelector('.button');
    let closemenu = document.querySelector('.mobile-menu')
    if (element.style.display != 'none') {
            element.style.display = 'none';
       closemenu.style.visibility = 'visible';
       closemenu.style.height = '100%';
    } 
    else if (element.style.display == 'none') {
        closemenu.style.height = '0';
        setTimeout(() => {
            closemenu.style.visibility = 'hidden';
            element.style.display = 'block';
           }, 200);
    }
}
    
