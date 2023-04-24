

class API {
  #secure;
  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
    this.#secure = url.startsWith('https');
  }

  isSecure() {
    return this.#secure;
  }

  updateUrl(url) {
    this.url = url;
    this.#secure = url.startsWith('https');
  }
}

module.exports = { API }
// const s = new API('http://api.com/api/hello')
// console.log(s.isSecure()) // false

// s.updateUrl('https://api.com/api/hello')
// console.log(s.isSecure()) // true

// console.log(s.url) // https://api. com/api/hello

// console.log(s.method) // GET

// console.log(s.secure) // undefined (because private field)
