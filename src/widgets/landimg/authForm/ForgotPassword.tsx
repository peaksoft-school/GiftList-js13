import { FC } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../../../shared/UI/input/Input";
import { Button } from "../../../shared/UI/button/Button";
import { Box, styled, Typography } from "@mui/material";
import { authForgotPassword } from "../../../app/store/authSlice/authThunk";
import { AppDispatch } from "../../../app/store/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface TypeEmail {
  email: string;
}

const ForgotPassword: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeEmail>();

  const onSubmit: SubmitHandler<TypeEmail> = async (data) => {
    const resultAction = await dispatch(
      authForgotPassword({ email: data.email })
    );

    if (authForgotPassword.fulfilled.match(resultAction)) {
      reset();
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Header>
        <h4 style={{ fontSize: "28px" }}>Забыли пароль?</h4>

        <StyledButton onClick={() => navigate(-1)}>
          <img
            style={{ width: "28px" }}
            src="src/assets/icon/closeForm.svg"
            alt="Закрыть форму"
          />
        </StyledButton>
      </Header>

      <Typography
        sx={{ color: "grey", fontSize: "20px", marginBottom: "20px" }}
      >
        Вам будет отправлена ссылка для сброса пароля
      </Typography>

      <Box sx={{ marginBottom: "32px" }}>
        <Input
          type="email"
          placeholder="Введите ваш Email"
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
      </Box>

      <FooterConteiner>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ marginBottom: "20px" }}
        >
          Отправить
        </Button>
        <StyledCancelButton
          type="reset"
          variant="outlined"
          size="large"
          onClick={() => navigate(-1)}
        >
          Отмена
        </StyledCancelButton>
      </FooterConteiner>
    </StyledForm>
  );
};

export default ForgotPassword;

const StyledForm = styled("form")(() => ({
  width: "546px",
  margin: "50px auto",
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

const StyledCancelButton = styled(Button)(() => ({
  marginBottom: "20px",
  border: "none",
  color: "grey",
  "&:hover": {
    backgroundColor: "white",
    color: "grey",
    border: "none",
  },
  "&:active": {
    backgroundColor: "white",
    color: "grey",
    border: "none",
  },
}));
