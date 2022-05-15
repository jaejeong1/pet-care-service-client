import styles from "@/styles/Layout.module.css";
import { Modal, Pagination, Table, Listitems, Dashboard } from '@/components'


export function Layout({ children }){
  return (
    // <div className={styles.container}>
    <div>
      {/* <main className={styles.main}>{children}</main> */}
      {/* <h1>여기는 layout</h1> */}
      {/* <Dashboard/> */}
      <main>{children}</main>
      {/* <Dashboard/> */}
    </div>

  );
}
