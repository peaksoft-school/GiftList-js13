import { Box, Typography, styled } from "@mui/material";
import { FC } from "react";

interface NewsletterCardProps {
  image: string;
  date: string;
  title: string;
}

const MailingCard: FC<NewsletterCardProps> = ({ image, date, title }) => {
  return (
    <StyledBox>
      <StyledCard>
        <StyledCardMedia>
          <img src={image} alt={title} />
        </StyledCardMedia>
        <StyledCardContent>
          <Title variant="h6">{title}</Title>
          <StyledDate variant="body2" color="textSecondary">
            {date}
          </StyledDate>
        </StyledCardContent>
      </StyledCard>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(() => ({
  display:'flex',
  gap: '20px', 
  flexDirection:'column',
}));

const StyledCard = styled(Box)(() => ({
  width: "349px", 
  height: "250px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  // overflow: "hidden",
}));

const StyledCardMedia = styled(Box)(() => ({
  width: "100%",
  height: "140px",
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    backgroundPosition: "center",
  },
}));

const StyledCardContent = styled(Box)(() => ({
  textAlign: "center",
  padding: "16px",
}));

const Title = styled(Typography)(() => ({
  color: "rgba(0, 0, 0, 1)",
  fontSize: "16px", 
  fontWeight: "600",
  lineHeight: "20px",
  textAlign: "left",
}));

const StyledDate = styled(Typography)(() => ({
  color: "rgba(99, 108, 132, 1)",
  fontSize: "14px",
  fontWeight: "400",
  textAlign: "left",
  paddingTop: "8px",
}));

export default MailingCard;
