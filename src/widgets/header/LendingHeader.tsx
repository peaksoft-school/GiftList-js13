import f from "../../assets/icon/f.svg";
import wk from "../../assets/icon/wk.svg";
import instagram from "../../assets/icon/instagram.svg";
import foto1 from "../../assets/foto/lendingHeader1foto.jpg";
import foto2 from "../../assets/foto/lendingHeader2foto.jpg";
import arrow from "../../assets/icon/arrowLending.svg";
import { Button } from "../../shader/UI/button/Button";
import styled from "styled-components";

const LendingHeader = () => {
  return (
    <HeaderContainer>
      <Container>
        <Header>
          <p>О проекте</p>
          <h1>Gift list</h1>
          <p>Благотворительность</p>
        </Header>
        <Main>
          <IconDiv>
            <a href="">
              <Icon src={f} alt="facebook" />
            </a>
            <a href="">
              <Icon src={wk} alt="VK" />
            </a>
            <a href="">
              <Icon src={instagram} alt="Instagram" />
            </a>
          </IconDiv>
          <div>
            <BorImg></BorImg>
            <Img src={foto1} alt="1foto" />
          </div>
          <div>
            <BorImgTwo></BorImgTwo>
            <ImgTwo src={foto2} alt="foto2" />
          </div>
          <ListDiv>
            <p>
              <img
                style={{
                  transform: "rotate(90deg)",
                  padding: "0 30px ",
                }}
                src={arrow}
                alt=""
              />{" "}
              Листайте вниз
            </p>
          </ListDiv>
          <Descript>
            <p>Социальная сеть нового поколения</p>
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
};

export default LendingHeader;

const HeaderContainer = styled.div`
  background-color: #8639b5;
  height: 100vh;
  color: white;
`;
const Container = styled.div`
  width: 78%;
  height: 680px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const Main = styled.main`
  height: 90%;
  position: relative;
`;
const IconDiv = styled.div``;
const Icon = styled.img`
  display: block;
  margin-bottom: 20px;
`;
const BorImg = styled.div`
  border: 2px solid white;
  width: 20%;
  height: 300px;
  border-radius: 0 80px 0 0;
  position: absolute;
  bottom: 35px;
  left: 35px;
`;
const Img = styled.img`
  width: 20%;
  height: 300px;
  border-radius: 0 80px 0 0;
  position: absolute;
  bottom: 0;
  left: 0;
`;
const BorImgTwo = styled.div`
  border: 2px solid white;
  width: 20%;
  height: 300px;
  border-radius: 80px 0 0 0;
  position: absolute;
  top: 0px;
  right: 35px;
`;
const ImgTwo = styled.img`
  width: 20%;
  height: 300px;
  border-radius: 80px 0px 0 0;
  position: absolute;
  top: 35px;
  right: 0;
`;
const ListDiv = styled.div`
  justify-content: space-between;
  transform: rotate(-90deg);
  position: absolute;
  bottom: 65px;
  right: -95px;
`;
const Descript = styled.div`
  width: 45%;
  height: 353px;
  text-align: center;
  font-size: 54px;
  position: absolute;
  top: 30%;
  left: 26%;
`;
const SmalText = styled.p`
  font-size: 18px;
  width: 350px;
  margin: 30px auto;
`;
const ButtonContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`;
