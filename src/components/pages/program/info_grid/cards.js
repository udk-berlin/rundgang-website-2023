import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { InfoGridCardItem } from "@/components/pages/program/info_grid/item";
import { useData } from "@/providers/data/data";
import { mapRoom } from "@/utils/room_mapper";

const CENTER_ID = '!uGRoYVWPeAFDnpWCYl:content.udk-berlin.de'

export function InfoGridLocation({ project, forProjectPage = false }) {
  const { contexts } = useData(forProjectPage)
  const locations = []

  contexts && project.parents?.forEach(parent => {
    if (parent && parent.id) {
      let context = contexts[parent.id]

      if (context && context.template) {
        if (context.template === 'location-room') {
          let room = context
          let floor
          let building

          context = room.parents && room.parents[0] ? contexts[room.parents[0].id] : null

          if (context && context.template && context.template  === 'location-level') {
            floor = context
            context = floor.parents && floor.parents[0] ? contexts[floor.parents[0].id] : null

            if (context && context.template && context.template === 'location-building') {
              building = context
            }
          } else if (context && context.template && context.template === 'location-building') {
            building = context
          }

          locations.push(
            {
              room: mapRoom(room),
              floor: floor,
              building: building,
            }
          )
        }
      }
    }
  })

  return (
    <Container>
      {
        locations.map(location => {
          return (
            <>
              {
                location.building ?
                  <InfoGridCardItem href={`/locations/${location.building.id}`} margin="10">
                    {location.building.name}
                  </InfoGridCardItem> : <></>
              }
              {
                location.floor ?
                  <InfoGridCardItem href={`/locations/${location.floor.id}`} margin="25">
                    <FormattedMessage id="floor" />
                    :&nbsp;
                    {location.floor.name}
                  </InfoGridCardItem> : <></>
              }
              {
                location.room ?
                  <InfoGridCardItem href={`/locations/${location.room.id}`} margin="50">
                    {location.room.formattedMessageId ? <span><FormattedMessage id={location.room.formattedMessageId} />: </span> : <></>}
                    {location.room.name}
                  </InfoGridCardItem> : <></>
              }
            </>
          )
        })
      }
    </Container>
  );
}

export function InfoGridContext({ project, forProjectPage = false }) {
  const { contexts } = useData(forProjectPage)
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

  return (
    <Container>
      {
        Object.values(structures.faculties).map(faculty => {
          return (
            <>
              <InfoGridCardItem href={`/program/${faculty.id}`} withLink={true} margin="50">{faculty.name}</InfoGridCardItem>
              {
                Object.values(faculty.institutes).map(institute => {
                  return (
                    <>
                      <InfoGridCardItem id={institute.id} margin="15">{institute.name}</InfoGridCardItem>
                      {Object.values(institute.classes).map(clazz => <InfoGridCardItem id={clazz.id} margin="20">{clazz.name}</InfoGridCardItem>)}
                      {
                        Object.values(institute.subjects).map(subject => {
                          return (
                            <>
                              <InfoGridCardItem id={subject.id} margin="10">{subject.name}</InfoGridCardItem>
                              {Object.values(subject.subjects).map(secondSubject => <InfoGridCardItem id={secondSubject.id} margin="20">{secondSubject.name}</InfoGridCardItem>)}
                            </>
                          )
                        })
                      }
                      {
                        Object.values(institute.courses).map(course => {
                          return (
                            <>
                              <InfoGridCardItem id={course.id} margin="50">{course.name}</InfoGridCardItem>
                              {Object.values(course.subjects).map(subject => <InfoGridCardItem id={subject.id} margin="10">{subject.name}</InfoGridCardItem>)}
                              {Object.values(course.classes).map(clazz => <InfoGridCardItem id={clazz.id} margin="20">{clazz.name}</InfoGridCardItem>)}
                            </>
                          )
                        }
                        )
                      }
                    </>
                  )
                })

              }
              {Object.values(faculty.subjects).map(subject => <InfoGridCardItem id={subject.id} margin="10">{subject.name}</InfoGridCardItem>)}
              {Object.values(faculty.courses).map(course => <InfoGridCardItem id={course.id} margin="50">{course.name}</InfoGridCardItem>)}
            </>
          )
        })
      }
      {
        Object.values(structures.centres).map(centre => {
          return (
            <>
              <InfoGridCardItem href={`/program/${CENTER_ID}`} withLink={true} margin="50">{centre.name}</InfoGridCardItem>
              {Object.values(centre.subjects).map(subject => <InfoGridCardItem id={subject.id} margin="10">{subject.name}</InfoGridCardItem>)}
              {
                Object.values(centre.consultingServices).map(consultingService => {
                 return (
                   <>
                     <InfoGridCardItem id={consultingService.id} margin="15">{consultingService.name}</InfoGridCardItem>
                     {
                       Object.values(consultingService.seminars).map(seminar => <InfoGridCardItem id={seminar.id} margin="50">{seminar.name}</InfoGridCardItem>)
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
              <InfoGridCardItem margin="50">{initiative.name}</InfoGridCardItem>
            </>
          )
        })
      }
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    margin-right: var(--info-border-width);
  }
`;