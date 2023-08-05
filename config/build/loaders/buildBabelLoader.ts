import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'

interface buildBabelLoaderProps {
  isDev: boolean
  isTsx?: boolean
}

export function buildBabelLoader (props: buildBabelLoaderProps) {
  const {
    isDev,
    isTsx,
  } = props

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
          ['@babel/plugin-transform-typescript', { isTsx }],
          '@babel/plugin-transform-runtime',
          isTsx && [
            babelRemovePropsPlugin,
            {
              props: ['data-testid'],
            },
          ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  }
}
