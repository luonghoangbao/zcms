import { AppProps } from 'next/app';
import { FC } from 'react';

import '../styles/theme.scss';
import '../styles/common.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default App;