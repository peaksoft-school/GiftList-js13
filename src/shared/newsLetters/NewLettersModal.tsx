import { Box, styled, TextField, Typography } from "@mui/material";
import { Button } from "../UI/button/Button";
import ModalProps from "../modal/ModalProps";
interface ModalType {
	open: boolean;
	onClose: () => void;
}
const SendEmailModal = ({ open, onClose }: ModalType) => {
	const handleFileInputClick = () => {
		const fileInput = document.getElementById("fileInputModal");
		if (fileInput) {
			fileInput.click();
		}
	};

	return (
		<ModalProps open={open} onClose={onClose}>
			<ModalBox>
				<Typography variant="h6" component="h2" gutterBottom>
					Создание рассылки
				</Typography>
				<PhotoBox onClick={handleFileInputClick}>
					<FilePhoto src="src/assets/icon/filePhoto.svg" />
					<TextFile>Нажмите для добавления фотографии</TextFile>
					<input type="file" id="fileInputModal" style={{ display: "none" }} />
				</PhotoBox>
				<StyledTextField
					label="Тема"
					placeholder="Введите тему рассылки"
					variant="outlined"
					fullWidth
					margin="normal"
				/>
				<StyledTextField
					label="Текст рассылки"
					placeholder="Введите текст рассылки"
					variant="outlined"
					fullWidth
					margin="normal"
				/>
				<ButtonsContainer>
					<CancelButton variant="outlined" onClick={onClose}>
						Отмена
					</CancelButton>
					<NewLetteBtn variant="contained">Отправить</NewLetteBtn>
				</ButtonsContainer>
			</ModalBox>
		</ModalProps>
	);
};

export default SendEmailModal;

const ModalBox = styled(Box)(() => ({
	backgroundColor: "white",
	borderRadius: "8px",
	boxShadow: "24",
	padding: "34px",
	width: "500px",
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
}));

const TextFile = styled(Typography)(() => ({
	color: "gray",
	textAlign: "center",
	marginTop: "10px",
}));

const FilePhoto = styled("img")(() => ({
	width: "50px",
	height: "50px",
	marginLeft: "70px",
	marginTop: "40px",
}));

const PhotoBox = styled(Box)(() => ({
	width: "210px",
	backgroundColor: "#DCDCE4",
	height: "200px",
	border: "1px solid #c8c8c8",
	borderRadius: "8px",
	alignItems: "center",
	marginTop: "25px",
	cursor: "pointer",
}));

const ButtonsContainer = styled(Box)(() => ({
	display: "flex",
	justifyContent: "space-between",
	marginTop: "16px",
	width: "100%",
}));

const CancelButton = styled(Button)(() => ({
	width: "47%",
	borderRadius: "10px",
}));

const NewLetteBtn = styled(Button)(() => ({
	width: "47%",
	color: "white",
	borderRadius: "10px",
}));
const StyledTextField = styled(TextField)(() => ({
	"& .MuiOutlinedInput-root": {
		borderRadius: "6px",
		height: "40px",
	},
	"& .MuiInputLabel-root": {
		transform: "translate(14px, 12px) scale(1)",
		"&.Mui-focused": {
			transform: "translate(14px, -9px) scale(0.75)",
		},	
	},
}));
