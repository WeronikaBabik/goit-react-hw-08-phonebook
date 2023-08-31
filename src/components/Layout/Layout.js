import { Navigation } from 'components/Navigation/Navigation';
import css from './Layout.module.css';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <main className={css.container}>
      <Navigation />
      <Suspense
        fallback={
          <div>
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="three-dots-loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </main>
  );
};
