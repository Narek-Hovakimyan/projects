const addButton = document.getElementById('add-button');
const addFormInput = document.getElementById('add-form-input')
const ulList = document.querySelector('#book-list > ul')
const hideBox = document.getElementById('hide')
const searchInput = document.getElementById('searchBar')
addButton.addEventListener('click', (event) => {
    if (addFormInput.value) {
        const li = document.createElement('li')
        const bookName = document.createElement('span')
        bookName.innerText = addFormInput.value;
        bookName.classList.add('name');
        const deletBtn = document.createElement('span');
        deletBtn.innerText = 'delete'
        deletBtn.classList.add('delete')
        li.appendChild(bookName)
        li.appendChild(deletBtn)
        ulList.append(li)
        document.getElementById('add-form-input').value = ''
        // event.target.parentElement.children
        // console.log( event.target.parentElement.children.getElementById('add-form-input'));  
    }
})
ulList.addEventListener('click', (event) => {
    if (event.target.className == 'delete') {
        const li = event.target.parentElement
        ulList.removeChild(li)
    }
    if (event.target.className == 'name') {
        event.target.innerHTML = '<del>' + event.target.innerText + "</del>"
    } else if (event.target.parentElement.className == 'name') {
        event.target.parentElement.innerHTML = event.target.innerHTML;
    }
})
hideBox.addEventListener('input', () => {
    if (hideBox.checked) {
        ulList.style.display = 'none'
    } else {
        ulList.style.display = 'block'
    }
})
// searchInput.addEventListener('keyup', () => {
//     const inputValue = searchInput.value.toLowerCase();
//     const ulList = document.getElementsByTagName('li')
//     console.log(ulList);
//     for (let i = 0; i < ulList.length; i++) {
//         const li = ulList[i];
//         const nameValue = li.firstElementChild.innerText.toLowerCase();
//         if (nameValue.startsWith(inputValue)) {
//             li.style.display = 'block'
//         } else {
//             li.style.display = 'none'
//         }
//     }
// })
searchInput.addEventListener('keyup', ()=>{
    const inputValue = searchInput.value.toLowerCase();
    const ulList = document.getElementsByTagName('li')
    let ul = [...ulList]
    ul.forEach(li => {
        const nameValue = li.firstElementChild.innerText.toLowerCase();
        if (nameValue.startsWith(inputValue)) {
            li.style.display = 'block'
        }
        else {
            li.style.display = 'none'
        }
    });
})

