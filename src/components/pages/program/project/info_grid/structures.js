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
  const structures = { faculties: {}, centres: {}, initiatives: {} }

  contexts && project.parents?.forEach(parent => {
    if (parent && parent.id) {
      let context = contexts[parent.id]
      if (context && context.template === 'institute') {
        let institute = context

        context = institute.parents && institute.parents[0] ? contexts[institute.parents[0].id] : null

        if (context && context.template && context.template === 'faculty') {
          let faculty = context

          if (!structures.faculties[faculty.id]) {
            structures.faculties[faculty.id] = {...faculty, institutes: {}, subjects: {}, courses: {}}
          }

          if (!structures.faculties[faculty.id].institutes[institute.id]) {
            structures.faculties[faculty.id].institutes[institute.id] = {...institute, classes: {}, subjects: {}, courses: {}}
          }
        }
      } else if (context && context.template === 'faculty') {
        let faculty = context

        if (!structures.faculties[faculty.id]) {
          structures.faculties[faculty.id] = {...faculty, institutes: {}, subjects: {}, courses: {}}
        }
      } else if (context && context.template === 'centre') {
        let centre = context

        if (!structures.centres[centre.id]) {
          structures.centres[centre.id] = {...centre, subjects: {}, consultingServices: {}}
        }
      } else if (context && context.template === 'initiative') {
        let initiative = context

        if (!structures.initiatives[initiative.id]) {
          structures.initiatives[initiative.id] = {...initiative}
        }
      } else if (context && context.template === 'consulting service') {
        let consultingService = context
        context = consultingService.parents && consultingService.parents[0] ? contexts[consultingService.parents[0].id] : null

        if (context && context.template && context.template === 'centre') {
          let centre = context

          if (!structures.centres[centre.id]) {
            structures.centres[centre.id] = {...centre, subjects: {}, consultingServices: {}}
          }

          if (!structures.centres[centre.id].consultingServices[consultingService.id]) {
            structures.centres[centre.id].consultingServices[consultingService.id] = {...consultingService, seminars: {}}
          }
        }

      } else if (context && context.template === 'subject') {
        let subject = context
        context = subject.parents && subject.parents[0] ? contexts[subject.parents[0].id] : null

        if (context && context.template && context.template === 'centre') {
          let centre = context

          if (!structures.centres[centre.id]) {
            structures.centres[centre.id] = {...centre, subjects: {}, consultingServices: {}}
          }

          if (!structures.centres[centre.id].subjects[subject.id]) {
            structures.centres[centre.id].subjects[subject.id] = {...subject, subjects: {}}
          }
        } else if (context && context.template && context.template === 'faculty') {
          let faculty = context

          if (!structures.faculties[faculty.id]) {
            structures.faculties[faculty.id] = {...faculty, institutes: {}, subjects: {}, courses: {}}
          }

          if (!structures.faculties[faculty.id].subjects[subject.id]) {
            structures.faculties[faculty.id].subjects[subject.id] = {...subject, subjects: {}}
          }
        } else if (context && context.template && context.template === 'institute') {
          let institute = context
          context = institute.parents && institute.parents[0] ? contexts[institute.parents[0].id] : null

          if (context && context.template && context.template === 'faculty') {
            let faculty = context

            if (!structures.faculties[faculty.id]) {
              structures.faculties[faculty.id] = {...faculty, institutes: {}, subjects: {}, courses: {}}
            }

            if (!structures.faculties[faculty.id].institutes[institute.id]) {
              structures.faculties[faculty.id].institutes[institute.id] = {...institute, classes: {}, subjects: {}, courses: {}}
            }

            if (!structures.faculties[faculty.id].institutes[institute.id].subjects[subject.id]) {
              structures.faculties[faculty.id].institutes[institute.id].subjects[subject.id] = {...subject, subjects: {}}
            }
          }
        } else if (context && context.template && context.template === 'course') {
          let course = context
          context = course.parents && course.parents[0] ? contexts[course.parents[0].id] : null

          if (context && context.template && context.template === 'institute') {
            let institute = context
            context = institute.parents && institute.parents[0] ? contexts[institute.parents[0].id] : null

            if (context && context.template && context.template === 'faculty') {
              let faculty = context

              if (!structures.faculties[faculty.id]) {
                structures.faculties[faculty.id] = {...faculty, institutes: {}, subjects: {}, courses: {}}
              }

              if (!structures.faculties[faculty.id].institutes[institute.id]) {
                structures.faculties[faculty.id].institutes[institute.id] = {...institute, classes: {}, subjects: {}, courses: {}}
              }

              if (!structures.faculties[faculty.id].institutes[institute.id].courses[course.id]) {
                structures.faculties[faculty.id].institutes[institute.id].courses[course.id] = {...course, subjects: {}, classes: {}}
              }

              if (!structures.faculties[faculty.id].institutes[institute.id].courses[course.id].subjects[subject.id]) {
                structures.faculties[faculty.id].institutes[institute.id].courses[course.id].subjects[subject.id] = {...subject, subjects: {}}
              }
            }
          }
        } else if (context && context.template && context.template === 'subject') {
          let secondSubject = context
          context = secondSubject.parents && secondSubject.parents[0] ? contexts[secondSubject.parents[0].id] : null

          if (context && context.template && context.template === 'institute') {
            let institute = context
            context = institute.parents && institute.parents[0] ? contexts[institute.parents[0].id] : null

            if (context && context.template && context.template === 'faculty') {
              let faculty = context

              if (!structures.faculties[faculty.id]) {
                structures.faculties[faculty.id] = {...faculty, institutes: {}, subjects: {}, courses: {}}
              }

              if (!structures.faculties[faculty.id].institutes[institute.id]) {
                structures.faculties[faculty.id].institutes[institute.id] = {...institute, classes: {}, subjects: {}, courses: {}}
              }

              if (!structures.faculties[faculty.id].institutes[institute.id].subjects[secondSubject.id]) {
                structures.faculties[faculty.id].institutes[institute.id].subjects[secondSubject.id] = {...secondSubject, subjects: {}}
              }

              if (!structures.faculties[faculty.id].institutes[institute.id].subjects[secondSubject.id].subjects[subject.id]) {
                structures.faculties[faculty.id].institutes[institute.id].subjects[secondSubject.id].subjects[subject.id] = {...subject, subjects: {}}
              }
            }
          }
        }
      } else if (context && context.template === 'seminar') {
        let seminar = context
        context = seminar.parents && seminar.parents[0] ? contexts[seminar.parents[0].id] : null

        if (context && context.template && context.template === 'consulting service') {
          let consultingService = context
          context = consultingService.parents && consultingService.parents[0] ? contexts[consultingService.parents[0].id] : null

          if (context && context.template && context.template === 'centre') {
            let centre = context

            if (!structures.centres[centre.id]) {
              structures.centres[centre.id] = {...centre, subjects: {}, consultingServices: {}}
            }

            if (!structures.centres[centre.id].consultingServices[consultingService.id]) {
              structures.centres[centre.id].consultingServices[consultingService.id] = {...consultingService, seminars: {}}
            }

            if (!structures.centres[centre.id].consultingServices[consultingService.id].seminars[seminar.id]) {
              structures.centres[centre.id].consultingServices[consultingService.id].seminars[seminar.id] = {...seminar}
            }
          }
        }
      } else if (context && context.template === 'class') {
        let clazz = context
        context = clazz.parents && clazz.parents[0] ? contexts[clazz.parents[0].id] : null

        if (context && context.template && context.template === 'institute') {
          let institute = context
          context = institute.parents && institute.parents[0] ? contexts[institute.parents[0].id] : null

          if (context && context.template && context.template === 'faculty') {
            let faculty = context

            if (!structures.faculties[faculty.id]) {
              structures.faculties[faculty.id] = {...faculty, institutes: {}, subjects: {}, courses: {}}
            }

            if (!structures.faculties[faculty.id].institutes[institute.id]) {
              structures.faculties[faculty.id].institutes[institute.id] = {...institute, classes: {}, subjects: {}, courses: {}}
            }

            if (!structures.faculties[faculty.id].institutes[institute.id].classes[clazz.id]) {
              structures.faculties[faculty.id].institutes[institute.id].classes[clazz.id] = {...clazz}
            }
          }
        } else if (context && context.template === 'course') {
          let course = context
          context = course.parents && course.parents[0] ? contexts[course.parents[0].id] : null

          if (context && context.template && context.template === 'faculty') {
            let faculty = context

            if (!structures.faculties[faculty.id]) {
              structures.faculties[faculty.id] = {...faculty, institutes: {}, subjects: {}, courses: {}}
            }

            if (!structures.faculties[faculty.id].courses[course.id]) {
              structures.faculties[faculty.id].courses[course.id] = {...course, subjects: {}, classes: {}}
            }

            if (!structures.faculties[faculty.id].courses[course.id].classes[clazz.id]) {
              structures.faculties[faculty.id].courses[course.id].classes[clazz.id] = {...clazz}
            }
          } else if (context && context.template && context.template === 'institute') {
            let institute = context
            context = institute.parents && institute.parents[0] ? contexts[institute.parents[0].id] : null

            if (context && context.template && context.template === 'faculty') {
              let faculty = context

              if (!structures.faculties[faculty.id]) {
                structures.faculties[faculty.id] = {...faculty, institutes: {}, subjects: {}, courses: {}}
              }

              if (!structures.faculties[faculty.id].institutes[institute.id]) {
                structures.faculties[faculty.id].institutes[institute.id] = {...institute, classes: {}, subjects: {}, courses: {}}
              }

              if (!structures.faculties[faculty.id].institutes[institute.id].courses[course.id]) {
                structures.faculties[faculty.id].institutes[institute.id].courses[course.id] = {...course, subjects: {}, classes: {}}
              }

              if (!structures.faculties[faculty.id].institutes[institute.id].courses[course.id].classes[clazz.id]) {
                structures.faculties[faculty.id].institutes[institute.id].courses[course.id].classes[clazz.id] = {...clazz}
              }
            }
          }
        }
      } else if (context && context.template === 'course') {
        let course = context
        context = course.parents && course.parents[0] ? contexts[course.parents[0].id] : null

        if (context && context.template && context.template === 'faculty') {
          let faculty = context

          if (!structures.faculties[faculty.id]) {
            structures.faculties[faculty.id] = {...faculty, institutes: {}, subjects: {}, courses: {}}
          }

          if (!structures.faculties[faculty.id].courses[course.id]) {
            structures.faculties[faculty.id].courses[course.id] = {...course, subjects: {}, classes: {}}
          }
        } else if (context && context.template && context.template === 'institute') {
          let institute = context
          context = institute.parents && institute.parents[0] ? contexts[institute.parents[0].id] : null

          if (context && context.template && context.template === 'faculty') {
            let faculty = context

            if (!structures.faculties[faculty.id]) {
              structures.faculties[faculty.id] = {...faculty, institutes: {}, subjects: {}, courses: {}}
            }

            if (!structures.faculties[faculty.id].institutes[institute.id]) {
              structures.faculties[faculty.id].institutes[institute.id] = {...institute, classes: {}, subjects: {}, courses: {}}
            }

            if (!structures.faculties[faculty.id].institutes[institute.id].courses[course.id]) {
              structures.faculties[faculty.id].institutes[institute.id].courses[course.id] = {...course, subjects: {}, classes: {}}
            }
          }
        }
      }
    }
  })

  return structures
}