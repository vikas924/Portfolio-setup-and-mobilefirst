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

const arr = [{
  name: 'My Recent Works',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  image: '<img  id="yoga-img" class="yoga-img" src="./Work-section-img/frame.png" alt="yoga">',
  technologies: ['css', 'html', 'bootstrap', 'ruby'],
  link: link.innerHTML,
  source: source.innerHTML,
},
{
  name: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  image: '<img class="yoga-im" src="./Work-section-img/backgroundli.png" alt="project1">',
  technologies: ['html', 'bootstrap', 'ruby'],
  link: link.innerHTML,
  source: source.innerHTML,
},
{
  name: 'Data Dashboard Healthcare',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  image: '<img class="yoga-im" src="./desktopimg/backgrounds/card2.png" alt="project1">',
  technologies: ['html', 'bootstrap', 'ruby'],
  link: link.innerHTML,
  source: source.innerHTML,
},
{
  name: 'Website Protfolio',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  image: '<img class="yoga-im" src="./desktopimg/backgrounds/card3.png" alt="project1">',
  technologies: ['html', 'bootstrap', 'ruby'],
  link: link.innerHTML,
  source: source.innerHTML,
},
{
  name: 'Profesional Art Printing Data More',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  image: '<img class="yoga-im" src="./desktopimg/backgrounds/card4.png" alt="project1">',
  technologies: ['html', 'bootstrap', 'ruby'],
  link: link.innerHTML,
  source: source.innerHTML,
},
{
  name: 'Data Dashboard Healthcare',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  image: '<img class="yoga-im" src="./desktopimg/backgrounds/card5.png" alt="project1">',
  technologies: ['html', 'bootstrap', 'ruby'],
  link: link.innerHTML,
  source: source.innerHTML,
},
{
  name: 'Website Protfolio',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  image: '<img class="yoga-im" src="./desktopimg/backgrounds/card6.png" alt="project1">',
  technologies: ['html', 'bootstrap', 'ruby'],
  link: link.innerHTML,
  source: source.innerHTML,
},
];

function works(html) {
  const template = document.createElement('template');

  template.innerHTML = html.trim();

  return template.content;
}

for (let i = 0; i < arr.length; i += 1) {
  if (i === 0) {
    const card1 = works(`<div class="title">
  <h2 id ="heading">My Recent Works</h2>
  <div class="empty"></div>
  </div>
  </div>
  <div class="work-grid">
  <div class="desk-work">
  <a id="yoga" href="#">${arr[i].image}</a>
  <div class="desk-yoga">
  <h3 id="heading3" class="heading3">${arr[i].name}</h3>
  <p class="framepara">${arr[i].description}</p>
  <div id="tags">
      <ul class="tagsul">
          <li class="tags1" id="tag1">${arr[i].technologies[0]}</li>
          <li class="tags1" id="tag2">${arr[i].technologies[1]}</li>
          <li class="tags1" id="tag3">${arr[i].technologies[2]}</li>
          <li class="tags1" id="tag4">${arr[i].technologies[3]}</li>
      </ul>
      <button id="project-button" class= "project-button">See Project</button>
  </div>
  </div>
</div>
<div class = "frame">
<div class = "cards"></div>
</div>
`);
    document.body.querySelector('#portfolio').appendChild(card1);
  } else if (i > 0) {
    const cards = works(`<div class="card">
    <div class="hov1">
    <h2 class="cardhead">${arr[i].name}</h2>
    <p class="cardpara">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
    <ul class="tagsul">
    <li class="tags" id="tag1">${arr[i].technologies[0]}</li>
    <li class="tags" id="tag2">${arr[i].technologies[1]}</li>
    <li class="tags" id="tag3">${arr[i].technologies[2]}</li>
    </ul>
    </div>
    <div class="hov2">
    <button class="project-button">See Project</button>
    </div>
    </div>`);
    document.body.querySelector('.cards').appendChild(cards);
  }
}
const ull = document.querySelectorAll('.tagsul');
ull[0].id = 'tagsul0';
ull[1].id = 'tagsul1';
ull[2].id = 'tagsul2';
ull[3].id = 'tagsul3';
ull[4].id = 'tagsul4';
ull[5].id = 'tagsul5';
ull[6].id = 'tagsul6';

const butto = document.querySelectorAll('.project-button');
butto[0].id = 'project-button';
butto[1].id = 'probutton';
butto[2].id = 'probutton2';
butto[3].id = 'probutton3';
butto[4].id = 'probutton4';
butto[5].id = 'probutton5';
butto[6].id = 'probutton6';

const cardo = document.querySelectorAll('.card');
cardo[0].id = 'procard';
cardo[1].id = 'procard1';
cardo[2].id = 'procard2';
cardo[3].id = 'procard3';
cardo[4].id = 'procard4';
cardo[5].id = 'procard5';

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
  if (button0.id === 'project-button') {
    div.innerHTML = `<h2 class="popupname" >${arr[0].name}</h2><ul class="popuplist">${document.querySelector('#tagsul0').innerHTML}</ul><div class = "popbox">${
      arr[0].image}<div class = "popbox2"><p class = "popuppara">${arr[0].description}</p><div class = "popbox3">${link.innerHTML}${source.innerHTML}</div></div></div>`;
  }
}
function click1() {
  if (button1.id === 'probutton') {
    div.innerHTML = `<h2 class="popupname">${arr[1].name}</h2><ul class="popuplist">${document.querySelector('#tagsul1').innerHTML}</ul><div class = "popbox">${
      arr[1].image}<div class = "popbox2"><p class = "popuppara">${arr[1].description}</p><div class = "popbox3">${link.innerHTML}${source.innerHTML}</div></div></div>`;
  }
}
function click2() {
  if (button2.id === 'probutton2') {
    div.innerHTML = `<h2 class="popupname">${arr[2].name}</h2><ul class="popuplist">${document.querySelector('#tagsul2').innerHTML}</ul><div class = "popbox">${
      arr[2].image}<div class = "popbox2"><p class = "popuppara">${arr[2].description}</p><div class = "popbox3">${link.innerHTML}${source.innerHTML}</div></div></div>`;
  }
}
function click3() {
  if (button3.id === 'probutton3') {
    div.innerHTML = `<h2 class="popupname">${arr[3].name}</h2><ul class="popuplist">${document.querySelector('#tagsul3').innerHTML}</ul><div class = "popbox">${
      arr[3].image}<div class = "popbox2"><p class = "popuppara">${arr[3].description}</p><div class = "popbox3">${link.innerHTML}${source.innerHTML}</div></div></div>`;
  }
}
function click4() {
  if (button4.id === 'probutton4') {
    div.innerHTML = `<h2 class="popupname">${arr[4].name}</h2><ul class="popuplist">${document.querySelector('#tagsul4').innerHTML}</ul><div class = "popbox">${
      arr[4].image}<div class = "popbox2"><p class = "popuppara">${arr[4].description}</p><div class = "popbox3">${link.innerHTML}${source.innerHTML}</div></div></div>`;
  }
}
function click5() {
  if (button5.id === 'probutton5') {
    div.innerHTML = `<h2 class="popupname">${arr[5].name}</h2><ul class="popuplist">${document.querySelector('#tagsul5').innerHTML}</ul><div class = "popbox">${
      arr[5].image}<div class = "popbox2"><p class = "popuppara">${arr[5].description}</p><div class = "popbox3">${link.innerHTML}${source.innerHTML}</div></div></div>`;
  }
}
function click6() {
  if (button6.id === 'probutton6') {
    div.innerHTML = `<h2 class="popupname">${arr[6].name}</h2><ul class="popuplist">${document.querySelector('#tagsul6').innerHTML}</ul><div class = "popbox">${
      arr[6].image}<div class = "popbox2"><p class = "popuppara">${arr[6].description}</p><div class = "popbox3">${link.innerHTML}${source.innerHTML}</div></div></div>`;
  }
}

console.log(arr[0].technologies);

button0.addEventListener('click', click0);
button1.addEventListener('click', click1);
button2.addEventListener('click', click2);
button3.addEventListener('click', click3);
button4.addEventListener('click', click4);
button5.addEventListener('click', click5);
button6.addEventListener('click', click6);

function tog() {
  const togbutton = document.querySelector('.project-button');
  const showpop = document.querySelector('#content');
  if (togbutton.style.display !== 'none') {
    showpop.style.display = 'block';
    togbutton.style.display = 'none';
    const list = document.querySelectorAll('.tags');
    for (let i = 0; i < list.length; i += 1) {
      list[i].classList.remove('tags');
      list[i].classList.add('poptag');
    }
  } else if (togbutton.style.display === 'none') {
    showpop.style.display = 'none';
    togbutton.style.display = 'block';
    const list1 = document.querySelectorAll('.poptag');
    for (let i = 0; i < list1.length; i += 1) {
      list1[i].classList.add('tags');
      list1[i].classList.remove('poptag');
    }
  }
}

const showpopup = document.querySelectorAll('.project-button');
for (let i = 0; i < showpopup.length; i += 1) {
  showpopup[i].addEventListener('click', tog);
}

const closepopup = document.querySelector('#closepopup');
closepopup.addEventListener('click', tog);
