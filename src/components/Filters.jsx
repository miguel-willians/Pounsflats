import Button from "./Button";

import styles from "./Filters.module.css";

function Filters() {
  return (
    <div className={styles.filters}>
      <Button type="active" onClick={() => console.log("clicou")}>
        Todos os Flats
      </Button>
      <Button type="inactive" onClick={() => console.log("clicou")}>
        Indisponíveis
      </Button>
    </div>
  );
}

export default Filters;
