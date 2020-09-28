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
    
    

    const newElement = document.createElement('li')
    newElement.innerText = userNameElement.value + ' ' + userAgeElement.value 
    usersList.append(newElement)
}





initApp()