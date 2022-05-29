// language, name, description, updated_at, stargazers_count
const path_attr = [
  ["fill-rule", "evenodd"],
  [
    "d",
    "M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z",
  ],
];
const svg_attr = [
  ["aria-label", "star"],
  ["role", "img"],
  ["height", "16"],
  ["viewBox", "0 0 16 16"],
  ["version", "1.1"],
  ["width", "16"],
  ["data-view-component", "true"],
  ["class", "octicon octicon-star positionIcons"],
];
const discr = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sunt quibusdam illo fugit commodi quis, ipsam voluptates facilis iusto corporis optio numquam? Aperiam earum cum distinctio, consectetur mollitia a dolorem.`;

var user = `ayush8010720467`;
// const url = `https://api.github.com/users/${user}/repos`;
function getReps(user) {
  const url = getUrl(user);
  let getGithubRepos = fetch(url);
  getGithubRepos
    .then((resp) => resp.json())
    .then((resp) => {
      resp.forEach((elem) => {
        getOneRepoElem(elem);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
function getUrl(user) {
  return `https://api.github.com/users/${user}/repos`;
}
getReps(user);
function getOneRepoElem(elem) {
  const divRepo = createElem("div", [["class", "repo"]]);
  const repoHeading = createElem(
    "h3",
    [["class", "repoHeading"]],
    (innerText = elem.name)
  );
  const descP = createElem(
    "p",
    [["class", "repoDesc color-fg-muted"]],
    (innerText = elem.description)
  );
  const hr = createElem("hr", [[]]);
  const footer = getFooterElem({
    language: elem.language,
    stargazers_count: elem.stargazers_count,
    updated_at: elem.updated_at,
  });
  divRepo.append(repoHeading, descP, footer, hr);
  document.getElementById("container").append(divRepo);
}
function getFooterElem({ language, stargazers_count, updated_at }) {
  let path = createElem("path", path_attr, "");
  let svg = createElem("svg", svg_attr, "");
  svg.append(path);
  let footerDiv = createElem("div", [["class", "repo-footer color-fg-muted"]]);
  let langSpan = createElem("span", [["class", "lang-span"]]);
  let circleSpan = createElem("span", [
    ["class", "repo-language-color positionIcons"],
  ]);
  let langText = createElem(
    "span",
    [["class", "lang"]],
    (innerText = language)
  );
  langSpan.append(circleSpan, langText);
  let starzSpan = createElem("span", [
    ["style", "margin-right: 16px !important"],
  ]);
  starzSpan.append(svg, createElem("span", [[]], `${stargazers_count}`));
  let updatedAt = createElem("span", [["class", "updatedDesc"]], updated_at);
  footerDiv.append(langSpan, starzSpan, updatedAt);
  return footerDiv;
}
function createElem(tag, attributes, innerText = "", innerHtml) {
  let elem = document.createElement(tag);
  for (let i = 0; i < attributes.length; i++) {
    elem.setAttribute(attributes[i][0], attributes[i][1]);
  }
  elem.innerText = innerText;
  if (innerHtml) {
    elem.innerHTML = innerHtml;
  }
  return elem;
}
