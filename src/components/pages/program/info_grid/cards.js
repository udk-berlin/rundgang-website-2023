import { InfoGridCardItem } from "@/components/pages/program/info_grid/item";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

export function InfoGridLocation({ project, contexts }) {
  const locations = []

  project.parents.forEach(parent => {
    if (parent) {
      let context = contexts[parent.id]
      if (context) {
        if (context.template === 'location-room') {
          let room = context
          let floor
          let building

          context = contexts[room.parents[0].id]

          if (context && context.template === 'location-level') {
            floor = context
            context = contexts[floor.parents[0].id]

            if (context && context.template === 'location-building') {
              building = context
            }
          } else if (context.template === 'location-building') {
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

  project.parents.forEach(parent => {
    if (parent) {
      let context = contexts[parent.id]
      if (context && context.template === 'class') {
        let clazz = context
        let course
        let subject
        let institute
        let faculty
        //
        // context = contexts[clazz.parents[0].id]
        //
        // if (context && context.template === 'course') {
        //   course = context
        //   context = contexts[course.parents[0].id]
        //
        //   if (context && context.template === 'institute') {
        //     institute = context
        //   } else if (context && context.template === 'faculty') {
        //     faculty = context
        //   }
        // } else if (context.template === 'subject') {
        //   subject = context
        //   context = contexts[subject.parents[0].id]
        //
        //   if (context && context.template === 'institute') {
        //     institute = context
        //   } else if (context && context.template === 'faculty') {
        //     faculty = context
        //   }
        // } else if (context && context.template === 'institute') {
        //   institute = context
        // } else if (context && context.template === 'faculty') {
        //   faculty = context
        // }

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
      else if (context && context.template === 'course') {
        let clazz
        let course = context
        let subject
        let institute
        let faculty

        // context = contexts[course.parents[0].id]
        //
        // if (context && context.template === 'class') {
        //   clazz = context
        //   context = contexts[clazz.parents[0].id]
        //
        //   if (context && context.template === 'institute') {
        //     institute = context
        //   } else if (context && context.template === 'faculty') {
        //     faculty = context
        //   }
        // } else if (context.template === 'subject') {
        //   subject = context
        //   context = contexts[subject.parents[0].id]
        //
        //   if (context && context.template === 'institute') {
        //     institute = context
        //   } else if (context && context.template === 'faculty') {
        //     faculty = context
        //   }
        // } else if (context && context.template === 'institute') {
        //   institute = context
        // } else if (context && context.template === 'faculty') {
        //   faculty = context
        // }

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
      else if (context && context.template === 'subject') {
        let clazz
        let course
        let subject = context
        let institute
        let faculty

        context = contexts[subject.parents[0].id]

        // if (context && context.template === 'class') {
        //   clazz = context
        //   context = contexts[clazz.parents[0].id]
        //
        //   if (context && context.template === 'institute') {
        //     institute = context
        //   } else if (context && context.template === 'faculty') {
        //     faculty = context
        //   }
        // } else if (context.template === 'course') {
        //   course = context
        //   context = contexts[course.parents[0].id]
        //
        //   if (context && context.template === 'institute') {
        //     institute = context
        //   } else if (context && context.template === 'faculty') {
        //     faculty = context
        //   }
        // } else if (context && context.template === 'institute') {
        //   institute = context
        // } else if (context && context.template === 'faculty') {
        //   faculty = context
        // }
        //
        // structures.push(
        //   {
        //     clazz: clazz?.name,
        //     course: course?.name,
        //     subject: subject?.name,
        //     institute: institute?.name,
        //     faculty: faculty?.name,
        //   }
        // )
      }
      else if (context && context.template === 'institute') {
        let clazz
        let course
        let subject
        let institute = context
        let faculty

        // context = contexts[institute.parents[0].id]
        //
        // if (context && context.template === 'faculty') {
        //   faculty = context
        // }

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

        // context = contexts[faculty.parents[0].id]
        //
        // if (context && context.template === 'institute') {
        //   institute = context
        // }

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
