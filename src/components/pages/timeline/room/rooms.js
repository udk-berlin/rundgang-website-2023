import TimelineLocationRoom from '@/components/pages/timeline/room/room'

export default function TimelineLocationRooms({ rooms }) {
  return (
    <>
      {rooms.map( (room, index) => <TimelineLocationRoom room={room} index={index} />)}
    </>
  );
}
