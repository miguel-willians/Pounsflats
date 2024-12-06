import Button from "./Button";

import styles from "./Filters.module.css";

function Filters() {
  return (
    <div className={styles.filters}>
      <Button type="filterActive">Todos os Flats</Button>
      <Button type="filterInactive">Indisponíveis</Button>
    </div>
  );
}

export default Filters;
