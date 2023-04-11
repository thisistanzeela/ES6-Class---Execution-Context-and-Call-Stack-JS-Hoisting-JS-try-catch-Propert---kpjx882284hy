class API {
  #secure;

  constructor(url, method = "GET") {
    this.url = url;
    this.method = method;

    if (url.startsWith("https")) {
      this.#secure = true;
    } else {
      this.#secure = false;
    }
  }

  isSecure() {
    return this.#secure;
  }

  updateUrl(url) {
    this.url = url;

    if (url.startsWith("https")) {
      this.#secure = true;
    } else {
      this.#secure = false;
    }
  }
}

// const s = new API('http://api.com/api/hello')
// console. log(s.isSecure()) // false

// s.updateUrl('https://api.com/api/hello')
// console. log(s.isSecure()) // true

// console.log(s.url) // https://api. com/api/hello

// console.log(s.method) // GET

// console.log(s.secure) // undefined (because private field)
