import { Box, Grid, styled, Typography } from "@mui/material";
import { Charity } from "../../shared/lib/types/userProfile"; // Убедитесь, что этот путь правильный
import Meatballs from "../../shared/UI/Meatballs";

interface CharitySectionProps {
  charity: Charity[];
  handleShowAll: () => void;
  showAll: boolean;
}
const menuData = [
  {
    id: 1,
    icon: "src/assets/icon/edit.svg",
    title: "Edit",
    onClick: () => console.log("Edit clicked"),
  },
  {
    id: 2,
    icon: "src/assets/icon/delete.svg",
    title: "Delete",
    onClick: () => console.log("Delete clicked"),
  },
];

const CharitySection: React.FC<CharitySectionProps> = ({
  charity,
  handleShowAll,
  showAll,
}) => {
  return (
    <Section>
      <ProductsHeader>
        <Typography variant="h6">Благотворительность</Typography>
        <TypographyWatch variant="body1" onClick={handleShowAll}>
          {showAll ? "Скрыть" : "Смотреть все"}
        </TypographyWatch>
      </ProductsHeader>
      <BoxCharity>
        {charity.map((charityItem) => (
          <Grid item xs={12} sm={6} md={4} key={charityItem.id}>
            <ProductCard>
              <ProductImage
                src={charityItem.imageUrl}
                alt={charityItem.giftTitle}
              />
              <BoxTitle>
                <TypographyCharity variant="body1">
                  {charityItem.giftTitle}
                </TypographyCharity>
                <Typography variant="body2">
                  {charityItem.booked ? "Забронировано" : "Доступно"}
                </Typography>
              </BoxTitle>
              <BoxDate>
                <Typography variant="body2">
                  {charityItem.description}
                </Typography>
                <Meatballs data={menuData} />
              </BoxDate>
            </ProductCard>
          </Grid>
        ))}
      </BoxCharity>
    </Section>
  );
};

const Section = styled(Box)(() => ({
  marginBottom: "20px",
}));

const BoxCharity = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const ProductsHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "20px 0",
}));

const TypographyWatch = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "19px",
  cursor: "pointer",

  "&:hover": {
    color: "rgba(55, 114, 255, 1)",
    textDecoration: "underline",
  },
}));

const ProductCard = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  padding: "10px",
  width: "350px",
  height: "250px",
}));

const ProductImage = styled("img")(() => ({
  width: "100%",
  height: "auto",
  borderRadius: "10px",
}));

const TypographyCharity = styled(Typography)(() => ({
  textAlign: "left",
  width: "100%",
  margin: "10px 0",
}));

const BoxDate = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

const BoxTitle = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));

export default CharitySection;
