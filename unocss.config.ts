import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  theme: {
    breakpoints: {
      xs: 0,
      sm: '544px',
      md: '768px',
      lg: '1012px',
      xl: '1280px',
      xxl: '1440px',
      xxxl: '1921px',
    },
    colors: {
      veryCool: '#0000ff',
    },
  },
  rules: [
    [/^text-(.*)$/, ([, c], { theme }) => {
      if (theme.colors[c])
        return { color: theme.colors[c] }
    }],
  ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        mono: ['Fira Code', 'Fira Mono:400,700'],
        sans: [
          {
            name: 'Nunito Sans',
            weights: ['400', '500', '600', '700'],
          },
          {
            name: 'Nunito',
            weights: ['400', '500', '600', '700'],
          },
          {
            name: 'Open Sans',
            weights: ['400', '500', '600', '700'],
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
})
