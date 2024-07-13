import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "../../shader/UI/button/Button";

export const Main = () => {
  const stats = [
    {
      value: "100 k+",
      label: "Пользователей",
    },
    {
      value: "10 k +",
      label: "Размещенных подарков",
    },
    {
      value: "15 k +",
      label: "Подаренных подарков",
    },
    {
      value: "9 k +",
      label: "Реализованной благотворительной помощи",
    },
  ];

  const features = [
    {
      icon: "src/assets/icon/Dogood.svg",
      title: "Дари то, что необходимо",
      points: [
        "Находи своих близких",
        "Просматривай их списки желаний",
        "Узнавай о ближайших мероприятиях",
      ],
    },
    {
      icon: "src/assets/icon/like.svg",
      title: "Удобство в использовании",
      points: [
        "Создавай неограниченное количество желаний",
        "Добавляй подарки, которые ты действительно хочешь",
        "Делись своими желаниями с другими",
      ],
    },
    {
      icon: "src/assets/icon/love.svg",
      title: "Твори добро",
      points: [
        "Дари благотворительные подарки",
        "Делись своими вещами",
        "Помогай другим приобрести необходимое",
      ],
    },
  ];

  return (
    <Container sx={{ maxWidth: 1440 }}>
      <StatsContainer>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <StatTitle>{stat.value}</StatTitle>
            <StatP>{stat.label}</StatP>
          </StatCard>
        ))}
      </StatsContainer>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <StyledIcon src={feature.icon} alt={feature.title} />
            <h6>{feature.title}</h6>
            <ul>
              {feature.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </FeatureCard>
        ))}
      </FeaturesContainer>
      <MainButton variant="text">Зарегистрироваться</MainButton>
    </Container>
  );
};

const StatsContainer = styled("div")({
  width: "1170px",
  display: "flex",
  justifyContent: "space-around",
  padding: "50px 0",
  backgroundColor: "#ffffff",
  textAlign: "center",
});

const StatCard = styled("div")({
  "& p:first-of-type": {
    fontSize: "54px",
    fontWeight: "bold",
    color: "#5E239D",
  },
  "& p:last-of-type": {
    fontSize: "18px",
    color: "#333",
  },
});

const StatTitle = styled("p")({
  fontSize: "54px",
  lineHeight: "54px",
  fontWeight: "500",
  color: "rgba(134, 57, 181, 1)",
  paddingBottom: "20px",
});

const StatP = styled("p")({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "16.8px",
  color: "rgba(53, 58, 90, 1)",
});

const FeaturesContainer = styled("div")({
  width: "1170px",
  display: "flex",
  justifyContent: "space-around",
  padding: "50px 0",
});

const FeatureCard = styled("div")({
  position: "relative",
  textAlign: "left",
  "& h6": {
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "30px",
    color: "rgba(2, 2, 2, 1)",
  },
  "& ul": {
    padding: 0,
    paddingTop: "20px",
  },
  "& li": {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "23px",
    color: "rgba(2, 2, 2, 1)",
  },
});

const StyledIcon = styled("img")({
  width: "24px",
  height: "24px",
  border: "1px solid rgba(11, 163, 96, 1)",
  borderRadius: "50%",
  padding: "2px",
  position: "absolute",
  left: "-45px",
  top: "2px",
});

const MainButton = styled(Button)({
  backgroundColor: "rgba(134, 57, 181, 1)",
  display: "flex",
  justifyContent: "center",
  margin: "0 auto",
  width: "291px",
  height: "39px",
  borderRadius: "6px",
  padding: "10px 24px 10px 24px",
  color: "rgba(255, 255, 255, 1)",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "19px",
});
