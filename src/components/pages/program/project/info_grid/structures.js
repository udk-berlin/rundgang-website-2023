import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { useData } from "@/providers/data/data";
import { HoverLink } from "@/components/hover_link";

const CENTER_ID = '!uGRoYVWPeAFDnpWCYl:content.udk-berlin.de'

export default function ProjectInfoGridStructures({ project, forProjectPage = false }) {
  const { contexts } = useData(forProjectPage)
  const structures = extractStructures(project, contexts)

  return (
    <InfoGridStructuresContainer>
      {
        Object.values(structures.faculties).map(faculty => {
          return (
            <>
              <InfoGridStructure href={`/program/${faculty.id}`} withLink={true} margin="50"><FormattedMessage id={faculty.name} /></InfoGridStructure>
              {
                Object.values(faculty.institutes).map(institute => {
                  return (
                    <>
                      <InfoGridStructure id={institute.id} margin="15">{institute.name}</InfoGridStructure>
                      {Object.values(institute.classes).map(clazz => <InfoGridStructure id={clazz.id} margin="20">{clazz.name}</InfoGridStructure>)}
                      {
                        Object.values(institute.subjects).map(subject => {
                          return (
                            <>
                              <InfoGridStructure id={subject.id} margin="10">{subject.name}</InfoGridStructure>
                              {Object.values(subject.subjects).map(secondSubject => <InfoGridStructure id={secondSubject.id} margin="20">{secondSubject.name}</InfoGridStructure>)}
                            </>
                          )
                        })
                      }
                      {
                        Object.values(institute.courses).map(course => {
                            return (
                              <>
                                <InfoGridStructure id={course.id} margin="50">{course.name}</InfoGridStructure>
                                {Object.values(course.subjects).map(subject => <InfoGridStructure id={subject.id} margin="10">{subject.name}</InfoGridStructure>)}
                                {Object.values(course.classes).map(clazz => <InfoGridStructure id={clazz.id} margin="20">{clazz.name}</InfoGridStructure>)}
                              </>
                            )
                          }
                        )
                      }
                    </>
                  )
                })

              }
              {Object.values(faculty.subjects).map(subject => <InfoGridStructure id={subject.id} margin="10">{subject.name}</InfoGridStructure>)}
              {Object.values(faculty.courses).map(course => <InfoGridStructure id={course.id} margin="50">{course.name}</InfoGridStructure>)}
            </>
          )
        })
      }
      {
        Object.values(structures.centres).map(centre => {
          return (
            <>
              <InfoGridStructure href={`/program/${CENTER_ID}`} withLink={true} margin="50"><FormattedMessage id={centre.name} /></InfoGridStructure>
              {Object.values(centre.subjects).map(subject => <InfoGridStructure id={subject.id} margin="10">{subject.name}</InfoGridStructure>)}
              {
                Object.values(centre.consultingServices).map(consultingService => {
                  return (
                    <>
                      <InfoGridStructure id={consultingService.id} margin="15">{consultingService.name}</InfoGridStructure>
                      {
                        Object.values(consultingService.seminars).map(seminar => <InfoGridStructure id={seminar.id} margin="50">{seminar.name}</InfoGridStructure>)
                      }
                    </>
                  )
                })
              }
            </>
          )
        })
      }

      {
        Object.values(structures.initiatives).map(initiative => {
          return (
            <>
              <InfoGridStructure margin="50">{initiative.name}</InfoGridStructure>
            </>
          )
        })
      }
    </InfoGridStructuresContainer>
  );
}

const InfoGridStructuresContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    margin-right: var(--info-border-width);
  }
`;

function InfoGridStructure({ margin, href, children }) {
  return (
    <>
      {
        children ?
          href ?
            <InfoGridStructureContainer margin={margin}>
              <HoverLink href={href}>{children}</HoverLink>
            </InfoGridStructureContainer> :
            <InfoGridStructureContainerPadded margin={margin}>
              <div style={{ display: "inline" }}>
                {children}
              </div>
            </InfoGridStructureContainerPadded> :
          <></>
      }
    </>
  )
}

const InfoGridStructureContainer = styled.div`
  font-size: 0.7rem;
  font-weight: 500;
  background: white;
  color: black;

  outline: var(--info-border-width) solid var(--info-border-color);
  margin-top: var(--info-border-width);

  margin-left: ${({ margin }) => margin }%;
`;

const InfoGridStructureContainerPadded = styled(InfoGridStructureContainer)`
  padding: 0.2rem 0.4rem;
`;

function extractStructures(project, contexts) {
  let structures = { faculties: {}, centres: {}, initiatives: {} }

  contexts && project.parents?.forEach(parent => {
    if (parent && parent.id) {
      let context = contexts[parent.id]
      if (context && context.template === 'institute') {
        structures = extractInstitute({ context, contexts, structures })
      } else if (context && context.template === 'faculty') {
        structures = extractFaculty({ context, structures })
      } else if (context && context.template === 'centre') {
        structures = extractCentre({ context, structures })
      } else if (context && context.template === 'initiative') {
        structures = extractInitiative({context, structures})
      } else if (context && context.template === 'consulting service') {
        structures = extractConsultingServices({context, contexts, structures})
      } else if (context && context.template === 'subject') {
        structures = extractSubject({context, contexts, structures})
      } else if (context && context.template === 'seminar') {
        structures = extractSeminar({ context, contexts, structures })
      } else if (context && context.template === 'class') {
        structures = extractClass({ context, contexts, structures })
      } else if (context && context.template === 'course') {
        structures = extractCourse({ context, contexts, structures })
      }
    }
  })

  return structures
}

function extractFaculty({context, structures, institute = null, subject = null, course= null }) {
  let faculty = { institutes: {}, subjects: {}, courses: {}, ...context }

  if (institute) {
    faculty.institutes[institute.id] = { classes: {}, subjects: {}, courses: {}, ...institute}
  }

  if (subject) {
    faculty.subjects[subject.id] = { subjects: {}, ...subject }
  }

  if (course) {
    faculty.courses[course.id] = { subjects: {}, classes: {}, ...course}
  }

  if (!structures.faculties[faculty.id]) {
    structures.faculties[faculty.id] = {...faculty}
  } else {
    const institutes = {...structures.faculties[faculty.id].institutes, ...faculty.institutes}
    const subjects = {...structures.faculties[faculty.id].subjects, ...faculty.subjects}
    const courses = {...structures.faculties[faculty.id].courses, ...faculty.courses}
    structures.faculties[faculty.id] = {...structures.faculties[faculty.id], ...faculty, institutes: institutes, subjects: subjects, courses: courses}
  }

  return structures
}

function extractCentre({context, structures, subject = null, consultingService = null }) {
  let centre = { subjects: {}, consultingServices: {}, ...context }

  if (subject) {
    centre.subjects[subject.id] = { subjects: {}, ...subject}
  }

  if (consultingService) {
    centre.consultingServices[consultingService.id] = { ...consultingService }
  }

  if (!structures.centres[centre.id]) {
    structures.centres[centre.id] = {...centre}
  } else {
    const subjects = {...structures.centres[centre.id].subjects, ...centre.subjects}
    const consultingServices = {...structures.centres[centre.id].consultingServices, ...centre.consultingServices}
    structures.centres[centre.id] = {...structures.centres[centre.id], ...centre, subjects: subjects, consultingServices: consultingServices}
  }

  return structures
}

function extractInitiative({ context, structures }) {
  let initiative = { ...context }

  if (!structures.initiatives[initiative.id]) {
    structures.initiatives[initiative.id] = {...initiative}
  }

  return structures
}

function extractInstitute({context, contexts, structures, course= null, clazz = null, subject = null }) {
  let institute = { courses: {}, classes: {}, subjects: {}, ...context }

  if (course) {
    institute.courses[course.id] = {...course}
  }

  if (clazz) {
    institute.classes[clazz.id] = { seminars: {}, ...clazz}
  }

  if (subject) {
    institute.subjects[subject.id] = {...subject}
  }

  institute.parents?.forEach(parent => {
    context = contexts[parent.id]

    if (context && context.template && context.template === 'faculty') {
      structures = extractFaculty({ context, structures, institute })
    }
  })

  return structures
}

function extractSubject({ context, contexts, structures, secondSubject = null }) {
  let subject = { subjects: {}, ...context }

  if (secondSubject) {
    subject.subjects[secondSubject.id] = {...secondSubject}
  }

  subject.parents?.forEach(parent => {
    context = contexts[parent.id]

    if (context && context.template && context.template === 'centre') {
      structures = extractCentre({context, structures, subject})
    } else if (context && context.template && context.template === 'faculty') {
      structures = extractFaculty({context, structures, subject})
    } else if (context && context.template && context.template === 'institute') {
      structures = extractInstitute({ context, contexts, structures, subject })
    } else if (context && context.template && context.template === 'course') {
      structures = extractCourse({context, contexts, structures, subject})
    } else if (context && context.template && context.template === 'subject') {
      structures = extractSubject({context, contexts, structures, secondSubject: subject})
    }
  })

  return structures
}

function extractCourse({ context, contexts, structures, subject = null, clazz = null }) {
  let course = {classes: {}, subjects: {}, ...context}

  if (clazz) {
    course.classes[clazz.id] = { seminars: {}, ...clazz }
  }

  if (subject) {
    course.classes[subject.id] = {...subject}
  }

  course.parents?.forEach(parent => {
    context = contexts[parent.id]

    if (context && context.template && context.template === 'faculty') {
      structures = extractFaculty({ context, structures, course })
    } else if (context && context.template && context.template === 'institute') {
      structures = extractInstitute({ context, contexts, structures, course })
    }
  })

  return structures
}

function extractClass({ context, contexts, structures, seminar = null }) {
  let clazz = { seminars: {}, ...context }

  if (seminar) {
    clazz.seminars[seminar.id] = { ...seminar }
  }

  clazz.parents?.forEach(parent => {
    context = contexts[parent.id]

    if (context && context.template && context.template === 'institute') {
      structures = extractInstitute({ context, contexts, structures, clazz })

    } else if (context && context.template === 'course') {
      structures = extractCourse({ context, contexts, structures, clazz })
    }
  })

  return structures
}

function extractSeminar({ context, contexts, structures }) {
  let seminar = { ...context }

  seminar.parents?.forEach(parent => {
    context = contexts[parent.id]

    if (context && context.template && context.template === 'consulting service') {
      structures = extractConsultingServices({ context, contexts, structures, seminar })
    } else if (context && context.template && context.template === 'class') {
      structures = extractClass({ context, contexts, structures, seminar })
    }
  })

  return structures
}

function extractConsultingServices({ context, contexts, structures, seminar = null }) {
  let consultingService = { seminars: {}, ...context }

  if (seminar) {
    consultingService.seminars[seminar.id] = {...seminar}
  }

  consultingService.parents?.forEach(parent => {
    context = contexts[parent.id]

    if (context && context.template && context.template === 'centre') {
      structures = extractCentre({ context, structures, consultingService})
    }
  })

  return structures
}