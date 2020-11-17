function fetch_pokemon() {
  let options = {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  return fetch("http://localhost:8000/api/pokemon", options)
    .then((response) => response.status)
    .catch((error) => console.log(error.message));
}

export default fetch_pokemon();
