import styles from "@/styles/pages/landing/LandingMenu.module.css";
import Link from "next/link";

export default function LandingMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.textwrapper}>
        <div className={styles.text}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            preserveAspectRatio="xMinYMin"
            viewBox="0 0 548 80"
          >
            <Link href="/program">
              <text
                x="0%"
                y="75%"
                alignmentBaseline="central"
                dominantBaseline="central"
                fontSize="62px"
                fill="none"
                stroke="#fff"
                strokeWidth="0.1%"
              >
                Programm
              </text>
            </Link>
          </svg>
        </div>
      </div>

      <div className={styles.textwrapper}>
        <div>
          <div className={styles.text}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              preserveAspectRatio="xMinYMin"
              viewBox="0 0 548 80"
            >
              <Link href="/places">
                <text
                  x="0%"
                  y="25%"
                  alignmentBaseline="central"
                  dominantBaseline="central"
                  fontSize="51px"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="0.1%"
                >
                  Orte
                </text>
              </Link>
            </svg>
          </div>
        </div>
        <div>
          <div className={styles.text}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              preserveAspectRatio="xMinYMin"
              viewBox="0 0 548 80"
            >
              <Link href="/calendar">
                <text
                  x="0%"
                  y="25%"
                  alignmentBaseline="central"
                  dominantBaseline="central"
                  fontSize="51px"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="0.1%"
                >
                  Zeiten
                </text>
              </Link>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
