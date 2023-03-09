/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
function showhide() {
  const element = document.querySelector('.button');
  const closemenu = document.querySelector('.mobile-menu');
  if (element.style.display !== 'none') {
    element.style.display = 'none';
    closemenu.style.visibility = 'visible';
    closemenu.style.height = '100%';
  } else if (element.style.display === 'none') {
    closemenu.style.height = '0';
    setTimeout(() => {
      closemenu.style.visibility = 'hidden';
      element.style.display = 'block';
    }, 200);
  }
}

const openMenu = document.querySelector('.button');
openMenu.addEventListener('click', showhide);

const closeMenu = document.querySelector('.mobile-menu');
closeMenu.addEventListener('click', showhide);

const link = document.createElement('div');
const source = document.createElement('div');
link.innerHTML = '<button id="live"><a class="livlink" href=google.com>see live</a><img id="poplink" src="./mobilebutton/live.png"></button>';
source.innerHTML = '<button id="source"><a class="livlink" href=#>see source</a><img id="popsrc" src="./mobilebutton/source.png"></button>';

const image0 = document.createElement('div');
image0.id = 'img0';
image0.innerHTML = '<img class="yoga-im" src="./Work-section-img/frame.png" alt="project1">';

const image = document.createElement('div');
image.id = 'img1';
image.innerHTML = '<img class="yoga-im" src="./Work-section-img/backgroundli.png" alt="project1">';

const image2 = document.createElement('div');
image2.id = 'img2';
image2.innerHTML = '<img class="yoga-im" src="./desktopimg/backgrounds/card2.png" alt="project1">';

const image3 = document.createElement('div');
image3.id = 'img3';
image3.innerHTML = '<img class="yoga-im" src="./desktopimg/backgrounds/card3.png" alt="project1">';

const image4 = document.createElement('div');
image4.id = 'img4';
image4.innerHTML = '<img class="yoga-im" src="./desktopimg/backgrounds/card4.png" alt="project1">';

const image5 = document.createElement('div');
image5.id = 'img5';
image5.innerHTML = '<img class="yoga-im" src="./desktopimg/backgrounds/card5.png" alt="project1">';

const image6 = document.createElement('div');
image6.id = 'img6';
image6.innerHTML = '<img class="yoga-im" src="./desktopimg/backgrounds/card6.png" alt="project1">';

const arr = [];
// eslint-disable-next-line no-plusplus
const newarr = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 7; i++) {
  const obj = {};
  newarr.push(obj);
}

// eslint-disable-next-line no-plusplus,
for (let i = 0; i < 7; i++) {
  // eslint-disable-next-line eqeqeq
  if (i == 0) {
    newarr[i].name = document.querySelector('#heading3');
    newarr[i].description = document.querySelector('.framepara');
    newarr[i].image = image0.innerHTML;
    newarr[i].technologies = document.querySelector('#tagsul');
    newarr[i].link = link.innerHTML;
    newarr[i].source = source.innerHTML;
    arr.push(newarr[i]);
  } else if (i == 1) {
    newarr[i].name = document.querySelector('#prohead');
    newarr[i].description = document.querySelector('#propara');
    newarr[i].image = image.innerHTML;
    newarr[i].technologies = document.querySelector('#pro-list');
    newarr[i].link = link.innerHTML;
    newarr[i].source = source.innerHTML;
    arr.push(newarr[i]);
  } else if (i == 2) {
    newarr[i].name = document.querySelector('#prohead1');
    newarr[i].description = document.querySelector('#propara1');
    newarr[i].image = image2.innerHTML;
    newarr[i].technologies = document.querySelector('#card');
    newarr[i].link = link.innerHTML;
    newarr[i].source = source.innerHTML;
    arr.push(newarr[i]);
  } else if (i == 3) {
    newarr[i].name = document.querySelector('#prohead2');
    newarr[i].description = document.querySelector('#propara2');
    newarr[i].image = image3.innerHTML;
    newarr[i].technologies = document.querySelector('#pro-list2');
    newarr[i].link = link.innerHTML;
    newarr[i].source = source.innerHTML;
    arr.push(newarr[i]);
  } else if (i == 4) {
    newarr[i].name = document.querySelector('#prohead3');
    newarr[i].description = document.querySelector('#propara3');
    newarr[i].image = image4.innerHTML;
    newarr[i].technologies = document.querySelector('#pro-list3');
    newarr[i].link = link.innerHTML;
    newarr[i].source = source.innerHTML;
    arr.push(newarr[i]);
  } else if (i == 5) {
    newarr[i].name = document.querySelector('#prohead4');
    newarr[i].description = document.querySelector('#propara4');
    newarr[i].image = image5.innerHTML;
    newarr[i].technologies = document.querySelector('#pro-list4');
    newarr[i].link = link.innerHTML;
    newarr[i].source = source.innerHTML;
    arr.push(newarr[i]);
  } else if (i == 6) {
    newarr[i].name = document.querySelector('#prohead5');
    newarr[i].description = document.querySelector('#propara5');
    newarr[i].image = image6.innerHTML;
    newarr[i].technologies = document.querySelector('#pro-list5');
    newarr[i].link = link.innerHTML;
    newarr[i].source = source.innerHTML;
    arr.push(newarr[i]);
  }
}

const section = document.createElement('section');
section.id = 'content';
const div = document.createElement('div');
div.id = 'headingpop';
const target = document.querySelector('#wrap');
target.insertBefore(section, target.childNodes[2]);
document.body.querySelector('#content').appendChild(div);
const closebutton = document.createElement('div');
closebutton.innerHTML = '<button id="closepopup"><img src="./mobilebutton/close.png" alt="socail-link"></button>';
document.body.querySelector('#content').appendChild(closebutton);

const button0 = document.querySelector('#project-button');
const button1 = document.querySelector('#probutton');
const button2 = document.querySelector('#probutton2');
const button3 = document.querySelector('#probutton3');
const button4 = document.querySelector('#probutton4');
const button5 = document.querySelector('#probutton5');
const button6 = document.querySelector('#probutton6');
function click0() {
  if (button0.id == 'project-button') {
    div.innerHTML = `<h2 class="popupname" >${arr[0].name.innerHTML}</h2><ul class="popuplist">${arr[0].technologies.innerHTML}</ul><div class = "popbox">${
      arr[0].image}<div class = "popbox2"><p class = "popuppara">${arr[0].description.innerHTML}</p><div class = "popbox3">${link.innerHTML}${source.innerHTML}</div></div></div>`;
  }
}
function click1() {
  if (button1.id == 'probutton') {
    div.innerHTML = `<h2 class="popupname">${arr[1].name.innerHTML}</h2><ul class="popuplist">${arr[1].technologies.innerHTML}</ul><div class = "popbox">${
      arr[1].image}<div class = "popbox2"><p class = "popuppara">${arr[1].description.innerHTML}</p><div class = "popbox3">${link.innerHTML}${source.innerHTML}</div></div></div>`;
  }
}
function click2() {
  if (button2.id == 'probutton2') {
    div.innerHTML = `<h2 class="popupname">${arr[2].name.innerHTML}</h2><ul class="popuplist">${arr[2].technologies.innerHTML}</ul><div class = "popbox">${
      arr[2].image}<div class = "popbox2"><p class = "popuppara">${arr[2].description.innerHTML}</p><div class = "popbox3">${link.innerHTML}${source.innerHTML}</div></div></div>`;
  }
}
function click3() {
  if (button3.id == 'probutton3') {
    div.innerHTML = `<h2 class="popupname">${arr[3].name.innerHTML}</h2><ul class="popuplist">${arr[3].technologies.innerHTML}</ul><div class = "popbox">${
      arr[3].image}<div class = "popbox2"><p class = "popuppara">${arr[3].description.innerHTML}</p><div class = "popbox3">${link.innerHTML}${source.innerHTML}</div></div></div>`;
  }
}
function click4() {
  if (button4.id == 'probutton4') {
    div.innerHTML = `<h2 class="popupname">${arr[4].name.innerHTML}</h2><ul class="popuplist">${arr[4].technologies.innerHTML}</ul><div class = "popbox">${
      arr[4].image}<div class = "popbox2"><p class = "popuppara">${arr[4].description.innerHTML}</p><div class = "popbox3">${link.innerHTML}${source.innerHTML}</div></div></div>`;
  }
}
function click5() {
  if (button5.id == 'probutton5') {
    div.innerHTML = `<h2 class="popupname">${arr[5].name.innerHTML}</h2><ul class="popuplist">${arr[5].technologies.innerHTML}</ul><div class = "popbox">${
      arr[5].image}<div class = "popbox2"><p class = "popuppara">${arr[5].description.innerHTML}</p><div class = "popbox3">${link.innerHTML}${source.innerHTML}</div></div></div>`;
  }
}
function click6() {
  if (button6.id == 'probutton6') {
    div.innerHTML = `<h2 class="popupname">${arr[6].name.innerHTML}</h2><ul class="popuplist">${arr[6].technologies.innerHTML}</ul><div class = "popbox">${
      arr[6].image}<div class = "popbox2"><p class = "popuppara">${arr[6].description.innerHTML}</p><div class = "popbox3">${link.innerHTML}${source.innerHTML}</div></div></div>`;
  }
}

button0.addEventListener('click', click0);
button1.addEventListener('click', click1);
button2.addEventListener('click', click2);
button3.addEventListener('click', click3);
button4.addEventListener('click', click4);
button5.addEventListener('click', click5);
button6.addEventListener('click', click6);
