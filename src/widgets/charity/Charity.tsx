import styled from "styled-components";
import GroupImage from "../../assets/photo/photo.png";

const Charity: React.FC = () => (
	<Container>
		<ImageContainer>
			<Image src={GroupImage} />
			<WhiteLine />
		</ImageContainer>
		<TextContainer>
			<Title>Благотворительность</Title>
			<Text>
				Найти удачный подарок, который принесёт радость, не всегда простая
				задача. Благодаря нашему сервису у вас есть возможность не только
				обрадовать подарком, но и помочь другим приобрести необходимые им вещи.
				В разделе благотворительность вы можете найти список опубликованных
				вещей, забронировав, вы связываетесь с их обладателем.
			</Text>
		</TextContainer>
	</Container>
);

export default Charity;

const Container = styled.div`
	display: flex;
	gap: 100px;
	align-items: center;
	background-color: #8639b5;
	color: white;
	padding: 40px;
`;

const ImageContainer = styled.div`
	flex: 1;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	max-width: 400px;
	height: auto;
	z-index: 1;
	margin-top: 20px;
`;

const WhiteLine = styled.div`
	position: absolute;
	margin-top: -15px;
	top: 0;
	right: -10%;
	width: 99%;
	height: 100%;
	border: 1px solid white;
	border-radius: 0 120px 0 0;
	z-index: 0;
`;

const TextContainer = styled.div`
	flex: 2;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 2em;
	margin-bottom: 20px;
`;

const Text = styled.p`
	width: 700px;
	height: 192px;
	top: 1851px;
	left: 735px;
	gap: 0px;
	opacity: 0px;

	font-size: 19px;
	line-height: 1.6;
`;
