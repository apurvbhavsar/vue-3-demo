import { reactive } from 'vue'

export function useSite() {
  const appName = reactive(import.meta.env.VITE_APP_NAME)
  return {
    appName
  }
}
