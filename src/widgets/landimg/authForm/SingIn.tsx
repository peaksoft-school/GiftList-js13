import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../../shared/UI/input/Input";
import { Button } from "../../../shared/UI/button/Button";
import { Box, styled } from "@mui/material";
import Checkbox from "../../../shared/UI/chekbox/Checkbox";
import {
  authSingIn,
  googleAuthFirbase,
} from "../../../app/store/authSlice/authThunk";
import { AppDispatch } from "../../../app/store/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../app/config/firebase";

interface SignUpFormData {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [eyeChange, setEyeChange] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormData>();

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    const resultAction = await dispatch(
      authSingIn({ newDate: data, navigate })
    );

    if (authSingIn.fulfilled.match(resultAction)) {
      reset();
    }
  };

  const handleEye = () => {
    setEyeChange((e) => !e);
  };

  const authGoogleWithSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((data) => {
        if (data.user) {
          data.user.getIdToken().then((token) => {
            dispatch(googleAuthFirbase({ tokenId: token, navigate }));
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Header>
        <h4 style={{ fontSize: "28px" }}>Вход</h4>

        <StyledButton onClick={() => navigate("/")}>
          <img
            style={{ width: "28px" }}
            src="src/assets/icon/closeForm.svg"
            alt="Закрыть форму"
          />
        </StyledButton>
      </Header>

      <Box sx={{ marginBottom: "32px" }}>
        <Input
          type="email"
          placeholder="Email"
          autoComplete="email"
          helperText={errors.email?.message}
          error={!!errors.email}
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Некорректный формат email",
            },
          })}
        />

        <Input
          placeholder="Введите пароль"
          type={eyeChange ? "password" : "text"}
          helperText={errors.password?.message}
          icon={
            eyeChange
              ? "src/assets/icon/eyeSlash.svg"
              : "src/assets/icon/eye.svg"
          }
          onClickEye={handleEye}
          autoComplete="new-password"
          error={!!errors.password}
          {...register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 8,
              message: "Пароль должен содержать минимум 8 символов",
            },
          })}
        />

        <Checkbox label="Подписаться на рассылку" />
      </Box>

      <FooterConteiner>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ marginBottom: "20px" }}
        >
          Войти
        </Button>

        <Link to="/forgotPassword" style={{ marginBottom: "20px" }}>
          Забыли пароль?
        </Link>

        <p>или</p>

        <GoogleButton
          type="button"
          variant="outlined"
          size="large"
          onClick={authGoogleWithSignUp}
        >
          <GoogleIconContainer>
            <GoogleIcon src="src/assets/icon/google.svg" />
          </GoogleIconContainer>
          Продолжить с Google
        </GoogleButton>

        <p>
          Нет аккаунта? <Link to="/singUp">Зарегистрироваться</Link>
        </p>
      </FooterConteiner>
    </StyledForm>
  );
};

export default SignIn;

const StyledForm = styled("form")(() => ({
  width: "546px",
  margin: "20px auto",
  boxShadow: "1px 1px 5px 1px rgba(0, 0, 0, 0.15)",
  padding: " 24px 32px",
  borderRadius: "10px",
}));

const Header = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "32px",
}));

const StyledButton = styled(Button)(() => ({
  width: "30px",
  height: "30px",
  padding: "0",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "white",
  },
  "&:active": {
    backgroundColor: "white",
  },
  "&": {
    minWidth: "30px",
  },
}));

const FooterConteiner = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const GoogleButton = styled(Button)(() => ({
  border: "none",
  backgroundColor: "#f1f0f0",
  margin: "20px 0 40px 0",
  "&:hover": {
    backgroundColor: "#f1f0f0",
    color: "black",
    border: "none",
  },
  "&:active": {
    backgroundColor: "#f1f0f0",
  },
}));

const GoogleIconContainer = styled(Box)(() => ({
  height: "28px",
  marginRight: "20px",
}));

const GoogleIcon = styled("img")(() => ({
  width: "28px",
  borderRadius: "50%",
}));
