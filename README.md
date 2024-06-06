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
