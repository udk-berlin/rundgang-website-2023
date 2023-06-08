import styles from "@/styles/pages/project/ProjectPage.module.css";
import ProjectPageImages from "./projectpage_images";
import ProjectPageInfos from "./projectpage_infos";

export default function ProjectPage({ children }) {
  return (
    <div className={styles.container}>
      <ProjectPageImages />
      <ProjectPageInfos />
    </div>
  );
}
