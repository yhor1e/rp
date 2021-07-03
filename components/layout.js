import styles from "./layout.module.css";

export default function Layout({ children }) {
  // TODO: Add sidebar
  return <div className={styles.container}>{children}</div>;
}
