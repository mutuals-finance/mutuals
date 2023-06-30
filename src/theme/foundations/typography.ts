import localFont from '@next/font/local';

const archivo = localFont({
  src: [
    {
      path: '../font/Archivo/Archivo-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-ExtraLightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../font/Archivo/Archivo-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../font/Archivo/Archivo-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
});

export const fontSizes = {};
export const fonts = {
  body: archivo.style.fontFamily,
  heading: archivo.style.fontFamily,
};
