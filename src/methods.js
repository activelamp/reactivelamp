class CommonMethods {
  static baseFetch(backend, port, path) {
    return fetch(`${backend}:${port}${path}?_format=hal_json`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }
    }).then((response) => response.json());
  }
}

export default CommonMethods;