import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../../shared/UI/input/Input";
import { Button } from "../../../shared/UI/button/Button";
import { Box, styled } from "@mui/material";
import {
  authForgotPassword,
  authSignUp,
} from "../../../app/store/authSlice/authThunk";
import { AppDispatch } from "../../../app/store/store";

interface SignUpFormData {
  password: string;
  repeatPassword: string;
}

const ForgotPassword: FC = () => {
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
    const resultAction = await dispatch(authForgotPassword({ newDate: data }));

    if (authSignUp.fulfilled.match(resultAction)) {
      reset();
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Header>
        <h4 style={{ fontSize: "28px" }}>Смена пароля</h4>

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
          placeholder="Введите новый пароль"
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
      </Box>

      <FooterContainer>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ marginBottom: "20px" }}
        >
          Подтвердить
        </Button>
      </FooterContainer>
    </StyledForm>
  );
};

export default ForgotPassword;

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
