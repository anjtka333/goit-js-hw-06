

let countItemsUl = document.querySelectorAll('.item');
console.log('Number of categories: ' + countItemsUl.length);
document.querySelectorAll('.item').forEach(item => {
        // console.log(item.querySelectorAll("ul"));
        console.log('Category ' + item.querySelector('h2').textContent);
        console.log('Elements ' + item.querySelectorAll('li').length);
});

