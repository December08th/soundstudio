import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  // clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  clientId: "734112e0-025d-47fa-b4b0-77d3ea74bf6c",
  // Get this from tina.io
  // token: process.env.TINA_TOKEN,  
  token: "ec5be0ed5f2e43f4816f19d685d5c07d51e63635",

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "home_page",
        label: "Home page",
        path: "content/home",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Intro",
            isBody: true,
          },
          {
            type: "object",
            name: "services",
            label: "Services",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Heading",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subheading",
              },
              {
                type: "rich-text",
                name: "text",
                label: "Text",
              },
            ]
          }
        ],
      },
    ],
  },
});
