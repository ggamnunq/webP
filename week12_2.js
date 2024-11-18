const names = ['alice', 'bob', 'charlie'];
const uppercasedNames = names.map(

    name => name.toUpperCase()

)
console.log("  [다 대문자]    : " + uppercasedNames);

const capitalStartNames = names.map(

    name => name[0].toUpperCase() + name.substring(1)

)
console.log("[첫 글자 대문자] : " + capitalStartNames);