import {Link} from 'react-router-dom';

function NotFoundScreen() {
  return (
    <div className="page page--gray page--not-found">
      <main className="page__main page__main--not-found">
        <div className="container">
          <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <p>Page Not Found</p>
            <Link to="/">Home Page</Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
