export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'iravu-indigo': 'var(--iravu-indigo)',
        'sandal-ash': 'var(--sandal-ash)',
        'ilai-ivory': 'var(--ilai-ivory)',
        'kumkum-vermilion': 'var(--kumkum-vermilion)',
        'manjal-gold': 'var(--manjal-gold)',
        'mayil-teal': 'var(--mayil-teal)'
      },
      fontFamily: {
        catamaran: ['Catamaran', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
        inter: ['Inter', 'sans-serif'],
        'noto-tamil': ['Noto Sans Tamil', 'sans-serif'],
        'plex-mono': ['IBM Plex Mono', 'monospace']
      }
    }
  },
  plugins: []
}
