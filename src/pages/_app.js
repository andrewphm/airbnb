import '../styles/globals.css';

import store from '../redux/store';
import { Provider } from 'react-redux';

import ProgressBar from '@badrap/bar-of-progress';

import Router from 'next/router';

const progress = new ProgressBar({
  size: 3,
  color: '#FE595E',
  className: 'z-50',
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
