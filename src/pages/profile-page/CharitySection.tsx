import { Box, Grid, styled, Typography } from "@mui/material";
import { charity } from "../../shared/lib/types/userProfile";
// import Meatballs from "../../shared/UI/Meatballs";
// import { DataType } from "../../shared/lib/types/MeatballType";

interface CharitySectionProps {
  charity: typeof charity;
  handleShowAll: () => void;
  showAll: boolean;
}

// const meatballsData: DataType[] = [
//   {
//     id: 1,
//     title: "Option 1",
//     icon: "",
//     onClick: () => {},
//   },
//   { id: 2, title: "Option 2", icon: "" },
// ];

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
      <Grid container spacing={2}>
        {charity.map((charityItem) => (
          <Grid item xs={12} sm={6} md={4} key={charityItem.id}>
            <ProductCard>
              <ProductImage
                src={charityItem.imageUrl}
                alt={charityItem.title}
              />
              <BoxTitle>
                <TypographyCharity variant="body1">
                  {charityItem.title}
                </TypographyCharity>
                <Typography variant="body2">Новый</Typography>
              </BoxTitle>
              <BoxDate>
                <Typography variant="body2">
                  {charityItem.description}
                </Typography>
                {/* <Meatballs data={meatballsData} /> */}
              </BoxDate>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

const Section = styled(Box)(() => ({
  marginBottom: "20px",
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
