declare module "react-syntax-highlighter" {
  export {
    Light as PrismLight,
    Prism as Prism,
    SyntaxHighlighter,
  } from "react-syntax-highlighter/dist/cjs/prism-light";
  export { PrismLight as default } from "react-syntax-highlighter/dist/cjs/prism-light";
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism" {
  export { default as dark } from "react-syntax-highlighter/dist/cjs/styles/prism/dark";
}
