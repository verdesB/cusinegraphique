import localFont from 'next/font/local'

export const futura = localFont({
  src: [
    {
      path: './fonts/FuturaLight.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/FuturaMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/FuturaBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-futura' // Pour utiliser en tant que variable CSS
}) 