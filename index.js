const title = document.getElementById('title')
const nameField = document.getElementById('nameField')
const signInBtn = document.getElementById('signinBtn')
const singUpBtn = document.getElementById('singupBtn')
const numberField = document.getElementById('numberField')

singUpBtn.onclick = function(){
  title.innerHTML = "Sing Up"
  title.style.color = "green"
  signInBtn.style.backgroundColor = "green"
  nameField.style.display = "block"
  numberField.style.display = "block"
}
signInBtn.onclick = function(){
  title.innerHTML = "Login"
  title.style.color = "blue"
  signInBtn.style.backgroundColor = "blue"
  nameField.style.display = "none"
  numberField.style.display = "none"
}
