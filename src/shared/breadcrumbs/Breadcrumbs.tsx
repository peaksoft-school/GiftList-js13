import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs as MuiBreadcrumbs, Typography } from "@mui/material";
import { TypeBreadcrumbs } from "../lib/types/TypeBreadcrumbs";

const Breadcrumbs: FC<TypeBreadcrumbs> = ({ pathNamesMap }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const truncatedPathnames = pathnames.slice(-2);

  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      {truncatedPathnames.map((value, index) => {
        const adjustedIndex =
          pathnames.length - truncatedPathnames.length + index;
        const to = `/${pathnames.slice(0, adjustedIndex + 1).join("/")}`;
        const isLast = index === truncatedPathnames.length - 1;

        return isLast ? (
          <Typography color="text.primary" key={to}>
            {pathNamesMap[value] || value}
          </Typography>
        ) : (
          <Link
            to={to}
            key={to}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {pathNamesMap[value] || value}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
