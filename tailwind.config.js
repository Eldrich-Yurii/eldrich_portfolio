const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      antonio: ["Antonio"],
      montserrat: ["Montserrat"]
    },
    Text: {
      fontHover: "#e73c37"
    }
  },
  plugins: [],
});