import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../../shared/UI/input/Input";
import { Button } from "../../../shared/UI/button/Button";
import { Box, styled } from "@mui/material";
import { authSignUp, BASE_URL } from "../../../app/store/authSlice/authThunk";
import { AppDispatch } from "../../../app/store/store";
import Checkbox from "../../../shared/UI/chekbox/Checkbox";

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const SignUp: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<SignUpFormData>();

  const [eyeChange, setEyeChange] = useState(true);
  const [repeatEyeChange, setRepeatEyeChange] = useState(true);
  const handleEye = () => {
    setEyeChange((e) => !e);
  };

  const repeathandleEye = () => {
    setRepeatEyeChange((e) => !e);
  };

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    const resultAction = await dispatch(authSignUp({ newDate: data }));

    if (authSignUp.fulfilled.match(resultAction)) {
      reset();
      // navigate("/success");
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      window.location.href = `${BASE_URL}/auth/google`;
    } catch (error) {
      console.error("Не удалось зарегистрироваться через Google:", error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Header>
        <h4 style={{ fontSize: "28px" }}>Регистрация</h4>

        <StyledButton>
          <img
            style={{ width: "28px" }}
            src="src/assets/icon/closeForm.svg"
            alt="Закрыть форму"
          />
        </StyledButton>
      </Header>

      <Box sx={{ marginBottom: "32px" }}>
        <Input
          placeholder="Имя"
          helperText={errors.firstName?.message}
          error={!!errors.firstName}
          {...register("firstName", { required: "Имя обязательно" })}
        />

        <Input
          placeholder="Фамилия"
          helperText={errors.lastName?.message}
          error={!!errors.lastName}
          {...register("lastName", { required: "Фамилия обязательна" })}
        />

        <Input
          type="email"
          placeholder="Email"
          helperText={errors.email?.message}
          error={!!errors.email}
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Некорректный формат email",
            },
          })}
          autoComplete="email"
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
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Пароль должен содержать минимум одну заглавную букву, одну цифру и один специальный символ",
            },
          })}
        />

        <Input
          placeholder="Повторите пароль"
          type={repeatEyeChange ? "password" : "text"}
          helperText={errors.repeatPassword?.message}
          icon={
            repeatEyeChange
              ? "src/assets/icon/eyeSlash.svg"
              : "src/assets/icon/eye.svg"
          }
          onClickEye={repeathandleEye}
          autoComplete="new-password"
          error={!!errors.repeatPassword}
          {...register("repeatPassword", {
            required: "Повторите пароль",
            validate: (value) =>
              value === watch("password") || "Пароли не совпадают",
          })}
        />

        <Checkbox label="Подписаться на рассылку" />
      </Box>

      <FooterContainer>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ marginBottom: "20px" }}
        >
          Создать аккаунт
        </Button>

        <p>или</p>

        <GoogleButton
          type="button"
          variant="outlined"
          size="large"
          onClick={handleGoogleSignUp}
        >
          <GoogleIconContainer>
            <GoogleIcon src="src/assets/icon/google.svg" alt="Google Icon" />
          </GoogleIconContainer>
          Зарегистрироваться с Google
        </GoogleButton>

        <p>
          У вас уже есть аккаунт? <a href="/signIn">Войти</a>
        </p>
      </FooterContainer>
    </StyledForm>
  );
};

export default SignUp;

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

const FooterContainer = styled(Box)(() => ({
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
  backgroundColor: "black",
  borderRadius: "50%",
  width: "28px",
  height: "28px",
  marginRight: "20px",
}));

const GoogleIcon = styled("img")(() => ({
  backgroundColor: "black",
  width: "14px",
  borderRadius: "50%",
}));
