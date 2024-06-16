function setUser(userName){
    this.userName = userName
}


function user(userName,email,password) {
    setUser.call(this,userName)
    this.email = email
    this.password = password
}
let x = new user('Acchu','A@mail.com','123')
console.log(x);