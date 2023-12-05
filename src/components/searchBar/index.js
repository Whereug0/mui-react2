import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import FormControl from '@mui/material/FormControl';
import Toolbar from '@mui/material/Toolbar';
import OutlinedInput from '@mui/material/OutlinedInput'
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.scss'



export default function SearchBar() {


  return (
    <div className={styles.searchBar}>
      <AppBar className={styles['appBar']} position="static">
        <Toolbar className={styles.toolbar}>
          
        <FormControl fullWidth sx={{ m: 0.5
            
        }}>
            <OutlinedInput className={styles.search}
                id="outlined-adornment-amount"
                startAdornment={<SearchIcon />}
                placeholder="Search Company"
            />
        </FormControl>
          
        </Toolbar>
      </AppBar>
      </div>

  );
}