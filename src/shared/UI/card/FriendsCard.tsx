import { FC } from "react";
import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";
import { FriendsCardProps } from "../../lib/types/CardType";

const FriendsCard: FC<FriendsCardProps> = ({ friend }) => (
  <FriendsContainer>
    <FriendCard key={friend.fullName}>
      <FriendImageContainer>
        <FriendImage src={friend.image} alt={friend.fullName} />
      </FriendImageContainer>
      <FriendName>{friend.fullName}</FriendName>
      <FriendInfo>
        <InfoItem>
          <Body1 variant="body1">{friend.countOfWish}</Body1>
          <Body2 variant="body2">Желаний</Body2>
        </InfoItem>
        <InfoItem>
          <Body1 variant="body1">{friend.countOfHolidays}</Body1>
          <Body2 variant="body2">Праздников</Body2>
        </InfoItem>
      </FriendInfo>
    </FriendCard>
  </FriendsContainer>
);

const FriendsContainer = styled(Box)(() => ({
  justifyContent: "center",
  margin: "5px",
}));

const FriendCard = styled(Box)(() => ({
  background: "linear-gradient(to bottom, #EADDFD 50%, white 50%)",
  border: "1px solid #E0E0E0",
  borderRadius: "8px",
  width: "247px",
  height: "257px",
  textAlign: "center",
  padding: "16px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const FriendImageContainer = styled(Box)(() => ({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const FriendImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

const FriendName = styled(Typography)(() => ({
  fontWeight: "400",
  fontSize: "18px",
  marginTop: "8px",
  lineHeight: "1.2",
  color: "rgba(2, 2, 1, 1)",
}));

const Body1 = styled(Typography)(() => ({
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "1.2",
  color: "rgba(2, 2, 2, 1)",
}));

const Body2 = styled(Typography)(() => ({
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "1.2",
  color: "rgba(96, 96, 96, 1)",
}));

const FriendInfo = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "16px",
}));

const InfoItem = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "14px",
  fontWeight: "400",
  color: "rgba(96, 96, 96, 1)",
}));

export default FriendsCard;
