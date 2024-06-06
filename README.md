```
  <body>
    <main></main>
    <script src="js/for.js"></script>
  </body>
```

```
const main = document.querySelector('main');
let html = '';

for(let i = 0; i < 11; i ++){
  html += `<div>${i}</div>`;
}

main.innerHTML = html;
```

---

```
let html = '';
let randomRGB;

const main = document.querySelector('main');

for(let i = 0; i < 10; i++){
  randomRGB = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  html += `<div style="background-color: ${randomRGB}">${i + 1}</div>`
}

main.innerHTML = html;
```

```
let html = '';
let randomRGB;

const main = document.querySelector('main');
const color = function(){return Math.floor(Math.random() * 256)};

for(let i = 0; i < 10; i++){
  randomRGB = `rgb(${color()}, ${color()}, ${color()})`;
  html += `<div style="background-color: ${randomRGB}">${i + 1}</div>`
}

main.innerHTML = html;
```
