import styles from './App.module.scss';
import Header from './components/header';
import SearchBar from './components/searchBar'
import CustomCard from './components/custom-card'
import PaginationControlled from './components/pagination/index';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <SearchBar />
      <div className={styles.cardBox}>
        <div className={styles.cardsWrapper}>
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
      </div>
      <div className={styles.pagination}>
        <PaginationControlled className={styles.PaginationControlled}/>
      </div>
    </div>
  );
}

export default App;
