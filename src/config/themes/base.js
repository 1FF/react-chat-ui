export const light = {
  colors: {
    lumina: '#f0f2f5',
    whisper: '#ffffff',
    seraph: '#21bb5a',
    ember: '#cacadb',
    zephyr: {
      100: 'rgb(43, 49, 57)',
      200: 'rgba(43, 49, 57,0.1)',
      600: 'rgba(43, 49, 57,0.6)',
      800: 'rgba(43, 49, 57,0.8)',
    },
    enigma: '#ffae19',
    glaze: '#21bb5a',
    glazeText: '#151226',
    glazeBg: '#ffffff',
    sigma: '#0f0e1e',
    zeta: '#0f0e1e',
    status: '#21bb5a',
    loader: '#f6f8fa',
    dots: '#21bb5a',
    neon: '#019aff',
    'pale-dots': '#cacadb',
    'iota-dots': '#21bb5a',
    overlay: 'rgba(15, 14, 30, 0.2)',
    beta: '#f6f8fa',
  },
};

export const dark = {
  colors: {
    lumina: '#252239',
    whisper: '#151226',
    seraph: '#f53373',
    ember: '#cacadb',
    zephyr: {
      100: '#ffffff',
      200: 'rgba(255, 255, 255,0.1)',
      600: 'rgba(255, 255, 255,0.6)',
      800: 'rgba(255, 255, 255,0.8)',
    },
    enigma: '#ffae19',
    glaze: '#b3bac6',
    glazeText: '#151226',
    glazeBg: '#b3bac6',
    sigma: '#0f0e1e',
    zeta: '#ffffff',
    status: '#21bb5a',
    loader: '#252239',
    dots: '#f53374',
    neon: '#019aff',
    'pale-dots': '#ffffff',
    'iota-dots': '#21bb5a',
    overlay: 'rgba(15, 14, 30, 0.9)',
    beta: '#252239'
  },
};

export const boxShadow = {
  'light-card': '0 12px 24px 0 rgba(43, 49, 57, 0.06), 0 4px 8px 0 rgba(43, 55, 70, 0.04)',
  'light-loading-dots': '-24px 0 rgba(201, 201, 201, 0.5), 24px 0 rgba(201, 201, 201, 0.5)',

  'dark-card': '0 12px 24px 0 rgba(0, 0, 0, 0.12), 0 4px 8px 0 rgba(0, 0, 0, 0.1)',
  'dark-loading-dots': '-24px 0 rgba(255, 255, 255, 0.5), 24px 0 rgba(255, 255, 255, 0.5)',
};

export const colors = {
  light: light.colors,
  dark: dark.colors,
};

export default { light, dark };
