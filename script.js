const product_list = ["pizza","cookies","eggs","apples","milk","cheese","lettuce",
    "carrots","broccoli","potatoes","crackers","onions","tofu","limes",
    "cucumbers"];
  
  var main = document.querySelector('main');
  
  var div = '<div><p><span>In stock: </span>'
  div += `${product_list} </p>`
  div += '</div>'
  main.innerHTML = div;
  
  
  function findItem(){
    var item = prompt('Search for a product:');
    if(product_list.includes(item)){
      main.innerHTML = `Yes, we have <strong>${item}</strong>. It's #${product_list.indexOf(item)} on the list!`;
    }
  }
  
  
  