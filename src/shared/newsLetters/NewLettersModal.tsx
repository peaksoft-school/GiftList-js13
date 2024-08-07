import { Box, styled, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Button } from "../UI/button/Button";
interface ModalType {
	open: boolean;
	onClose: () => void;
}
const SendEmailModal = ({ open, onClose }: ModalType) => {
	return (
		<Modal open={open} onClose={onClose}>
			<ModalBox>
				<Typography variant="h6" component="h2" gutterBottom>
					Создание рассылки
				</Typography>
				<PhotoBox>
					<Typography color="textSecondary">
						Нажмите для добавления фотографии
					</Typography>
				</PhotoBox>
				<TextField label="Тема" variant="outlined" fullWidth margin="normal" />
				<TextField
					label="Текст рассылки"
					variant="outlined"
					fullWidth
					multiline
					rows={4}
					margin="normal"
				/>
				<ButtonsContainer>
					<CancelButton variant="contained" onClick={onClose}>
						Отмена
					</CancelButton>
					<SubmitButton variant="contained">Отправить</SubmitButton>
				</ButtonsContainer>
			</ModalBox>
		</Modal>
	);
};

export default SendEmailModal;

const ModalBox = styled(Box)(() => ({
	backgroundColor: "white",
	borderRadius: "8px",
	boxShadow: "24",
	padding: "34px",
	width: "400px",
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
}));

const PhotoBox = styled(Box)(() => ({
	width: "150px",
	height: "150px",
	border: "2px dashed gray",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	marginBottom: "16px",
}));

const ButtonsContainer = styled(Box)(() => ({
	display: "flex",
	justifyContent: "space-between",
	marginTop: "16px",
	width: "100%",
}));

const CancelButton = styled(Button)(() => ({
	backgroundColor: "#FFFFFF",
	color: "#8C8C8C",
	border: "1px solid #8C8C8C",
	width: "48%",
	"&:hover": {
		backgroundColor: "#F5F5F5",
	},
}));

const SubmitButton = styled(Button)(() => ({
	backgroundColor: "#8C52FF",
	color: "#FFFFFF",
	width: "48%",
	"&:hover": {
		backgroundColor: "#7B4BFF",
	},
}));
