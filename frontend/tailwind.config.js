module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3EC4FF",
          secondary: "#000D83",
          accent: "#F8FBFE",
          neutral: "#E4F3FD",
          "base-100": "#ffffff",
        },
      },
     
    ],
  },
 plugins: [require("daisyui")],
}
