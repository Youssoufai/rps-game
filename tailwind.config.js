/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        scissorsGradientLeft: "hsl(39, 89%, 49%)",
        scissorsGradientRight: "hsl(40, 84%, 53%)",
        paperGradientLeft: " hsl(230, 89%, 62%)",
        paperGradientRight: "hsl(230, 89%, 65%)",
        rockGradient: "hsl(349, 71%, 52%)",
        rockGradientLeft: "hsl(349, 70%, 56%)",
        lizardGradientLeft: " hsl(261, 73%, 60%)",
        lizardGradientRight: " hsl(261, 72%, 63%)",
        cyanLeft: "hsl(189, 59%, 53%)",
        cyanRight: "hsl(189, 58%, 57%)",
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: " hsl(217, 16%, 45%)",
        radialGradient: "hsl(214, 47%, 23%)",
        radialGradientRight: "hsl(237, 49%, 15%)"
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
        '22': '22px',
      },
      borderRadius: {
        '5': "50%"
      }
    },
  },
  plugins: [],
}

