import { Manrope } from 'next/font/google';
import localFont from 'next/font/local';

const switzer = localFont({
  src: [
    {
      path: '../font/Switzer/Switzer-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-ExtraLightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../font/Switzer/Switzer-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../font/Switzer/Switzer-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
});

const manrope = Manrope({
  subsets: ['latin'],
});

export const fontSizes = {};
export const fonts = {
  body: switzer.style.fontFamily,
  heading: manrope.style.fontFamily,
};
