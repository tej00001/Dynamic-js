function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const mobile = event.target.mobile.value;
    //localStorage.setItem('name', name);
    //localStorage.setItem('email', email);

    const obj = {
        name,
        email,
        mobile
    }

    axios.post("https://crudcrud.com/api/c99bb03eb08f4ba9a8010a3a62f65359/AppointmentData",obj)
        .then((response) => {
            console.log(response)
        })
 
        .catch((err) => {
            console.log(err)
        })
    //localStorage.setItem(obj.email, JSON.stringify(obj));

    showNewUserOnScreen(obj);
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/c99bb03eb08f4ba9a8010a3a62f65359/AppointmentData")
    .then((response) => {
        console.log(response)

        for (var i=0; i<response.data.length; i++) {
            showNewUserOnScreen(response.data[i])
        }
    })

    .catch((error) => {
        console.log(error)
    })
})

function showNewUserOnScreen (user) {

    document.getElementById('email').value='';
    document.getElementById('name').value='';
    document.getElementById('mobile').value='';

    
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user._id}> ${user.name} - ${user.email} - ${user.mobile}
        <button onclick=deleteUser('${user._id}')> Delete User </button> 
        <button onclick=editUser('${user.email}','${user.name}','${user.mobile}','${user._id}')> Edit User </button>
        </li>`

    parentNode.innerHTML = parentNode.innerHTML+childHTML;
}

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/c99bb03eb08f4ba9a8010a3a62f65359/AppointmentData/${userId}`)
        .then((response) => {
            removeUserFromScreen(userId)
        })
        .catch((err) => {
            console.log(err)
        })

    // console.log(emailId)
    // localStorage.removeItem(emailId);
    // removeUserFromScreen(emailId);

}   

function removeUserFromScreen(userId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(userId);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
    
}

function editUser(emailId, name, mobile,userId) {
    document.getElementById('email').value=emailId;
    document.getElementById('name').value=name;
    document.getElementById('mobile').value=mobile;

    deleteUser(userId)

}