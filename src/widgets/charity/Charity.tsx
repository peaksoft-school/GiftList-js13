import { styled } from "@mui/system";
import GroupImage from "../../assets/photo/photo.png";
import { Box, Typography } from "@mui/material";

const Charity: React.FC = () => (
	<Container>
		<Content>
			<ImageContainer>
				<Image src={GroupImage} />
				<WhiteLine />
			</ImageContainer>
			<TextContainer>
				<StyledTitle>
					<StyledTitle>Благотворительность</StyledTitle>
				</StyledTitle>
				<Text>
					Найти удачный подарок, который принесёт радость, не всегда простая
					<br />
					задача. <br /> Благодаря нашему сервису у вас есть возможность не
					только обрадовать подарком, но и помочь другим приобрести необходимые{" "}
					<br />
					им вещи. <br /> В разделе благотворительность вы можете найти список
					опубликованных вещей, забронировав, вы связываетесь с их обладателем.
				</Text>
			</TextContainer>
		</Content>
	</Container>
);

export default Charity;

const Container = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#8639b5",
	color: "white",
	padding: "40px",
}));
const Content = styled(Box)(() => ({
	display: "flex",
	alignItems: "center",
	gap: "50px",
}));

const ImageContainer = styled(Box)(() => ({
	flex: "1",
	padding: "10px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "relative",
}));

const Image = styled("img")(() => ({
	width: "100%",
	maxWidth: "400px",
	height: "auto",
	zIndex: "1",
	marginTop: "20px",
}));

const WhiteLine = styled(Box)(() => ({
	position: "absolute",
	marginTop: "-15px",
	top: "0",
	right: "-10%",
	width: "99%",
	height: "100%",
	border: "1px solid white",
	borderRadius: "0 120px 0 0 ",
	zIndex: "0",
}));

const TextContainer = styled(Box)(() => ({
	flex: "2",
	padding: "50px",
}));

const Text = styled(Typography)(() => ({
	fontSize: "16px",
	marginLeft: "50px",
	lineHeight: "1.6",
	maxWidth: "600px",
	margin: "0 auto",
}));

const StyledTitle = styled(Box)(() => ({
	width: "570px",
	height: "55px",
	fontSize: "40px",
	marginLeft: "40px",
}));
