// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [...compat.extends("next/core-web-vitals")];
// module.exports = {
//   parser: '@typescript-eslint/parser', // Use a valid parser name
// };
// module.exports = {
//   reactStrictMode: true,
// };
// export default eslintConfig;


const { dirname } = require("path");
const { fileURLToPath } = require("url");
const { FlatCompat } = require("@eslint/eslintrc");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Getting the ESLint config
const eslintConfig = [...compat.extends("next/core-web-vitals")];

// Combine with next.js config
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  eslintConfig,
};

module.exports = nextConfig;

