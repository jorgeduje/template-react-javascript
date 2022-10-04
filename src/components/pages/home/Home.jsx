import { Typography } from "@mui/material";

import styles from "./Home.module.css";

export const Home = (props) => {
  const { data } = props;
  return (
    <Typography variant="h2" align="center">
      {data.nombre}
    </Typography>
  );
};
