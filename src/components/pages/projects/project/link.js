import { LocalizedLink } from "@/components/localization/links";

export default function ProjectLink({ project, children, link = 1 }) {
  return (
    <>
      {link ? (
        <LocalizedLink href={`/projects/${project?.id}`}>
          {children}
        </LocalizedLink>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}
