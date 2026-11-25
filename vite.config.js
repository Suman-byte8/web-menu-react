import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { ICON_NAMES } from './src/lib/icons.js'

/**
 * Fills %MATERIAL_ICON_NAMES% in index.html with the icons the site uses, so
 * Google Fonts serves a tiny subset of Material Symbols instead of all of it.
 * Google requires the names in alphabetical order.
 */
function materialIconSubset() {
  const names = [...new Set(ICON_NAMES)].sort().join(',')
  return {
    name: 'material-icon-subset',
    transformIndexHtml: (html) => html.replaceAll('%MATERIAL_ICON_NAMES%', names),
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), materialIconSubset()],
})
