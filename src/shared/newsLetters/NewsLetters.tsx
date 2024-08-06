import { Box, Typography } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";
import styled from "styled-components";
import { Button } from "../UI/button/Button";
import cardImage from "../../assets/foto/Rectangle 8.png";

const NewsLetters = () => {
	return (
		<StyledContainer>
			<StyleddNewLetter>
				<StyledLetters>Рассылка</StyledLetters>
        
				<StyledMailButton variant="contained">
					<img src="src/assets/icon/mail.svg" />
					<StyledTextMail>Отправить рассылку</StyledTextMail>
				</StyledMailButton>
			</StyleddNewLetter>
			<StyledCards>
				<StyledCard>
					<StyledImage src={cardImage} />
					<StyledText>Тема рассылки</StyledText>
					<StyledDate>12.04.22</StyledDate>
				</StyledCard>
				<StyledCard>
					<StyledImage src={cardImage} />
					<StyledText>Тема рассылки</StyledText>
					<StyledDate>12.04.22</StyledDate>
				</StyledCard>
				<StyledCard>
					<StyledImage src={cardImage} />
					<StyledText>Тема рассылки</StyledText>
					<StyledDate>12.04.22</StyledDate>
				</StyledCard>
			</StyledCards>
		</StyledContainer>
	);
};

export default NewsLetters;

const StyledLetters = muiStyled(Typography)({
	fontSize: "20px",
	fontWeight: "500",
	textTransform: "none",
});

const StyledContainer = styled(Box)(() => ({
	backgroundColor: "#f7f8fa",
	padding: "20px",
}));

const StyleddNewLetter = styled(Box)(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}));

const StyledMailButton = styled(Button)(() => ({
	display: "flex",
	gap: "5px",
}));

const StyledTextMail = styled(Typography)(() => ({
	color: "#FFFFFF",
	fontSize: "16px",
	fontWeight: "600",
	textTransform: "none",
}));

const StyledCards = styled(Box)(() => ({
	display: "flex",
	gap: "20px",
	marginTop: "20px",
}));

const StyledCard = styled(Box)(() => ({
	width: "33%",
	padding: "20px",
	borderRadius: "10px",
	backgroundColor: "#FFFFFF",
	boxShadow: "0px 4px 8px rgba(217, 217, 217, 0.218)",
	textAlign: "center",
}));

const StyledImage = styled("img")(() => ({
	width: "100%",
	borderRadius: "10px",
}));

const StyledText = styled(Typography)(() => ({
	fontSize: "16px",
	fontWeight: "600",
	marginTop: "16px",
	textTransform: "none",
}));

const StyledDate = styled(Typography)(() => ({
	fontSize: "14px",
	color: "#777",
	marginTop: "5px",
}));
