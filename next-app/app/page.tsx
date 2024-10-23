// pages/index.tsx
import Navbar from "./components/Navbar"; // Adjust the path if necessary
import ProductCard from "./components/ProductCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles["background-page"]}>
      {/* Reusable Navbar */}
      <Navbar />

      {/* Page Content */}
      <section className={`${styles.hero} text-center`} id="welcome">
        <h1 className="display-1">Welcome to Zim Tour</h1>
        <p className="lead">
          Explore the best tourist destinations Zimbabwe has to offer
        </p>
      </section>
    </main>
  );
}
