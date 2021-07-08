// bloque 1
const baseUrl = "https://jsonplaceholder.typicode.com";
// bloque 2
const request = async url => {
  const results = await fetch(url);
  const response = await results.json();
  return response;
};

// bloque 3
const getPosts = async id => {
  const url = `${baseUrl}/psdfsdfsdsts?userId=${id}`;
  return request(url);
};

// bloque 4
const getUser = async id => {
  const url = `${baseUrl}/users/${id}`;
  return request(url);
};

// bloque 5
const userId = 1;

Promise.all([getUser(userId), getPosts(userId)])
  .then(resp => {
    console.log("(1) resp asincrona: ", resp);
  })
  .catch(err => console.log("err", err))
  .finally(console.log("(2) Este mensaje aparece siempre"));
console.log("(3) Dsp del finally");
