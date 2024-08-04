import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store/store";
import { signIn } from "../app/store/auth/auth.thunk";
import { useEffect } from "react";
import { UserData } from "../app/lib/type/TypePrivatRouter";

const Landing = () => {
  const { isAuth, role } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const user = () => {
    const userData: UserData = {
      token: "asd",
      email: "asdf",
      role: "USER",
      firstName: "qwer",
      lastName: "qwerty",
    };

    dispatch(signIn({ userData, navigate }));
  };
  const admin = () => {
    const userData: UserData = {
      token: "asd",
      email: "asdf",
      role: "ADMIN",
      firstName: "qwer",
      lastName: "qwerty",
    };

    dispatch(signIn({ userData, navigate }));
  };

  useEffect(() => {
    if (isAuth) {
      if (role === "USER") {
        navigate("/user");
      } else if (role === "ADMIN") {
        navigate("/admin");
      }
    }
  }, [isAuth, role, navigate]);

  return (
    <div>
      <h1>Landing</h1>
      <button onClick={user}>USER</button>
      <button onClick={admin}>ADMIN</button>

      <Outlet />
    </div>
  );
};

export default Landing;
