let allUsers = [];

function saveUser() {
  let user ={};
  let fullName = document.getElementById("fullName").value;
  user.name = fullName;
  let age = document.getElementById("age").value;
  user.age = age;
  let phone = document.getElementById("phoneNumber").value;
  user.phoneNumber = phone;
  let email = document.getElementById("email").value;
  user.email = email;
  let city = document.getElementById("city").value;
  user.city = city;
  let postCode = document.getElementById("postCode").value;
  user.post = postCode;
  allUsers.push(user);
  emptyAllFields();
}
function emptyAllFields(){
    document.getElementById("fullName").value ="";
    document.getElementById("age").value ="";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";
    document.getElementById("postCode").value ="";
}
