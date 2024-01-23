/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "app-green": "#67E2AE",
      "app-violet": "#8471F2",
      "dark-violet": "#635fc7",
      "app-sky": "#49C4E5",
      "app-orange": "#E5A449",
      "app-blue": "#2A3FDB",
      pink: "#20212C",
      accentColor: "#645FC6",

      "workspace-bg-dark": "#20212C",
      "workspace-bg-light": "#F4F7FD",
      "primary-color-light": "#FFFFFF",
      "primary-color-dark": "#2B2C37",
      "highlight-color": "#A8A4FF",
      "text-grey": "#828fa3",
    },
  },
  plugins: [],
};
