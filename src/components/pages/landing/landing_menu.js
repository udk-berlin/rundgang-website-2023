import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router'
import { useIntl } from "react-intl";

export default function LandingMenu2() {
  const language = useIntl();
  return (
    <MenuContainer>
      <SVGContainer>
        {
          language.locale === 'en' ?
            <EnSVG/> :
            <DeSVG/>
        }
      </SVGContainer>
    </MenuContainer>
  );
}

function DeSVG() {
  const [isProgramHovered, setProgramIsHovered] = useState(false);
  const [isInfoHovered, setInfoIsHovered] = useState(false);
  const [isLocationsHovered, setLocationsIsHovered] = useState(false);
  const [isTimelineHovered, setTimelineIsHovered] = useState(false);

  const programRef = useRef(null);
  const infoRef = useRef(null);
  const locationsRef = useRef(null);
  const timelineRef = useRef(null);

  const router = useRouter()

  useEffect(() => {
    infoRef.current.addEventListener('click',  () => {});
    programRef.current.addEventListener('click',  () => {router.push('/program')});
    locationsRef.current.addEventListener('click',  () => {router.push('/locations')});
    timelineRef.current.addEventListener('click',  () => {router.push('/timeline')});
  }, [])

  return (
    <StyledSVG id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="8448.6408" height="1450.6074"
         viewBox="0 0 8448.6408 1450.6074">
      <g onMouseEnter={() => setProgramIsHovered(true)} onMouseLeave={() => setProgramIsHovered(false)} ref={programRef}>
        <StyledPath className="program" isHovered={isProgramHovered}
              d="M0,601.4314V0H628.6838c227.4163,0,316.6912,62.0226,316.6912,221.7778,0,187.0076-77.0584,248.0905-316.6912,249.9699H338.3052v129.6837H0ZM338.3052,282.8607h224.5971v-81.7571h-224.5971v81.7571Z"/>
        <StyledPath className="program" isHovered={isProgramHovered}
              d="M1684.9359,145.6592V422.8815h-333.6065v178.55h-330.7873V145.6592h325.1489l-6.5782,144.7194,119.3466-144.7194h226.4765Z"/>
        <StyledPath className="program" isHovered={isProgramHovered}
              d="M1760.1019,378.7139c0-167.2731,132.5029-241.5123,432.2789-241.5123,297.8965,0,430.3994,74.2392,430.3994,241.5123,0,168.2129-130.6234,241.5123-430.3994,241.5123s-432.2789-74.2392-432.2789-241.5123Zm336.4257,40.4087h176.6705v-79.8776h-176.6705v79.8776Z"/>
        <StyledPath className="program" isHovered={isProgramHovered}
              d="M3242.0629,145.6592h325.1489v376.8344c0,170.0923-61.0829,227.4163-240.5726,227.4163h-561.0219v-200.1639h470.8071v-32.8908h-255.6074c-215.1997,0-301.6555-55.4445-301.6555-194.5255,0-137.2015,107.13-190.7665,381.5331-190.7665,20.6742,0,44.1676,0,67.661,.9397l118.4059,120.2863h1.8795l-6.5782-107.13Zm-189.8259,231.1752h184.1875v-55.4445h-184.1875v55.4445Z"/>
        <StyledPath className="program" isHovered={isProgramHovered}
              d="M4353.7714,145.6592V422.8815h-333.6065v178.55h-330.7873V145.6592h325.1489l-6.5782,144.7194,119.3466-144.7194h226.4765Z"/>
        <StyledPath className="program" isHovered={isProgramHovered}
              d="M4962.707,145.6592c212.3805,0,338.3052,76.1187,338.3052,204.8626v250.9097h-327.9681v-76.1187l-124.985,76.1187h-194.5255c-173.8504,0-205.8014-36.6497-205.8014-233.9944h525.3119v-35.71h-523.4324V145.6592h513.0953Zm-153.1771,336.4257l163.5142-7.5179v-45.1074h-163.5142v52.6253Z"/>
        <StyledPath className="program" isHovered={isProgramHovered}
              d="M6665.5061,369.3165v232.1149h-330.7873v-206.7421h-134.3823v206.7421h-330.7873v-206.7421h-134.3823v206.7421h-330.7873V145.6592h325.1489l-6.5782,144.7194,120.2863-157.8758c39.4689-3.7589,75.1789-5.6384,106.1902-5.6384,154.1168,0,220.8381,38.5292,242.4521,158.8155l116.5273-153.1771c39.4689-3.7589,75.1789-5.6384,106.1902-5.6384,185.1281,0,250.9097,56.3842,250.9097,242.4521Z"/>
        <StyledPath className="program" isHovered={isProgramHovered}
              d="M8030,369.3165v232.1149h-330.7873v-206.7421h-134.3823v206.7421h-330.7873v-206.7421h-134.3823v206.7421h-330.7873V145.6592h325.1489l-6.5782,144.7194,120.2863-157.8758c39.4689-3.7589,75.1789-5.6384,106.1902-5.6384,154.1168,0,220.8381,38.5292,242.4521,158.8155l116.5273-153.1771c39.4689-3.7589,75.1789-5.6384,106.1902-5.6384,185.1281,0,250.9097,56.3842,250.9097,242.4521Z"/>
      </g>
      <g onMouseEnter={() => setInfoIsHovered(true)} onMouseLeave={() => setInfoIsHovered(false)} ref={infoRef}>
        <StyledPath className="info" isHovered={isInfoHovered} d="M8439.0752,1450.6074h-306.0997v-173.1376h306.0997v173.1376Z"/>
        <StyledPath className="info" isHovered={isInfoHovered}
              d="M8320.9398,791.0633h118.1354v168.3553h-105.2218v82.7426h105.2218v168.3548h-231.9662v-165.4852l73.6552,3.348-80.3512-61.2199c-1.9131-22.0009-2.8697-41.6104-2.8697-58.8285,0-102.3526,28.2186-137.2671,123.3964-137.2671Z"/>
        <StyledPath className="info" isHovered={isInfoHovered}
              d="M8196.1085,458.1808l.9566,99.4824h10.0439v-99.4824h94.6996v99.4824h138.2231v168.3548h-138.2231v31.5665h-94.6996v-32.0448c-58.8285-3.348-80.3512-36.3493-80.3512-133.9186,0-42.567,.9566-69.3507,5.7394-133.4403h63.6113Z"/>
        <StyledPath className="info" isHovered={isInfoHovered}
              d="M8325.7226,439.0618c-85.134,0-122.9182-67.4376-122.9182-220.0092,0-151.615,37.7842-219.0526,122.9182-219.0526,85.6123,0,122.9182,66.481,122.9182,219.0526s-37.7842,220.0092-122.9182,220.0092Zm20.5661-171.2245v-89.9168h-40.6539v89.9168h40.6539Z"/>
      </g>
      <g onMouseEnter={() => setLocationsIsHovered(true)} onMouseLeave={() => setLocationsIsHovered(false)} ref={locationsRef}>
        <StyledPath className="locations" isHovered={isLocationsHovered}
              d="M0,1144.6467c0-200.7031,158.7784-297.9326,487.9315-297.9326,327.369,0,486.1475,97.2295,486.1475,297.9326,0,204.2711-157.8864,303.2847-486.1475,303.2847C158.7784,1447.9314,0,1348.9179,0,1144.6467Zm351.4534,50.8448h269.3881v-100.7976H351.4534v100.7976Z"/>
        <StyledPath className="locations" isHovered={isLocationsHovered}
              d="M1676.0833,997.4645v263.1441h-316.6649v169.4826h-313.9888v-432.6267h308.6368l-6.2441,137.3701,113.2857-137.3701h214.9753Z"/>
        <StyledPath className="locations" isHovered={isLocationsHovered}
              d="M2326.3492,1174.0832h-222.1114v38.3566l222.1114,1.784v225.6795c-42.8167,4.4601-247.9798,5.3521-252.4399,5.3521-225.6795,0-283.6604-35.6805-283.6604-198.9191v-72.2531h-51.7368v-176.6187h51.7368v-93.6614h313.9888v93.6614h222.1114v176.6187Z"/>
        <StyledPath className="locations" isHovered={isLocationsHovered}
              d="M2729.5333,1430.0911c-234.5996,0-338.9652-65.117-338.9652-211.4073,0-165.9146,121.3139-237.2757,401.4062-237.2757,296.1486,0,406.7583,70.4691,406.7583,258.684h-487.9315v32.1125l480.7954,1.784v156.1024h-462.0631Zm-18.7323-239.9517h157.8864v-40.1406h-157.8864v40.1406Z"/>
      </g>
      <g>
        <g onMouseEnter={() => setTimelineIsHovered(true)} onMouseLeave={() => setTimelineIsHovered(false)} ref={timelineRef}>
          <StyledPath className="timeline" isHovered={isTimelineHovered}
                d="M3380.45,1435.0508v-196.7454l330.3492-192.1699h-312.0473v-196.7454h851.0381v196.7454l-344.9907,192.1699h344.9907v196.7454h-869.34Z"/>
          <StyledPath className="timeline" isHovered={isTimelineHovered}
                d="M4652.4264,1435.0508c-240.6699,0-347.736-66.8019-347.736-216.8775,0-170.2076,124.4529-243.4152,411.7926-243.4152,303.8115,0,417.2832,72.2925,417.2832,265.3775h-500.5568v32.9434l493.2361,1.8302v160.1416h-474.0191Zm-19.217-246.1605h161.9718v-41.1793h-161.9718v41.1793Z"/>
          <StyledPath className="timeline" isHovered={isTimelineHovered}
                d="M5228.9235,954.6261v-105.2359h323.0284v105.2359h-323.0284Zm.9151,480.4247v-442.9059h322.1134v442.9059h-322.1134Z"/>
          <StyledPath className="timeline" isHovered={isTimelineHovered}
                d="M6246.5,1172.4186h-227.8586v39.3491l227.8586,1.8302v231.519c-43.9245,4.5755-254.3963,5.4906-258.9718,5.4906-231.519,0-291.0001-36.6038-291.0001-204.0661v-74.1227h-53.0755v-181.1888h53.0755v-96.0849h322.1134v96.0849h227.8586v181.1888Z"/>
          <StyledPath className="timeline" isHovered={isTimelineHovered}
                d="M6660.1157,1435.0508c-240.6699,0-347.736-66.8019-347.736-216.8775,0-170.2076,124.4529-243.4152,411.7926-243.4152,303.8115,0,417.2832,72.2925,417.2832,265.3775h-500.5568v32.9434l493.2361,1.8302v160.1416h-474.0191Zm-19.217-246.1605h161.9718v-41.1793h-161.9718v41.1793Z"/>
          <StyledPath className="timeline" isHovered={isTimelineHovered}
                d="M8030,1209.0224v226.0284h-322.1134v-201.3208h-158.3114v201.3208h-322.1134v-443.821h316.6228l-6.4057,140.9246,117.1321-153.7359c42.0944-3.6604,79.6132-5.4906,112.5567-5.4906,195.8303,0,262.6322,53.9906,262.6322,236.0944Z"/>
        </g>
      </g>
    </StyledSVG>
  )
}

function EnSVG() {
  const [isProgramHovered, setProgramIsHovered] = useState(false);
  const [isInfoHovered, setInfoIsHovered] = useState(false);
  const [isLocationsHovered, setLocationsIsHovered] = useState(false);
  const [isTimelineHovered, setTimelineIsHovered] = useState(false);

  const programRef = useRef(null);
  const infoRef = useRef(null);
  const locationsRef = useRef(null);
  const timelineRef = useRef(null);

  const router = useRouter()

  useEffect(() => {
    infoRef.current.addEventListener('click',  () => {});
    programRef.current.addEventListener('click',  () => {router.push('/en/program')});
    locationsRef.current.addEventListener('click',  () => {router.push('/en/locations')});
    timelineRef.current.addEventListener('click',  () => {router.push('/en/timeline')});
  }, [])

  return (
    <StyledSVG id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="8449.3731" height="1356.9904"
         viewBox="0 0 8449.3731 1356.9904">
      <g onMouseEnter={() => setProgramIsHovered(true)} onMouseLeave={() => setProgramIsHovered(false)} ref={programRef}>
        <StyledPath className="program" isHovered={isProgramHovered}
              d="M0,724.5504V0H757.3816C1031.3522,0,1138.9026,74.7193,1138.9026,267.178c0,225.2899-92.833,298.877-381.5211,301.1413H407.5596v156.2312H0ZM407.5596,340.7651h270.5743v-98.4936H407.5596v98.4936Z"/>
        <StyledPath className="program" isHovered={isProgramHovered}
              d="M2029.8591,175.4771V509.4495h-401.899v215.1009h-398.5027V175.4771h391.7101l-7.9248,174.3449,143.778-174.3449h272.8385Z"/>
        <StyledPath className="program" isHovered={isProgramHovered}
              d="M2120.4124,456.2403c0-201.5156,159.6275-290.9523,520.7706-290.9523,358.8789,0,518.5064,89.4367,518.5064,290.9523,0,202.6477-157.3633,290.9523-518.5064,290.9523s-520.7706-89.4367-520.7706-290.9523Zm405.2954,48.6807h212.8367v-96.2293h-212.8367v96.2293Z"/>
        <StyledPath className="program" isHovered={isProgramHovered}
              d="M3905.7465,175.4771h391.7101v453.9761c0,204.9119-73.5871,273.9706-289.8202,273.9706h-675.8697v-241.1394h567.1871v-39.6238h-307.9339c-259.2532,0-363.4073-66.7945-363.4073-234.3468,0-165.2881,129.0605-229.8183,459.6367-229.8183,24.9064,0,53.2092,0,81.5119,1.1321l142.6459,144.9101h2.2642l-7.9248-129.0605Zm-228.6862,278.4991h221.8936v-66.7945h-221.8936v66.7945Z"/>
        <StyledPath className="program" isHovered={isProgramHovered}
              d="M5245.0304,175.4771V509.4495h-401.899v215.1009h-398.5027V175.4771h391.7101l-7.9248,174.3449,143.778-174.3449h272.8385Z"/>
        <StyledPath className="program" isHovered={isProgramHovered}
              d="M5978.6222,175.4771c255.8569,0,407.5596,91.7009,407.5596,246.8v302.2734h-395.1064v-91.7009l-150.5706,91.7009h-234.3468c-209.4403,0-247.9321-44.1523-247.9321-281.8954h632.8495v-43.0202h-630.5853V175.4771h618.1321Zm-184.5339,405.2954l196.9871-9.0569v-54.3413h-196.9871v63.3982Z"/>
        <StyledPath className="program" isHovered={isProgramHovered}
              d="M8030,444.9192v279.6312h-398.5027v-249.0642h-161.8917v249.0642h-398.5027v-249.0642h-161.8917v249.0642h-398.5027V175.4771h391.7101l-7.9248,174.3449,144.9101-190.1945c47.5486-4.5284,90.5688-6.7927,127.9284-6.7927,185.666,0,266.0458,46.4165,292.0844,191.3266l140.3816-184.5339c47.5486-4.5284,90.5688-6.7927,127.9284-6.7927,223.0257,0,302.2734,67.9266,302.2734,292.0844Z"/>
      </g>
      <g onMouseEnter={() => setTimelineIsHovered(true)} onMouseLeave={() => setTimelineIsHovered(false)} ref={timelineRef}>
        <StyledPath className="timeline" isHovered={isTimelineHovered}
              d="M167.6479,1351.6513v-200.7503H0v-140.9523H526.9696v140.9523h-167.6479v200.7503H167.6479Z"/>
        <StyledPath className="timeline" isHovered={isTimelineHovered}
              d="M575.0176,1071.3483v-61.3997h188.4704v61.3997h-188.4704Zm.5339,280.303v-258.4126h187.9365v258.4126h-187.9365Z"/>
        <StyledPath className="timeline" isHovered={isTimelineHovered}
              d="M1549.402,1219.7754v131.8759h-187.9365v-117.4603h-76.3492v117.4603h-187.9365v-117.4603h-76.3492v117.4603h-187.9365v-258.9466h184.733l-3.7374,82.2222,68.3405-89.6969c22.4242-2.1356,42.7128-3.2035,60.3319-3.2035,87.5613,0,125.4689,21.8903,137.7489,90.2309l66.2049-87.0274c22.4242-2.1356,42.7128-3.2035,60.3319-3.2035,105.1804,0,142.5541,32.0346,142.5541,137.7489Z"/>
        <StyledPath className="timeline" isHovered={isTimelineHovered}
              d="M1794.9985,1351.6513c-140.4184,0-202.886-38.9755-202.886-126.5368,0-99.3073,72.6118-142.0202,240.2597-142.0202,177.2583,0,243.4631,42.1789,243.4631,154.834h-292.049v19.2208l287.7777,1.0678v93.4343h-276.5656Zm-11.2121-143.6219h94.5021v-24.026h-94.5021v24.026Z"/>
        <StyledPath className="timeline" isHovered={isTimelineHovered} d="M2131.3545,1351.6513v-341.7027h187.9365v341.7027h-187.9365Z"/>
        <StyledPath className="timeline" isHovered={isTimelineHovered}
              d="M2394.0324,1071.3483v-61.3997h188.4704v61.3997h-188.4704Zm.5339,280.303v-258.4126h187.9365v258.4126h-187.9365Z"/>
        <StyledPath className="timeline" isHovered={isTimelineHovered}
              d="M3120.149,1219.7754v131.8759h-187.9365v-117.4603h-92.3665v117.4603h-187.9365v-258.9466h184.733l-3.7374,82.2222,68.3405-89.6969c24.5599-2.1356,46.4502-3.2035,65.671-3.2035,114.2568,0,153.2323,31.5007,153.2323,137.7489Z"/>
        <StyledPath className="timeline" isHovered={isTimelineHovered}
              d="M3365.7473,1351.6513c-140.4184,0-202.886-38.9755-202.886-126.5368,0-99.3073,72.6118-142.0202,240.2597-142.0202,177.2583,0,243.4631,42.1789,243.4631,154.834h-292.049v19.2208l287.7777,1.0678v93.4343h-276.5656Zm-11.2121-143.6219h94.5021v-24.026h-94.5021v24.026Z"/>
      </g>
      <g onMouseEnter={() => setLocationsIsHovered(true)} onMouseLeave={() => setLocationsIsHovered(false)} ref={locationsRef}>
        <StyledPath className="locations" isHovered={isLocationsHovered}
              d="M3818.5386,1346.3122v-341.7027h192.2077v202.352l216.2337-1.6017v140.9523h-408.4415Z"/>
        <StyledPath className="locations" isHovered={isLocationsHovered}
              d="M4260.6113,1219.7754c0-95.0361,75.2814-137.215,245.5988-137.215,169.2496,0,244.531,42.1789,244.531,137.215,0,95.57-74.2135,137.215-244.531,137.215s-245.5988-42.1789-245.5988-137.215Zm191.1399,22.9581h100.3752v-45.3824h-100.3752v45.3824Z"/>
        <StyledPath className="locations" isHovered={isLocationsHovered}
              d="M4979.787,1346.3122c-120.6638,0-197.0129-38.4415-197.0129-130.2741,0-91.2987,75.2814-128.6724,197.0129-128.6724h276.0317v118.5281h-276.5656v25.6277l276.5656,1.0678v113.7229h-276.0317Z"/>
        <StyledPath className="locations" isHovered={isLocationsHovered}
              d="M5603.921,1087.3656c120.6638,0,192.2077,43.2467,192.2077,116.3925v142.5541h-186.3347v-43.2467l-71.0101,43.2467h-110.5195c-98.7734,0-116.9264-20.8225-116.9264-132.9437h298.4559v-20.2886h-297.3881v-105.7143h291.5151Zm-87.0274,191.1399l92.9004-4.2713v-25.6277h-92.9004v29.899Z"/>
        <StyledPath className="locations" isHovered={isLocationsHovered}
              d="M6185.3473,1193.0799h-132.9437v22.9581l132.9437,1.0678v135.0793c-25.6277,2.6696-148.4271,3.2035-151.0966,3.2035-135.0793,0-169.7835-21.3564-169.7835-119.062v-43.2467h-30.9668v-105.7143h30.9668v-56.0606h187.9365v56.0606h132.9437v105.7143Z"/>
        <StyledPath className="locations" isHovered={isLocationsHovered}
              d="M6245.1417,1066.0092v-61.3997h188.4704v61.3997h-188.4704Zm.5339,280.303v-258.4126h187.9365v258.4126h-187.9365Z"/>
        <StyledPath className="locations" isHovered={isLocationsHovered}
              d="M6487.001,1219.7754c0-95.0361,75.2814-137.215,245.5988-137.215,169.2496,0,244.531,42.1789,244.531,137.215,0,95.57-74.2135,137.215-244.531,137.215s-245.5988-42.1789-245.5988-137.215Zm191.1399,22.9581h100.3752v-45.3824h-100.3752v45.3824Z"/>
        <StyledPath className="locations" isHovered={isLocationsHovered}
              d="M7493.42,1214.4363v131.8759h-187.9359v-117.4603h-92.3665v117.4603h-187.9365v-258.9466h184.733l-3.7374,82.2222,68.3405-89.6969c24.5599-2.1356,46.4502-3.2035,65.671-3.2035,114.2568,0,153.2318,31.5007,153.2318,137.7489Z"/>
        <StyledPath className="locations" isHovered={isLocationsHovered}
              d="M7546.8111,1346.3122v-101.443l264.8196,4.2713v-19.7547h-72.6118c-138.8167,0-206.0894-20.8225-206.0894-64.0692,0-52.3232,72.6118-77.9509,219.9711-77.9509h261.0822v94.5021h-250.404v14.9495h101.9769c112.6551,0,164.4444,24.5599,164.4444,77.417,0,49.6537-51.7893,72.0779-166.0461,72.0779h-317.1428Z"/>
      </g>
      <g onMouseEnter={() => setInfoIsHovered(true)} onMouseLeave={() => setInfoIsHovered(false)} ref={infoRef}>
        <StyledPath className="info" d="M8440.4249,1356.9904h-286.3451v-161.964h286.3451v161.964Z"/>
        <StyledPath className="info" isHovered={isInfoHovered}
              d="M8329.9135,740.0109h110.5113v157.4903h-98.4311v77.4027h98.4311v157.4898h-216.9959v-154.8053l68.9018,3.1319-75.1656-57.269c-1.7897-20.5811-2.6845-38.925-2.6845-55.032,0-95.7471,26.3974-128.4083,115.4329-128.4083Z"/>
        <StyledPath className="info" isHovered={isInfoHovered}
              d="M8213.1384,428.6115l.8948,93.0622h9.3957v-93.0622h88.588v93.0622h129.3027v157.4898h-129.3027v29.5293h-88.588v-29.9768c-55.032-3.1319-75.1656-34.0035-75.1656-125.276,0-39.8199,.8948-64.8751,5.369-124.8286h59.5061Z"/>
        <StyledPath className="info" isHovered={isInfoHovered}
              d="M8334.3877,410.7263c-79.6397,0-114.9855-63.0854-114.9855-205.8106,0-141.8303,35.3457-204.9157,114.9855-204.9157,80.0872,0,114.9855,62.1906,114.9855,204.9157s-35.3457,205.8106-114.9855,205.8106Zm19.2388-160.1743v-84.1139h-38.0302v84.1139h38.0302Z"/>
      </g>
    </StyledSVG>
  )
}

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  
  height: 100%;
  min-height: 100%;
  max-height: 100%;
`;

const SVGContainer = styled.div`
  height: 33vw;
  min-height: 33vw;
  max-height: 33vw;
`;

const StyledSVG = styled.svg`
  width: 100%;
  min-width: 100%;
  max-width: 100%;

  height: 33vw;
  min-height: 33vw;
  max-height: 33vw;
`;

const StyledPath = styled.path`
  fill: ${({ isHovered }) => (isHovered ? "#fff" : "none")};
  stroke: #fff;
  stroke-width: 1px;
  vector-effect: non-scaling-stroke;
 
  pointer-events: all;
`;
