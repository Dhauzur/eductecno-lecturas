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
  const url = `${baseUrl}/posts?userId=${id}`;
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
    console.log("resp", resp);
  })
  .catch(err => console.log("err", err));
