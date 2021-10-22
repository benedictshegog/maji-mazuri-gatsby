import Prismic from "prismic-javascript";

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
export const apiEndpoint = "https://maji-mazuri-gatsby.cdn.prismic.io/api/v2";

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
const accessToken =
  "MC5YZlVZV2hFQUFDQUFCRXBn.77-9e--_vXBrfDDvv70h77-977-977-977-977-977-977-9cw5FJghi77-9V--_ve-_vWLvv73vv713VUM";

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === "page") return `/page/${doc.uid}`;
  return "/";
};

// Client method to query documents from the Prismic repo
export const client = Prismic.client(apiEndpoint, { accessToken });
