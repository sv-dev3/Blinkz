module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      colors: {
        "primary-orange": "#FE6B00",
        "secondary-orange": "#F3EFE9",
        "primary-black": "#24201f",
      },
      fontFamily: {
        outfitThin: ["outfit-thin"], // Replace with your font name
        outfitLight: ["outfit-light"], // Replace with your font name
        outfitBold: ["outfit-bold"], // Replace with your font name
        outfitBlack: ["outfit-Black"], // Replace with your font name
        outfitSemiBold: ["outfit-semiBold"], // Replace with your font name
        outfitRegular: ["outfit-regular"], // Replace with your font name
        outfitMedium: ["outfit-medium"], // Replace with your font name
      },
    },

  },
  plugins: [],
}