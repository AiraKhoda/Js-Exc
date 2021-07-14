//Class Ex.
let statement = "JavaScript Is an interpreting programming language.";

const map = {
    JavaScript: "python",
    programming: ""
};

statement = statement.replace(/(?:JavaScript|programming)/gi, query => map[query]);

console.log(statement);




// Another Ex.
let str = "I have Bitcoin, DogeCoin, and Ethereum.";
const mapObj = {
    Bitcoin: "dog",
    DogeCoin: "cat",
    Ethereum: "goat"
};
str = str.replace(/(?:Bitcoin|DogeCoin|Ethereum)/gi, matched => mapObj[matched]);
console.log(str);