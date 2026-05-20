export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'matrix-black': '#000000',
        'matrix-dark': '#0a0a0a',
        'matrix-card': '#0d0d0d',
        'matrix-green': '#00FF41',
        'matrix-green-dark': '#00cc33',
        'matrix-gray': '#e0e0e0',
        'matrix-muted': '#888888'
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        fira: ['Fira Code', 'monospace']
      }
    }
  },
  plugins: []
}
