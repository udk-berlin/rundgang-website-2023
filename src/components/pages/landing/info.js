import styled from "styled-components";

const TEXTS = {
  de: [
    'Vom 21. bis 23. Juli lädt die Universität der Künste Berlin zum Rundgang – Tage der offenen Tür. Werkstätten, Ateliers, Studios und Probenräume der Fakultäten Bildende Kunst, Gestaltung, Musik und Darstellende Kunst sowie das Hochschulübergreifende Zentrum Tanz Berlin, das Jazz-Instituts Berlin und das Berlin Career Colleges öffnen zum Ende des akademischen Jahres ihre Türen. Von Malerei, Skulptur und Performance über Designentwürfe, Modenschau und Filmscreenings bis hin zu Konzerten, Tanz und Soundinstallationen zeigen Studierende Ergebnisse und Prozesse ihrer künstlerischen Arbeit.',
    'Zum Rundgang – Tage der offenen Tür sind alle eingeladen, die die Hochschule als Ort der Begegnung und des Diskurses für Künste und Wissenschaft kennenlernen möchten. Ein vielfältiges Beratungsangebot bietet Studieninteressierten darüber hinaus konkrete Einblicke in das vielfältige Angebot der Universität der Künste Berlin.',
    'Die Rundgang-Plattform bietet einen Überblick zum umfassenden Programm des Rundgangs. Sie bietet Orientierung und detaillierte Informationen zu den verschiedenen Projekten, Standorten und Programmpunkten des Rundgangs.',
    'Die Universität der Künste Berlin freut sich mit ihren Mitarbeitenden, Studierenden und Lehrenden darauf, Sie beim Rundgang 2023 an der Universität der Künste begrüßen zu dürfen!'
  ]
}

export default function LandingInfo({ infoIsActive, setInfoIsActive }) {
  const texts = TEXTS.de

  return (
    <>
      {
        infoIsActive ?
          <InfoContainer onClick={() => setInfoIsActive(false)}>
            <TextsContainer>
              {
                texts.map(text => {
                  return (<div>{text}</div>)
                })
              }
            </TextsContainer>
          </InfoContainer> :
          <></>
      }
    </>
  )
}

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;

  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  
  backdrop-filter: blur(8px);
`

const TextsContainer = styled.div`
  padding: 2rem 2rem;
  
  display: flex;
  flex-direction: column;
  
  color: white;
  font-weight: 300;
  font-size: 1.2rem;
  
  overflow: hidden;
  
  > div {
    margin-top: 1rem;
  }
`;