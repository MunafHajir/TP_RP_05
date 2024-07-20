// class, new, this, constructor

// Student Management

// const arunStudent = {
//     rollNO: "",
//     name: "",
//     address: "",
//     gender: "",
//     phoneNo: "",
//     course: "",
//     year: "",
//     pendingFees: "",
//     attendance: "",

//     updatePendingFess: () => {

//     },

//     updateAttendance : () => {

//     }

// }

// techpaathshala
// 1. student -> name, email, phoneno, course, address, updateAddress, user_id, password, updatePassword, createAccount

// 

// it is a blueprint / template of the object , pascal case naming convention
class Student {

    // special method which is called by default
    constructor (name, email, phoneno, course, address, username, password) {
        //  current object pointing -< this
       this.name = name
       this.email = email
       this.phoneno = phoneno
       this.course = course
       this.address = address
       this.username = username
       this.password = password
    }

    // class methods
    createAccount () {
        console.log("Create Account")
    }

    updatePassword (password) {
        console.log("Update Password")
        this.password = password
    }

    updateAddress () {
        console.log("Update Address")

    }

}

// object/instance creation
const sandeshStudent = new Student("Sandesh", "sandesh@gmail.com", 12121212, "react", "mulund", "Sr123", "sandesh@11111");
const smitaStudent = new Student("Smita", "smita@gmail.com", 1212121, "react", "thane", "smita222", 123444444);



console.log("Name ===> ", sandeshStudent.name);
console.log("Name ===> ", smitaStudent.name);

// sandeshStudent.createAccount();
// sandeshStudent.updateAddress();


console.log("Sandesh Password ===> ", sandeshStudent.password);
console.log("Smita Password ===> ", smitaStudent.password);


sandeshStudent.updatePassword("!212121");
smitaStudent.updatePassword("12121arae")

console.log("Sandesh Password ===> ", sandeshStudent.password);
console.log("Smita Password ===> ", smitaStudent.password);


// Task :- 
// BankAccount Class