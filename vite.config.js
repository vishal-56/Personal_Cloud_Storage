import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const cherryPickedKeys = [
  "REACT_APP_FIREBASE_API_KEY",
  "REACT_APP_FIREBASE_APP_ID",
  "REACT_APP_FIREBASE_AUTH_DOMAIN",
  "REACT_APP_FIREBASE_MEASUREMENT_ID",
  "REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
  "REACT_APP_FIREBASE_PROJECT_ID",
  "REACT_APP_FIREBASE_STORAGE_BUCKET"
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  cherryPickedKeys.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [react()],
  }
})// Commit on 2024-01-08T17:20:00
// Commit on 2024-02-14T12:43:00
// Commit on 2024-03-22T10:25:00
// Commit on 2024-04-28T12:32:00
// Commit on 2024-06-04T10:03:00
// Commit on 2024-07-11T16:16:00
// Commit on 2024-08-17T14:40:00
// Commit on 2024-09-23T11:49:00
