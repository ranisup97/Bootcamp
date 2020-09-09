let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    hobby: "gaming",
    address: {
        street: "Kulas Light", suite: "Apt. 556",
        city: "Gwenborough", zipcode: "92998-3874"
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

//replace value spread operator
let newdata = {
    ...data,
    name: "Rani Suprianti",
    email: "ranisup97@gmail.com",
    hobby: "hiking"
}
console.log(newdata)

//desctructuring
let{
    id,
    name,
    username,
    email,
    hobby,
    address: {street, suite, city, zipcode},
    phone,
    website
}= data

console.log(street) //print data street
console.log(city) //print data city