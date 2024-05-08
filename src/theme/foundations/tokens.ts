const semanticTokens = {
  colors: {
    bg: {
      1: {
        default: 'white',
        _dark: 'gray.900',
      },
      2: {
        default: 'gray.100',
        _dark: 'gray.800',
      },
      3: {
        default: 'gray.200',
        _dark: 'gray.700',
      },
    },
    color: {
      1: {
        default: 'gray.900',
        _dark: 'white',
      },
      2: {
        default: 'gray.600',
        _dark: 'gray.300',
      },
      3: {
        default: 'gray.400',
        _dark: 'gray.500',
      },
    },
    border: {
      1: {
        default: 'gray.200',
        _dark: 'gray.600',
      },
    },
    alpha: {
      1: {
        default: 'blackAlpha.800',
        _dark: 'whiteAlpha.800',
      },
      2: {
        default: 'blackAlpha.600',
        _dark: 'whiteAlpha.600',
      },
      3: {
        default: 'blackAlpha.400',
        _dark: 'whiteAlpha.400',
      },
    },
  },
};

export default semanticTokens;
