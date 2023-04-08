import { GlobalLoading } from '@cads-ui/core';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoadingScreen from './components/LoadingScreen';
import Page from './components/Page';
import InitWrapper from './components/config/InitWrapper';
import ThemeConfig from './components/config/ThemeConfig';
import ServerErrorPage from './components/feedback/ServerErrorPage';
import store from './libs/redux/store';
import router from './routes/router';

// -----------------------------
function App() {
  return (
    <ThemeConfig>
      <Provider store={store}>
        <RecoilRoot>
          <ErrorBoundary FallbackComponent={ServerErrorPage}>
            <GlobalLoading colors={['#0066cf', '#019bfd', '#44befc']} />
            <InitWrapper>
              <Page>
                <Suspense fallback={<LoadingScreen />}>
                  <RouterProvider router={router} fallbackElement={<LoadingScreen />} />
                </Suspense>
              </Page>
            </InitWrapper>
          </ErrorBoundary>
        </RecoilRoot>
      </Provider>
    </ThemeConfig>
  );
}

export default App;
