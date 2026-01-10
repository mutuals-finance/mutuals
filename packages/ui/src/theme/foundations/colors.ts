/** extend additional color here */
const extendedColors = {
  brand: {
    50: { value: "#F0F8FA" },
    100: { value: "#E0F2F7" },
    200: { value: "#C1E5EF" },
    300: { value: "#8DCDE3" },
    400: { value: "#5DB5D7" },
    500: { value: "#3D9DC9" },
    600: { value: "#2B7FB5" },
    700: { value: "#226599" },
    800: { value: "#1A4D73" },
    900: { value: "#123652" },
    950: { value: "#0C263B" },
  },
};

/** override chakra colors here */
const overridenChakraColors = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
