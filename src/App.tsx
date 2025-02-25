import { I18nextProvider, useTranslation } from 'react-i18next'
import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './routerConfig';
import withRoot from './HOC/MuiTheme';

function App() {
  const { i18n } = useTranslation();
  document.getElementsByTagName("html")[0].setAttribute("dir", i18n.dir());

  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider
        router={router}
      />
    </I18nextProvider>
  )
}

const AppWithRoot = withRoot(App);

export default AppWithRoot;