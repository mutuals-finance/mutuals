/** extend additional color here */
const extendedColors = {
  primary: {
    50: { value: "#B8C7FF" },
    100: { value: "#A3B7FF" },
    200: { value: "#7A98FF" },
    300: { value: "#5278FF" },
    400: { value: "#2958FF" },
    500: { value: "#0038FF" },
    600: { value: "#002CC7" },
    700: { value: "#001F8F" },
    800: { value: "#001357" },
    900: { value: "#00071F" },
  },
  brand: {
    DEFAULT: { value: "#151B5E" },
    50: { value: "#B6BBEF" },
    100: { value: "#A6ABEB" },
    200: { value: "#848CE4" },
    300: { value: "#636DDC" },
    400: { value: "#424ED5" },
    500: { value: "#2B38C2" },
    600: { value: "#242EA1" },
    700: { value: "#1C257F" },
    800: { value: "#151B5E" },
    900: { value: "#0B0E30" },
    950: { value: "#060719" },
  },
  accent: {
    DEFAULT: { value: "#E2562C" },
    50: { value: "#FDF4F1" },
    100: { value: "#FBE6DF" },
    200: { value: "#F6C9BB" },
    300: { value: "#F1AC98" },
    400: { value: "#EC8F74" },
    500: { value: "#E77350" },
    600: { value: "#E2562C" },
    700: { value: "#BC3F1A" },
    800: { value: "#8B2F13" },
    900: { value: "#591E0C" },
    950: { value: "#411609" },
  },
};

/** override chakra colors here */
const overridenChakraColors = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
