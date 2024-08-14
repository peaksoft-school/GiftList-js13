import { Breadcrumbs as MuiBreadcrumbs, Typography } from "@mui/material";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbsProps {
  data: { label: string; href: string }[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ data }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const truncatedPathnames = pathnames.slice(-2);

  const findLabel = (href: string) => {
    const match = data.find((item) => item.href === href);
    return match ? match.label : href;
  };

  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      {truncatedPathnames.map((value, index) => {
        const adjustedIndex =
          pathnames.length - truncatedPathnames.length + index;
        const to = `/${pathnames.slice(0, adjustedIndex + 1).join("/")}`;
        const isLast = index === truncatedPathnames.length - 1;

        return isLast ? (
          <Typography color="text.primary" key={to}>
            {findLabel(value)}
          </Typography>
        ) : (
          <Link
            to={to}
            key={to}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {findLabel(value)}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
