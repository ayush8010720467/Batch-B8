var user = `ayush8010720467`;
// const url = `https://api.github.com/users/${user}/repos`;
function getReps(user) {
  const url = getUrl(user);
  let getGithubRepos = fetch(url);
  getGithubRepos
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });
}
function getUrl(user) {
  return `https://api.github.com/users/${user}/repos`;
}
getReps(user);
function getOneRepoElem() {}
