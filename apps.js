const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const submit = document.querySelector('#btn_submit');
const boollist = document.querySelector('#Book_list');

btn_submit.addEventListener('click', function(n){
   n.preventDefault();
    
    if (title.value == '' && author.value == '' && year.value == ''){
        alert('Plase form fill up');
    }
    else{
        const newRow = document.createElement('tr');
        
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        
        Book_list.appendChild(newRow);
    }
});