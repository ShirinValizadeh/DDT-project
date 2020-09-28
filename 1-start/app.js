const {checkData , joiner } = require('./helper')


const initApp = ()=>{
    const addUserBtn = document.querySelector('#addBtn')
    addUserBtn.addEventListener('click' , ()=>{
        AddUserList()
    })

}


const AddUserList = () =>{
    const userNameElement = document.querySelector('#userNameInp') 
    const userAgeElement = document.querySelector('#userAgeInp') 
    const usersList = document.querySelector('#userList')
    
    
if (checkData(userNameElement.value , userAgeElement.value)) {
        const newElement = document.createElement('li')
    newElement.innerText =joiner( userNameElement.value , userAgeElement.value )
    usersList.append(newElement)
}else{
    alert('error')
}

}





initApp()