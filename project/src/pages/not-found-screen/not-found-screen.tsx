import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

import Header from '../../components/header/header';

function NotFoundScreen() {
  return (
    <div className="page page--gray page--login">
      <Header hasNavigation={false} />

      <main className="page__main page__main--login">
        <div className="page__login-container container">

          <section className="login">
            <h1 className="login__title">Error 404</h1>
            <p>Page not found</p>
            <Link to={AppRoute.Root}>Home page</Link>
          </section>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#todo">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;