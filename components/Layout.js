import styles from "@/styles/Layout.module.css";
import { Modal, Pagination, Table } from '@/components'


export function Layout({ children }){
  return (
    // <div className={styles.container}>
    <div>
      {/* <main className={styles.main}>{children}</main> */}
      {/* <h1>여기는 layout</h1> */}
      <main>{children}</main>
      <Table/>
      <Pagination/>
      <Modal/>
    </div>

  );
}
