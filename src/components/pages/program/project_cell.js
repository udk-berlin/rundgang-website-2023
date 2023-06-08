import styles from "@/styles/pages/program/ProjectCell.module.css";
import ProjectPageTitle from "../project_page/projectpage_title";
import ProjectPageAuthors from "../project_page/projectpage_authors";
import InfoGrid from "./info_grid";
import Link from "next/link";

export default function ProjectCell({ src }) {
  return (
    <div className={styles.container}>
      <Link href="/project">
        <img src={src}></img>
      </Link>
      <Link href="/project">
        <ProjectPageTitle fontSize={1}>
          REM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD
        </ProjectPageTitle>
      </Link>
      <div className={styles.authors}>
        <ProjectPageAuthors fontSize={0.8}>Marisa Nest</ProjectPageAuthors>
        <ProjectPageAuthors fontSize={0.8}>Lukas Esser</ProjectPageAuthors>
        <ProjectPageAuthors fontSize={0.8}>
          Juan Pablo Gaviria Bedoya
        </ProjectPageAuthors>
      </div>
      <InfoGrid />
    </div>
  );
}
