import { defineConfig } from "umi"
import routes from "./routes"

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  layout: {},
  routes,
  mock: false
})
