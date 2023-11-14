// const user = {
//     name: "Cristian",
//     ciudad: "Quito",
//     activo: true,
//     address:{
//         calle: "Calle abc",
//         secundaria:  "Calle 123"
//     },
//     edad: 21,
//     friends: ["XD", "A", "Washo"],
//     sendMail(){
//         return `Send mail ${this.friends[0]}`
//     },
//     sendNotification: function(){
//         return `Send notification ${this.friends[2]}`
//     }
// }

// for(const i in user){
//     console.log(`${user[i]}`)
// }

// console.log(user.sendMail())
// console.log(user.sendNotification())

// user.image = "http:/image/profile"
// delete user.friends
// console.log(user)



// user.name
// user.edad
// user.friends
// user.activo
// const{name,edad,friends,activo} = user

// console.log(name,edad,friends,activo)

// SPREAD OPERATOR UNE LOS DATOS
// const user = {
//     name: "Cristian",
//     ciudad: "Quito",
//     activo: true
// }
// const address = {
//     calle: "Calle abc",
//     secundaria:  "Calle 123"
// }

// const {name, ciudad, activo} = user

// const allInformation = {...user,...address}

// console.log(allInformation)

// NOMBRES ABREVIADOS DE PROPIEDADES ES6
const name = "laptop"
const price = 2340

const newProduct = {
    name,
    price
}

console.log(newProduct)

const profileUser = ["Cristian", 21, true, "Quito"]
const skills = ["front", "back"]

// ARRAYS
// push ingresa al último
// unsfhit ingresa al inicio
// pop elimina el último
// shift elimina el primero 

profileUser.shift(skills)

console.log(profileUser)

const findOne = profileUser.find((e)=> e == "Juan")
const findTwo = profileUser.find((e)=> e == "Cristian")

console.log(findOne)
console.log(findTwo)