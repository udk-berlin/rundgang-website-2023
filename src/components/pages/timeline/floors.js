import TimelineLocationFloor from "@/components/pages/timeline/floor";

export default function TimelineFloors({ floors }) {
  return (
    <>
      {floors.map( floor => <TimelineLocationFloor floor={floor} />)}
    </>
  )
}
