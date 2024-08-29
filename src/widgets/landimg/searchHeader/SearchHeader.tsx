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

const UserName = styled('p')(() => ({
	padding: "5px",
	color: "#020202",
	fontSize: "16px",
	fontWeight: "400",
	lineHeight: "21.79px",
	cursor: "pointer",
}));

const StyledLogouts = styled(MenuItem)(() => ({
	display: "flex",
	gap: "10px",
	cursor: "pointer",
}));

const StyleAccount = styled('img')(() => ({
	cursor: "pointer",
}));

const StyleContainer = styled(Box)(() => ({
	width: '1086px',
	display: "flex",
<<<<<<< HEAD
	alignItems: 'center',
}));
=======
	alignItems:'center',
	margin: "20px",
});
>>>>>>> 22473e27d294d1e220ca530ca2d9a05fe234da15

const StyleSelect = styled('img')(() => ({
	cursor: "pointer",
	fontSize: "5px",
}));

const StyleProfile = styled(Box)(() => ({
	display: "flex",
	alignItems: 'center',
	justifyContent: 'center',
	marginTop: "-10px",
}));

const ProfileAccount = styled(Box)(() => ({
	width: '180px',
	height: '45px',
	display: "flex",
	alignItems: "center",
	cursor: "pointer",
}));