import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
        port:5173,
        proxy:{
          '/api':{
            target:'https://restcountries.com/v3.1/',
            changeOrigin:true,
            rewrite:(path)=>path.replace(/^\/api/,''),
          }
        }
      }
})
// export default defineConfig({
//   plugins: [react()],
//   server:{
//     port:3001,
//     proxy:{
//       '/api':{
//         target:'http://localhost:8001',
//         changeOrigin:true,
//         rewrite:(path)=>path.replace(/^\/api/,''),
//       }
//     }
//   }
// })