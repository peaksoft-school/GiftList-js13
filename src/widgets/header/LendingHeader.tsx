import facebook from "../../assets/icon/facebook.svg";
import vkontakte from "../../assets/icon/vkontakte.svg";
import instagram from "../../assets/icon/instagram.svg";
import foto1 from "../../assets/foto/lendingHeader1foto.jpg";
import foto2 from "../../assets/foto/lendingHeader2foto.jpg";
import arrow from "../../assets/icon/arrowLending.svg";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Button } from "../../shader/UI/button/Button";

const LendingHeader = () => (
  <HeaderContainer>
    <Container>
      <Header>
        <Typography variant="body1">О проекте</Typography>
        <HeaderName variant="h1">GIFT LIST</HeaderName>
        <HeaderBl variant="body1">Благотворительность</HeaderBl>
      </Header>
      <Main>
        <Box>
          <Icon src={facebook} alt="facebook" />

          <Icon src={vkontakte} alt="VK" />

          <Icon src={instagram} alt="Instagram" />
        </Box>
        <Box>
          <BorImg />
          <Img src={foto1} alt="1foto" />
        </Box>
        <Box>
          <BorImgTwo />
          <ImgTwo src={foto2} alt="foto2" />
        </Box>
        <ListDiv>
          <Typography variant="body1">
            <img
              style={{
                transform: "rotate(90deg)",
                padding: "0 30px",
              }}
              src={arrow}
              alt=""
            />{" "}
            Листайте вниз
          </Typography>
        </ListDiv>
        <Descript>
          <Typography variant="h1">Социальная сеть нового поколения</Typography>
          <SmalText>
            Всегда подскажет, что подарить близким и осуществит твои желания{" "}
          </SmalText>
          <ButtonContainer>
            <Button fullWidth sx={{ color: "white" }}>
              Войти
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ color: "white", borderColor: "white" }}
            >
              Регистрация
            </Button>
          </ButtonContainer>
        </Descript>
      </Main>
    </Container>
  </HeaderContainer>
);

export default LendingHeader;
const HeaderContainer = styled(Box)(() => ({
  paddingTop: "3vh",
  backgroundColor: "#8639b5",
  height: "115vh",
  color: "white",
}));

const Container = styled(Box)(() => ({
  width: "77.5vw",
  height: "68vh",
  margin: "0 auto",
  fontFamily: "initial",
}));

const Header = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  marginBottom: "6vh",
}));
const HeaderName = styled(Typography)(() => ({
  textAlign: "center",
}));
const HeaderBl = styled(Typography)(() => ({
  textAlign: "end",
}));

const Main = styled(Box)(() => ({
  height: "80vh",
  position: "relative",
}));

const Icon = styled("img")(() => ({
  display: "block",
  marginBottom: "20px",
}));

const BorImg = styled(Box)(() => ({
  border: "2px solid white",
  width: "15.6vw",
  height: "41vh",
  borderRadius: "0 5.2vw 0 0",
  position: "absolute",
  bottom: "2.3vw",
  left: "2.3vw",
}));

const Img = styled("img")(() => ({
  width: "15.6vw",
  height: "41vh",
  borderRadius: "0 5.2vw 0 0",
  position: "absolute",
  bottom: "0",
  left: "0",
}));

const BorImgTwo = styled(Box)(() => ({
  border: "2px solid white",
  width: "15.6vw",
  height: "41vh",
  borderRadius: "5.2vw 0 0 0",
  position: "absolute",
  top: "0px",
  right: "2.3vw",
}));

const ImgTwo = styled("img")(() => ({
  width: "15.6vw",
  height: "41vh",
  borderRadius: "5.2vw 0 0 0",
  position: "absolute",
  top: "2.3vw",
  right: "0",
}));

const ListDiv = styled(Box)(() => ({
  justifyContent: "space-between",
  transform: "rotate(-90deg)",
  position: "absolute",
  bottom: "65px",
  right: "-95px",
  cursor: "pointer",
}));

const Descript = styled(Box)(() => ({
  width: "37vw",
  height: "35vw",
  textAlign: "center",
  fontSize: "54px",
  position: "absolute",
  top: "30%",
  left: "26%",
}));

const SmalText = styled(Typography)(() => ({
  fontSize: "1.2vw",
  width: "23vw",
  margin: "30px auto",
}));

const ButtonContainer = styled(Box)(() => ({
  width: "20vw",
  margin: "0 auto",
}));
