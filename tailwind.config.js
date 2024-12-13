const withMT = require("@material-tailwind/react/utils/withMT");
const { space } = require("postcss/lib/list");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      antonio: ["Antonio"],
      montserrat: ["Montserrat"],
      spaceMono: ["Space Mono"]
    },
    Text: {
      fontHover: "#e73c37"
    }
  },
  plugins: [],
});