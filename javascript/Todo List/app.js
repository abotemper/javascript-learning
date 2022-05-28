const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
       <span>${todo}</span>
       <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    
    e.preventDefault();
    const todo = addForm.add.value.trim();//remove any spaces before the string

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();//clear the input when type submit
    }//if the length of todo is 0 it is a false
    
});
//delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// search, and match, key event
console.log(list.children);
console.log( Array.from(list.children));

const filterTodos = (term) => {
    //Array.form can convert a collection to a array
    
    Array.from(list.children)
       //include method 判断 内容是否存在特定子字符串，算空格，不忽略大小写，
       .filter(todo => !todo.textContent.toLowerCase.includes(term))
       .forEach(todo => todo.classList.add('filtered'));
       //if li dont match the term then we give it a class content "filtered"
       //combine with css, if it's class list has a "filtered",its display mode will be none
       //so if li dont mat the term ,we will not see that , it looks like we filter it
    
    Array.from(list.children)
       .filter(todo => todo.textContent.toLowerCase.includes(term))
       .forEach(todo => todo.classList.remove('filtered'));
       //if li match the term ,than we will remove the "filtered" form its class list
       //it means ,in the css, that its display mode is not none, so we can see it again

};

search.addEventListener('keyup', () =>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);

});
