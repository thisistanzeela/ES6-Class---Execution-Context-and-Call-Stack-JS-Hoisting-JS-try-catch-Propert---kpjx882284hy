const s = new API('http://api.com/api/hello')
console.log(s.isSecure()) 

s.updateUrl('https://api.com/api/hello')
console.log(s.isSecure()) 

console.log(s.url) 

console.log(s.method) 

console.log(s.secure) 

module.exports = { API }
