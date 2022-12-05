import { AuthStatus } from '../../const';

import { useAppSelector } from '../../hooks';

import { getHeaderNavigationAvailability } from '../../store/app/selectors';
import { getAuthStatus } from '../../store/user/selectors';

import HeaderProfile from '../header-profile/header-profile';
import HeaderSignIn from '../header-sign-in/header-sign-in';
import HeaderSignOut from '../header-sign-out/header-sign-out';

function HeaderNav() {
  const hasHeaderNavigation = useAppSelector(getHeaderNavigationAvailability);
  const authStatus = useAppSelector(getAuthStatus);
  const isUserLogged = (authStatus === AuthStatus.Auth);

  if (!hasHeaderNavigation) {
    return null;
  }

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">

        {
          isUserLogged ?
            <>
              <HeaderProfile />
              <HeaderSignOut />
            </>

            : <HeaderSignIn />
        }

      </ul>
    </nav>
  );
}

export default HeaderNav;
