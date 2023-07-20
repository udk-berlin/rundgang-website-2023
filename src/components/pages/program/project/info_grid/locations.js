import { FormattedMessage } from "react-intl";
import styled from "styled-components";

import { useData } from "@/providers/data/data";
import { mapRoom } from "@/utils/room_mapper";
import { LocalizedLink } from "@/components/localization/links";

export default function ProjectInfoGridLocations({ project, forProjectPage = false }) {
  const { contexts } = useData(forProjectPage)
  const locations = extractLocations(project, contexts)

  return (
    <InfoGridLocationsContainer>
      {
        locations.map(location => {
          return (
            <>
              {
                location.building ?
                  <LocalizedLink href={`/locations/${location.building.id}`}>
                    <InfoGridLocationsLinkContainer margin={0.1} forProjectPage={forProjectPage}>
                      {location.building.name}
                    </InfoGridLocationsLinkContainer>
                  </LocalizedLink> : <></>
              }
              {
                location.floor ?
                  <LocalizedLink href={`/locations/${location.floor.id}`}>
                    <InfoGridLocationsLinkContainer margin={0.2} forProjectPage={forProjectPage}>
                      <FormattedMessage id="floor" />
                      :&nbsp;
                      {location.floor.name}
                    </InfoGridLocationsLinkContainer>
                  </LocalizedLink> : <></>
              }
              {
                location.room ?
                  <LocalizedLink href={`/locations/${location.room.id}`}>
                    <InfoGridLocationsLinkContainer margin={0.4} forProjectPage={forProjectPage}>
                      {location.room.formattedMessageId ? <span><FormattedMessage id={location.room.formattedMessageId} />: </span> : <></>}
                      {location.room.name}
                    </InfoGridLocationsLinkContainer>
                  </LocalizedLink> : <></>
              }
            </>
          )
        })
      }
    </InfoGridLocationsContainer>
  );
}

const InfoGridLocationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    margin-right: var(--info-border-width);
  }
`;

const InfoGridLocationsLinkContainer = styled.div`
  width: max-content;
  
  margin-top:  ${({ theme }) => theme.borderWidth};
  margin-left: calc(calc(${({ theme }) => theme.MASONRY_COLUMNS ? '100vw' : '50vw' } / ${({ theme }) => theme.MASONRY_COLUMNS ? theme.MASONRY_COLUMNS > 1 ? theme.MASONRY_COLUMNS : 2 : 3 } - ${({ theme }) => theme.MASONRY_GUTTER ?  theme.MASONRY_GUTTER : '0px'} * ${({ theme }) => theme.MASONRY_COLUMNS ? theme.MASONRY_COLUMNS + 1 : 0} / ${({ theme }) => theme.MASONRY_COLUMNS ? theme.MASONRY_COLUMNS : 1}) * ${({ margin }) => margin});
  padding: ${({ theme }) => theme.box.padding};
  
  font-size: 0.7rem;
  font-weight: 500;
  color: black;
  
  background: white;
  outline: ${({ theme }) => theme.border};

  :hover {
    background: ${({ theme }) => theme.colors.pink};
    color: white;
  }
`;

function extractLocations(project, contexts) {
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

  return locations
}