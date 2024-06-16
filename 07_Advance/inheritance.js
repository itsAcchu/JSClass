class user{
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`USERNAME IS: ${this.userName}`);
    }
}
class admin extends user{               // instance of user
    constructor(userName,mail,passWord){
        super(userName)
        this.mail = mail
        this.passWord = passWord
    }
    addcourse(){
        console.log(`add a new course: ${this.userName}`);
    }
}
let x = new admin('Acchu','mail@d.com','123')
// console.log(x.logMe())
let neww = new user('reddy')
// neww.logMe();
console.log(x instanceof user);