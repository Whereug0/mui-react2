import React from "react";
import Button from '@mui/material/Button';
import AddIcon from "@mui/icons-material/Add";
import IosShareIcon from "@mui/icons-material/IosShare";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import IconButton from '@mui/material/IconButton';
import styles from './styles.module.scss'
export default function Header() {
  return (
    <header>
      <div className={styles["title-btn"]}>
        <h1 className={styles["title"]}>Companies</h1>
        <Button className={styles.addBtn} startIcon={<AddIcon />}>
          Add
        </Button>
      </div>
      <div className={styles["import-export"]}>
        <IconButton sx={{fontSize: 'small', color: "black", gap: '5px'}} aria-label="delete"  color="black">
            <IosShareIcon />Import
        </IconButton>
        <IconButton sx={{fontSize: 'small', color: "black", gap: '5px'}} aria-label="delete" color="black">
            <SystemUpdateAltIcon />Export
        </IconButton>
      </div>
    </header>
  );
}
