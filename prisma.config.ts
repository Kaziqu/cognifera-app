import { defineConfig, env } from 'prisma/config'
import 'dotenv/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: env('DATABASE_URL'),
  },
})
if(!process.env.DATABASE_URL){
  throw new Error("DATABASE_URL is not defined in environment variables");
}