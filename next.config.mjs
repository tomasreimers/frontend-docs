import path from "path";
import nextra from 'nextra'

const __dirname = import.meta.dirname || "";

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  search: {
    codeblocks: false
  }
})

export default withNextra({
  output: "export",
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
})
