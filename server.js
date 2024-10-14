import "dotenv/config"; // this line is mandatory when you want to read variables from the '.env' file
const Iname = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;
console.log("I am " + Iname + " wilder in " + city + ", and I love " + language);
