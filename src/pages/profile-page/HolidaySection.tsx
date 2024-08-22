import { Box, Grid, styled, Typography } from "@mui/material";
import { Holiday } from "../../shared/lib/types/userProfile";

interface HolidaySectionProps {
  holidays: Holiday[];
  handleShowAll: () => void;
  showAll: boolean;
}

const HolidaySection: React.FC<HolidaySectionProps> = ({
  holidays,
  handleShowAll,
  showAll,
}) => {
  return (
    <Section>
      <ProductsHeader>
        <Typography variant="h6">Праздники</Typography>
        <TypographyWatch variant="body1" onClick={handleShowAll}>
          {showAll ? "Скрыть" : "Смотреть все"}
        </TypographyWatch>
      </ProductsHeader>
      <BoxHoliday>
        {holidays.map((holiday) => (
          <Grid item xs={12} sm={6} md={4} key={holiday.id}>
            <ProductCard>
              <ProductImage src={holiday.image} alt={holiday.title} />
              <TypographyHoliday variant="body1">
                {holiday.title}
              </TypographyHoliday>

              <TypographyDate variant="body2">
                {holiday.dateOfHoliday}
              </TypographyDate>
            </ProductCard>
          </Grid>
        ))}
      </BoxHoliday>
    </Section>
  );
};

const Section = styled(Box)(() => ({
  marginBottom: "20px",
}));

const BoxHoliday = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems:'center',
  gap:'10px',
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

const TypographyHoliday = styled(Typography)(() => ({
  textAlign: "left",
  width: "100%",
  margin: "10px 0",
}));
const TypographyDate = styled(Typography)(() => ({
  textAlign: "left",
  width: "100%",
}));

export default HolidaySection;
