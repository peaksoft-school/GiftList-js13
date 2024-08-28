import { FC, useState, MouseEvent } from "react";
import {
	Box,
	InputAdornment,
	styled,
	TextField,
	Menu,
	MenuItem,
} from "@mui/material";
import Notifications from "../../../shared/notifications/Notifications";

const SearchHeader: FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<StyleContainer>
			<TextField
				fullWidth
				placeholder="Поиск"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<img src="src/assets/icon/serchIcon.svg" alt="search icon" />
						</InputAdornment>
					),
				}}
			/>
			<StyleProfile>
				<Notifications menuItems={[]} />
				<ProfileAccount onClick={handleClick}>
					<StyleAccount src="src/assets/icon/profiles.svg" alt="profile icon" />
					<UserName>Naruto Uzumaki</UserName>
					<StyleSelect
						src="src/assets/icon/Chevrons Icon.svg"
						alt="dropdown icon"
					/>
				</ProfileAccount>
				<Menu
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={handleClose}>
					<StyledLogouts onClick={handleClose}>
						<img src="src/assets/icon/profileLogouts.svg" alt="profiles" />
						Профиль
					</StyledLogouts>
					<StyledLogouts onClick={handleClose}>
						<img src="src/assets/icon/logout.svg" alt="profiles" />
						Выход
					</StyledLogouts>
				</Menu>
			</StyleProfile>
		</StyleContainer>
	);
};

export default SearchHeader;

const UserName = styled("p")({
	padding: "5px",
	color: "#020202",
	fontSize: "16px",
	fontWeight: "400",
	lineHeight: "21.79px",
	cursor: "pointer",
});
const StyledLogouts = styled(MenuItem)(() => ({
	display: "flex",
	gap: "10px",
	cursor: "pointer",
}));

const StyleAccount = styled("img")({
	cursor: "pointer",
});

const StyleContainer = styled(Box)({
	marginLeft: "300px",
	marginTop: "10px",
	display: "flex",
<<<<<<< HEAD
=======
	alignItems:'center',
	margin: "20px",
>>>>>>> development
});

const StyleSelect = styled("img")({
	cursor: "pointer",
	fontSize: "5px",
});

const StyleProfile = styled(Box)({
	display: "flex",
	alignItems:'center',
	justifyContent:'center',
	padding: "20px",
	marginTop: "-10px",
	width: "35%",
});

const ProfileAccount = styled(Box)({
	display: "flex",
	alignItems: "center",
	cursor: "pointer",
});
