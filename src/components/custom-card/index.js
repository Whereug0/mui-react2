import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./styles.module.scss";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FileDownloadSharpIcon from '@mui/icons-material/FileDownloadSharp';
export default function CustomCard() {
  return (
    <div className={styles.cardBox}>
      <Card className={styles.cardItem} sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image="https://image.api.playstation.com/cdn/HP0700/CUSA03434_00/8h7cWRisC1eoKS3dNjsSt7bMM59QDsJhh2VpJ5v0j18T57tUOabxc3QaG8A5HAJw.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dark Souls 3
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <div className={styles["icons-text"]}>
              <Typography className={styles.time} variant="body2" color='text.secondary'><AccessTimeFilledIcon /> 2hr ago</Typography>
              <Typography className={styles.downloads} variant="body2" color='text.secondary'><FileDownloadSharpIcon/> 594 Downloads</Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
