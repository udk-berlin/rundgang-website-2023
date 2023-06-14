import styles from "@/styles/layout/Slider.module.css";

export default function Slider() {
  return (
    <div className={styles.container}>
      <input type="range" min="1" max="100"></input>
    </div>
  );
}
