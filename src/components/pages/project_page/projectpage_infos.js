import styles from "@/styles/pages/project/ProjectPageInfos.module.css";
import ProjectTitle from "./projectpage_title";
import ProjectAuthors from "./projectpage_authors";
import ProjectText from "./projectpage_text";

export default function ProjectPageInfos({ children }) {
  return (
    <div className={styles.container}>
      <ProjectTitle>
        rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </ProjectTitle>
      <ProjectAuthors>
        Marisa Nest &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; Juan Pablo Gaviria
        Bedoya
      </ProjectAuthors>
      <ProjectText>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
        zzril delenit a
      </ProjectText>
    </div>
  );
}
