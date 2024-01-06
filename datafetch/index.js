console.log("another customer approaching")


fetch("https://randomuser.me/api/?results=1")
    .then(response => response.json())
    .then(data => console.log(data))

console.log("our valued customer,please give a moment while i gets some information back from the records book")