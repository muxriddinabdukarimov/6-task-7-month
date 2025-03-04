import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	resolve: {
		alias: [
			{find: "@", replacement: "/src/*"},
			{find: "@pages", replacement: "/src/pages/index.jsx"},
			{find: "@modals", replacement: "/src/components/modal/index.jsx"},
			{find: "@modals", replacement: "/src/components/modal/sign-up-modal/index.jsx"},
			{find: "@service", replacement: "/src/service/index.js"},
			{find: "@validation", replacement: "/src/utils/validation.js"},
		]
	}
})
