import TimelineLocationRoom from '@/components/pages/timeline/room'

export default function TimelineLocationRooms({ floor, projects }) {
  return (
    <>
      {Object.values(floor.children).slice(0, 1).map((child, index) => {
        if (child.template === 'location-room'){
          return (<TimelineLocationRoom room={child} roomIndex={index} projects={projects} />)
        }
      })}
    </>
  );
}
