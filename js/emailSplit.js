let email = "ariacrypto78@gmail.com";
let collection = email.split("@"); //[ariacrypto78,gmail.com]

let username = collection[0];

let domain = collection[1].split(".")[0];

let topLevelDomain = collection[1].split(".")[1]



document.write(topLevelDomain);