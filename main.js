// class User {
//     fullName;
//     mail;
//     age;
//     gender;
//     isStudentAcount;

//     constructor(fullName,mail,age,gender,isStudentAcount){
//         this.fullName = fullName;
//         this.mail = mail;
//         this.age = age;
//         this.gender = gender;
//         this.isStudentAcount = isStudentAcount;
//     }
//     login(){
//         console.log(this.fullName , 'your in' )
//         return this
//     }
//     logout(){
//         console.log(this.fullName , 'your out' )
//         return this
//     }
//     status(){
//         if(this.isStudentAcount){
//             console.log('your account has been updated to student account')
//             return this
//         }
//     }
// }

// const userOne = new User ("Batel Haiylo", "bh@gmail.com", 24,"femail",true)
// console.log(userOne)
// userOne.login().status().logout()

// class Bettauser extends User {
//     backgroundTemplate(){
//         if(this.gender == "male"){
//             document.body.style.background = "black"
//             return this
//         }
//         document.body.style.background = "red"
//         return this
//     }    
// }

// const userTwo = new Bettauser ("Dona Barbara", "dn@gmail.com", 35,"female",false)
// console.log(userTwo)
// userTwo.backgroundTemplate()
// const userThree = new Bettauser ("Don Jhoan", "dj@gmail.com", 47,"male",false)
// console.log(userThree)
// userThree.backgroundTemplate()

class Admin {
    constructor(numOfAccounts,photo){
        this.numOfAccounts = numOfAccounts
        this.photo = photo
    }
    adminPic(){
        document.body.innerHTML += `<img src="${this.photo}" alt="hot stuf">`
    }
    deleteSubscribers(array,subscriberAccount){
        array.splice(array.indexOf(subscriberAccount),1)
    }
}

function User (name,age,mail,gender,country,isStudentAcount){
    this.name = name
    this.age = age
    this.mail = mail
    this.gender = gender
    this.country = country
    this.online = false
    this.isStudentAcount = false;
}
User.prototype.login = function(){
    this.online = true
    console.log(this.mail , 'is loged in' )
    return this
}
User.prototype.logout = function(){
    this.online = false
    console.log(this.mail , 'is loged out' )
}
User.prototype.studentAccount = function(){
    this.isStudentAcount = true
    this.online = true
    console.log(`hello ${this.name} welcome to your student account`)
    document.body.style.backgroundColor = 'yellow'
    return this
}

function Subscriber(...args){
    User.apply(this,args)
    this.numOfChanels = 3
}
Subscriber.prototype = Object.create(User.prototype);
Subscriber.prototype.unsubscribe = function(channelsArray,chanel){
    channelsArray.splice(channelsArray.indexOf(chanel),1)
    this.numOfChanels = channelsArray.length -1
}



const admin1 = new Admin(3,'https://www.freepik.com/vectors/admin')
const user1 = new User('Batel Haiylo',24,'bh@mycompanyname.com','femal','Israel')
console.log(user1.studentAccount())
console.log(user1.login())
const firstSubscriber = new Subscriber('Maarich Srofa',15,'srofa@meta.com','none binary','LA',3)
console.log(firstSubscriber)
console.log(firstSubscriber.unsubscribe(["canel1","viva","chanel3"],"viva"))
console.log(admin1.deleteSubscribers([admin1,user1,firstSubscriber],firstSubscriber))