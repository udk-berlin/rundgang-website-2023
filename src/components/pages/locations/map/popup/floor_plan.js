import styles from "@/styles/pages/locations/map/popup/Popup.module.css";
import {ReactSVG} from "react-svg";
import React from "react";
import useSWR from "swr";
import {fetcher, getUrl} from "@/utils/api/api";
import {useFilter, useFilterDispatch} from "@/providers/filter";


export default function PopupFloorPlan() {
  const filter = useFilter()
  const dispatch = useFilterDispatch()

  let floorData;
  if ('floor' in filter) {
    const { data, error, isLoading } = useSWR(
      getUrl(filter.floor.id),
      fetcher
    );

    floorData = data;
  }
  const handleSelectRoom = (e) => {
    Object.values(filter.floor.children).forEach(child => {
      if (child.template === 'location-room') {
        let rooms = document.querySelectorAll(`[data-production="${child.id}"]`);
        rooms.forEach(room => room.style.fill = '')
      }
    })
    const roomId = e.target.getAttribute('data-production')

    if (roomId) {
      e.target.style.fill = 'var(--color-pink)';
      dispatch(
        {
          type: 'select-room',
          room: filter.floor.children[roomId]
        })
    }
  }

  let floorPlan;
  if (floorData) {
    floorPlan =  (
      <div className={styles.floorPlanContainer} onClick={handleSelectRoom}>
        <ReactSVG src={floorData.thumbnail_full_size}/>
      </div>
    )
    Object.values(filter.floor.children).forEach(child => {
      if (child.template === 'location-room') {
        let rooms = document.querySelectorAll(`[data-production="${child.id}"]`);
        rooms.forEach(room => room.style.fill = '')
      }
    })

    if ('room' in filter) {
      let rooms = document.querySelectorAll(`[data-production="${filter.room.id}"]`);
      rooms.forEach(room => room.style.fill = 'var(--color-pink)')
    }
  }

  return (floorPlan)
};
