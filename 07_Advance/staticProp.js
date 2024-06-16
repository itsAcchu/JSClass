class user{
    constructor(userName){
        this.userName = userName
    }
    logme(){
        console.log(`userName: ${this.userName}`);
    }
    static createId(){  // static its stops the method access
        return '123'
    }
}
let x = new user('Acchu')
// console.log(x.createId());
class admin extends user{
    constructor(userName,email){
        super(userName)
        this.email = email
    }
    mail(){
        console.log(`mail is:${this.email}`);
    }
}
let y = new admin('acchureddy','hello@mail.com')
console.log(x instanceof user); 
