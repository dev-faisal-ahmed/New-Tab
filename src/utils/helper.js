export function getLocalLinks() {
  let allLinks = window.localStorage.getItem("links");
  allLinks = JSON.parse(allLinks);
  return allLinks || [];
}

export function setLocalLinks(links) {
  window.localStorage.setItem("links", JSON.stringify(links));
}

export function getFaviconUrl(url) {
  return `https://www.google.com/s2/favicons?domain=${url}&sz=64`;
}
