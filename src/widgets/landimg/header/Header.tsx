import { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, InputBase, Menu, MenuItem } from "@mui/material";
import chevrons from "../../../assets/icon/Chevrons Icon.svg";
import notification from "../../../assets/icon/notification.svg";
import iconsProfile from "../../../assets/icon/Subtract.svg";
import logout from "../../../assets/icon/Logout.svg";
import searchIcons from "../../../assets/icon/Union.svg";
import ProfileIcons from "../../../assets/icon/ProfileLogouts.svg";

const Header: FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) =>
		setAnchorEl(event.currentTarget);

	const handleMenuClose = () => setAnchorEl(null);

	return (
		<StyledHeader>
			<SearchContainer>
				<StyledSearchBox>
					<SearchStyled src={searchIcons} />
					<StyledBaseInput placeholder="Поиск" />
				</StyledSearchBox>
			</SearchContainer>
			<StyledContainer>
				<ProfileNotfic>
					<Button>
						<img src={notification} />
					</Button>

					<Button onClick={handleMenuClick}>
						<StyledUserName>
							<img src={iconsProfile} />
							<UserName>Mirlan Uzumaki</UserName>
							<img src={chevrons} />
						</StyledUserName>
					</Button>
				</ProfileNotfic>
				<Menu
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={handleMenuClose}>
					<MenuItem onClick={handleMenuClose}>
						<StyledProfile src={ProfileIcons} />
						Профиль
					</MenuItem>
					<MenuItem onClick={handleMenuClose}>
						<StyledLogout src={logout} />
						Выйти
					</MenuItem>
				</Menu>
			</StyledContainer>
		</StyledHeader>
	);
};

export default Header;

const StyledBaseInput = styled(InputBase)(() => ({
	marginLeft: 8,
	width: "100%",
}));
const StyledUserName = styled(Box)(() => ({
	display: "flex",
	gap: "10px",
	marginTop: "-5px",
}));
const StyledProfile = styled("img")(() => ({
	marginRight: "5px",
}));
const StyledLogout = styled("img")(() => ({
	marginRight: "5px",
}));

const ProfileNotfic = styled(Box)(() => ({
	display: "flex",
	gap: "25px",
}));

const StyledContainer = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
}));

const StyledHeader = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "60px",
	padding: theme.spacing(1),
	borderBottom: "1px solid #F7F8FA",
	backgroundColor: "white",
	height: "70px",
}));

const SearchContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	width: "50%",
	padding: theme.spacing(1),
}));

const StyledSearchBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(1),
	borderRadius: "8px",
	width: "100%",
	backgroundColor: "#fff8f85c",
	border: "1px solid#BDBDBD",
	"&:focus-within": {
		borderColor: "#918d8d",
	},
}));

const UserName = styled(Box)(({ theme }) => ({
	marginLeft: theme.spacing(1),
}));

const SearchStyled = styled("img")(() => ({
	cursor: "pointer",
}));
