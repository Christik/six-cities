import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/user/api-actions';

function HeaderSignOut() {
  const dispatch = useAppDispatch();

  return (
    <li className="header__nav-item">
      <a
        className="header__nav-link"
        href="#signout"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(logoutAction());
        }}
      >
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  );
}

export default HeaderSignOut;
