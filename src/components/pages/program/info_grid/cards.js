import { InfoGridCardItem } from "@/components/pages/program/info_grid/item";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

export function InfoGridLocation({ project, contexts }) {
  const locations = []

  project.parents?.forEach(parent => {
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
              room: room?.name,
              floor: floor?.name,
              building: building?.name,
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
              <InfoGridCardItem margin="170px">
                {location.building}
              </InfoGridCardItem>
              <InfoGridCardItem margin="10px">
                <FormattedMessage id="floor" />
                :&nbsp;
                {location.floor}
              </InfoGridCardItem>
              <InfoGridCardItem margin="50px">
                <FormattedMessage id="room" />
                :&nbsp;
                {location.room}
              </InfoGridCardItem>
            </>
          )
        })
      }
    </Container>
  );
}

export function InfoGridContext({ project, contexts }) {
  const structures = []

  project.parents?.forEach(parent => {
    if (parent && parent.id) {
      let context = contexts[parent.id]
      if (context && context.template && context.template === 'class') {
        let clazz = context
        let course
        let subject
        let institute
        let faculty

        context = clazz.parents && clazz.parents[0] ? contexts[clazz.parents[0].id] : null

        if (context && context.template && context.template === 'course') {
          course = context
          context = course.parents && course.parents[0] ? contexts[course.parents[0].id] : null

          if (context && context.template && context.template === 'institute') {
            institute = context
          } else if (context && context.template && context.template === 'faculty') {
            faculty = context
          }
        } else if (context && context.template && context.template === 'subject') {
          subject = context
          context = subject.parents && subject.parents[0] ? contexts[subject.parents[0].id] : null

          if (context && context.template && context.template === 'institute') {
            institute = context
          } else if (context && context.template && context.template === 'faculty') {
            faculty = context
          }
        } else if (context && context.template && context.template === 'institute') {
          institute = context
        } else if (context && context.template && context.template === 'faculty') {
          faculty = context
        }

        structures.push(
          {
            clazz: clazz?.name,
            course: course?.name,
            subject: subject?.name,
            institute: institute?.name,
            faculty: faculty?.name,
          }
        )
      }
      else if (context && context.template && context.template === 'course') {
        let clazz
        let course = context
        let subject
        let institute
        let faculty

        context = course.parents && course.parents[0] ? contexts[course.parents[0].id] : null

        if (context && context.template && context.template === 'class') {
          clazz = context
          context = clazz.parents && clazz.parents[0] ? contexts[clazz.parents[0].id] : null

          if (context && context.template && context.template === 'institute') {
            institute = context
          } else if (context && context.template && context.template === 'faculty') {
            faculty = context
          }
        } else if (context && context.template && context.template === 'subject') {
          subject = context
          context = subject.parents && subject.parents[0] ? contexts[subject.parents[0].id] : null

          if (context && context.template && context.template === 'institute') {
            institute = context
          } else if (context && context.template && context.template === 'faculty') {
            faculty = context
          }
        } else if (context && context.template && context.template === 'institute') {
          institute = context
        } else if (context && context.template && context.template === 'faculty') {
          faculty = context
        }

        structures.push(
          {
            clazz: clazz?.name,
            course: course?.name,
            subject: subject?.name,
            institute: institute?.name,
            faculty: faculty?.name,
          }
        )
      }
      else if (context && context.template && context.template === 'subject') {
        let clazz
        let course
        let subject = context
        let institute
        let faculty

        context = subject.parents && subject.parents[0] ? contexts[subject.parents[0].id] : null

        if (context && context.template && context.template === 'class') {
          clazz = context
          context = subject.parents && subject.parents[0] ? contexts[clazz.parents[0].id] : null

          if (context && context.template && context.template === 'institute') {
            institute = context
          } else if (context && context.template && context.template === 'faculty') {
            faculty = context
          }
        } else if (context && context.template && context.template === 'course') {
          course = context
          context = subject.parents && subject.parents[0] ? contexts[course.parents[0].id] : null

          if (context && context.template && context.template === 'institute') {
            institute = context
          } else if (context && context.template && context.template === 'faculty') {
            faculty = context
          }
        } else if (context && context.template && context.template === 'institute') {
          institute = context
        } else if (context && context.template && context.template === 'faculty') {
          faculty = context
        }

        structures.push(
          {
            clazz: clazz?.name,
            course: course?.name,
            subject: subject?.name,
            institute: institute?.name,
            faculty: faculty?.name,
          }
        )
      }
      else if (context && context.template === 'institute') {
        let clazz
        let course
        let subject
        let institute = context
        let faculty

        context = institute.parents && institute.parents[0] ? contexts[institute.parents[0].id] : null

        if (context && context.template && context.template === 'faculty') {
          faculty = context
        }

        structures.push(
          {
            clazz: clazz?.name,
            course: course?.name,
            subject: subject?.name,
            institute: institute?.name,
            faculty: faculty?.name,
          }
        )
      }
      else if (context && context.template === 'faculty') {
        let clazz
        let course
        let subject
        let institute
        let faculty = context

        context = faculty.parents && faculty.parents[0] ? contexts[faculty.parents[0].id] : null

        if (context && context.template && context.template === 'institute') {
          institute = context
        }

        structures.push(
          {
            clazz: clazz?.name,
            course: course?.name,
            subject: subject?.name,
            institute: institute?.name,
            faculty: faculty?.name,
          }
        )
      }
    }
  })

  return (
    <Container>
      {
        structures.map(structure => {
          return (
            <>
              <InfoGridCardItem margin="50px">{structure.faculty}</InfoGridCardItem>
              <InfoGridCardItem margin="150px">{structure.institute}</InfoGridCardItem>
              <InfoGridCardItem margin="100px">{structure.subject}</InfoGridCardItem>
              <InfoGridCardItem margin="50px">{structure.course}</InfoGridCardItem>
              <InfoGridCardItem margin="200px">{structure.class}</InfoGridCardItem>
            </>
          )
        })
      }
    </Container>
  );
}

function Item({ margin, children }) {
  return (
    <ItemContainer margin={margin}>
      <div>{children}</div>
    </ItemContainer>
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

const ItemContainer = styled.div`
  margin-top: var(--info-border-width);
  display: inline;
  outline: var(--info-border-width) solid var(--info-border-color);
  margin-left: ${(props) => props.margin};
  background-color: #fff;
  color: #000;

  & > div {
    padding: 0.2rem 0.4rem;
  }
`;
