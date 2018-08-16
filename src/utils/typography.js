import Typography from "typography";

const typography = new Typography({
    googleFonts: [
      {
        name: 'Open Sans',
        styles: ['300', '400', '700'],
      },
    ],
    bodyFontFamily: ['Open Sans', 'cursive'],
    headerFontFamily: ['Open Sans', 'sans-serif'],
  })

export default typography