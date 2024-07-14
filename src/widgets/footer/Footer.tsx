import React from "react";
import styled from "styled-components";
import GroupImage from "../../assets/photo.svg";

const FooterList : React.FC = () => {
	return (
		<Container>
			<ImageContainer>
				<Image src={GroupImage} />
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

export default FooterList;

const Container = styled.div`
	display: flex;
	align-items: center;
	background-color: #8639b5;
	color: white;
	padding: 40px;
	border-radius: 8px;
`;

const ImageContainer = styled.div`
	flex: 1;
	padding: 10px;
`;

const Image = styled.img`
	border: solid 1px;
	border-radius: 0px, 120px, 0px, 0px;
	width: 70%;
	height: auto;
	border-radius: 8px;
`;

const TextContainer = styled.div`
	flex: 1;
	padding: 10px;
	text-align: left;
`;

const Title = styled.h1`
	font-size: 2em;
	margin-bottom: 20px;
`;

const Text = styled.p`
	font-size: 1.2em;
	line-height: 1.5;
`;
