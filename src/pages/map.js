import React, { useRef, useEffect, useState } from "react";
import Head from 'next/head'
import styles from '@/styles/pages/Map.module.css'
import maplibregl from "maplibre-gl"
import { useUA, isMobile } from '@/utils/ua_parser'

const MAP_STYLE =
    "https://osm.udk-berlin.de/styles/udk-rundgang-2022/style.json";

const FIRST_LAT = 52.5215633;
const FIRST_LNG = 13.3491838;

const BOUNDS = [
    [13.2397254, 52.442394], // Southwest coordinates
    [13.4871903, 52.586099], // Northeast coordinates
];

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);

    // const UADetails = useUA();
    // console.log(isMobile(UADetails))

    useEffect(() => {
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: MAP_STYLE,
            center: [FIRST_LNG, FIRST_LAT],
            zoom: false,
            maxBounds: BOUNDS,
            maxZoom: 18,
            minZoom: 10,
            pitchWithRotate: false,
            clickTolerance: 7,
            dragRotate: false,
            boxZoom: false,
            touchPitch: false,
        });
    });

    return (
        <>
            <main className={styles.main}>
                <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />
            </main>
        </>
    );
}
