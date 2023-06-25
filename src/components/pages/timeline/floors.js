import TimelineLocationFloor from "@/components/pages/timeline/floor";

export default function TimelineFloors({ location, projects }) {
  return (
    <>
      {Object.values(location.children).map(child => {
        if (child.template === 'location-level'){
          return (<TimelineLocationFloor floor={child} projects={projects} />)
        }
      })}
    </>
  )
}
