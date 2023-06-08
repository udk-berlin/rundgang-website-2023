import styles from "@/styles/layout/Slider.module.css";

export default function Slider() {
  return (
    <input className={styles.container} type="range" min="1" max="100"></input>
  );
}
