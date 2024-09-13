import React from "react";
import GroupImage from "../../../assets/foto/charity.svg";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Charity: React.FC = () => {
	return (
		<Container>
			<ImageContainer>
				<ImageBorder>
					<Image src={GroupImage} />
				</ImageBorder>
			</ImageContainer>
			<TextContainer>
				<Title>Благотворительность</Title>
				<Text>
					Найти удачный подарок, который принесёт радость, не всегда простая
					задача. Благодаря нашему сервису у вас есть возможность не только
					обрадовать подарком, но и помочь другим приобрести необходимые им
					вещи. В разделе благотворительность вы можете найти список
					опубликованных вещей, забронировав, вы связываетесь с их обладателем.
				</Text>
			</TextContainer>
		</Container>
	);
};

export default Charity;

const Container = styled(Box)(() => ({
	display: "flex",
	alignItems: "center",
	backgroundColor: "#8639b5",
	color: "white",
	padding: "40px",
	borderRadius: "8px",
}));

const ImageBorder = styled(Box)(() => ({
	border: "1px solid white",
	borderRadius: "0 120px 0 0",
}));

const ImageContainer = styled(Box)(() => ({
	flex: "1",
	padding: "10px",
	position: "relative",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

const Image = styled("img")`
	margin-right: 50px;
	width: 90%;
	height: auto;
	padding: 10px;
`;

const TextContainer = styled(Box)(() => ({
	flex: "1",
	padding: "10px",
	textAlign: "left",
}));

const Title = styled(Typography)(() => ({
	fontSize: "2rem",
	marginBottom: "20px",
}));

const Text = styled(Typography)(() => ({
	fontSize: "1.2em",
	lineHeight: "1.5",
}));
