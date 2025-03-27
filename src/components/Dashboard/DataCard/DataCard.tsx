import { IconButton, Paper, Tooltip, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import scss from "./DataCard.module.scss";
import React from "react";

export type DataCardProps = {
  title: string;
  value: string;
  description: string;
};

const DataCard = (props: DataCardProps) => {
  const { title, value, description } = props;

  return (
    <Paper className={scss.dataCard}>
      <div className={scss.header}>
        <Typography variant="h6" color={"lightslategrey"}>
          {title}
          <Tooltip title={<Typography fontSize={16}>{description}</Typography>}>
            <IconButton>
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Typography>
      </div>
      <Typography variant="h4">{value}</Typography>
    </Paper>
  );
};

export default DataCard;
