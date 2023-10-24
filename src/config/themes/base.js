// --font-weight-normal: 400; // will be replaced with tw--font-normal
// --font-weight-bold: 600; // will be replaced with tw--font-semibold

export const light = {
  colors: {
    lumina: '#f0f2f5',
    whisper: '#ffffff', // tw--white
    seraph: '#21bb5a',
    ember: '#cacadb',
    zephyr: '#2b3139',
    enigma: '#ffae19',
    glaze: '#21bb5a', // tw--light-seraph
    glazeText: '#151226',
    glazeBg: '#ffffff', // tw--white
    sigma: '#0f0e1e', // (0.2 opacity)
    zeta: '#0f0e1e', // tw--light-sigma (0.6 opacity)

    status: '#21bb5a', // tw--light-seraph
    loader: '#f6f8fa',
    dots: '#21bb5a', // tw--light-seraph
    neon: '#019aff',
    // loading-dots: -24px 0 rgba(202, 202, 219, 0.6), 24px 0 rgba(202, 202, 219, 0.6); // tw--light-ember (0.6 opacity)
    'pale-dots': '#cacadb', // tw--light-ember (0.6 opacity)
    'iota-dots': '#21bb5a', // tw--light-seraph

    // text-color: '#0f0e1e'; will be replaced with // tw--light-sigma
    'pay-bg': '#ffffff', // tw--white
    'pay-color': '#0f0e1e', // tw--light-sigma

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
    zephyr: '#ffffff', // tw--white
    enigma: '#ffae19',
    glaze: '#b3bac6',
    glazeText: '#151226', // glaze-text
    glazeBg: '#b3bac6',
    sigma: '#0f0e1e', // (0.2 opacity)
    zeta: '#ffffff', // tw--white (0.6 opacity)

    status: '#21bb5a',
    loader: '#252239', // was loader-bg // tw--dark-lumina
    dots: '#f53374',
    neon: '#019aff',

    // --loading-dots: -24px 0 rgba(255, 255, 255, 0.5), 24px 0 rgba(255, 255, 255, 0.5); // tw--white (0.5 opacity)
    'pale-dots': '#ffffff', // (0.5 opacity)
    'iota-dots': '#21bb5a', // same as status
    // 'text-color': '#ffffff', // will be replaced by tw--text-white
    // 'pay-bg': '#', // missing
    // 'pay-color': '#', // missing

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
