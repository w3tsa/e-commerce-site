import { useContext } from "react";

// routing
import { Outlet, Link } from "react-router-dom";

// local imports
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/User";
import { signOutUser } from "../../utils/firebase/firebase";

// style import
import "./Navigation.scss";

const Navigation = () => {
  const { currentUser, seCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    seCurrentUser(null);
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrwnLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
