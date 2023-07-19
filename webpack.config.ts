import type webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import {
  type BuildEnv,
  type BuildMode,
  type BuildPaths,
} from './config/build/types/config'
import * as path from 'path'

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  }

  const mode: BuildMode = env.mode || 'development'
  const port: number = env.port || 3000
  const apiUrl: string = env.apiUrl || 'http://localhost:8000'

  const isDev: boolean = mode === 'development'

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
    project: 'frontend',
  })

  return config
}
