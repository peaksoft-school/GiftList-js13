import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { menuItems } from "../../features/lib/constants";

const SideBar = () => {
	return (
		<StyledDrawer variant="permanent">
			<Title variant="h6">GIFT LIST</Title>
			<List>
				{menuItems.map((item, id) => (
					<StyledListItem key={id}>
						<ListItemIcon>
							<img src={item.icon} alt={item.text} width={24} height={24} />
						</ListItemIcon>
						<StyledListItemText primary={item.text} />
					</StyledListItem>
				))}
			</List>
		</StyledDrawer>
	);
};

export default SideBar;



const StyledDrawer = styled(Drawer)({
	width: 250,
	flexShrink: 0,
	"& .MuiDrawer-paper": {
		width: 250,
		boxSizing: "border-box",
		background: "linear-gradient(0deg,#212569 0%,#6f35a4 100%)",
		color: "#fff",
	},
});

const StyledListItem = styled(ListItem)({
	cursor: "pointer",
	borderRadius: "10px",
	color: "#fff",
	"&:hover": {
		backgroundColor: "rgba(232, 220, 220, 0.1)",
		transition: "background-color 0.3s ease-in-out",
		"&:hover:not(:focus)": {
			backgroundColor: "rgba(211, 211, 208, 0.3)",
		},
	},
});

const StyledListItemText = styled(ListItemText)({
	fontSize: "1rem",
});

const Title = styled(Typography)({
	cursor: "pointer",
	textAlign: "center",
	margin: "1rem 0",
	color: "#fff",
	fontSize:"24px",
	fontWeight:'700',
});
