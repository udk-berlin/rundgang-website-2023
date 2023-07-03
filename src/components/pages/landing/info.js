import styled from "styled-components";
import { useIntl } from "react-intl";

const TEXTS = {
  de: [
    'Vom 21. bis 23. Juli lädt die Universität der Künste Berlin zum Rundgang – Tage der offenen Tür. Werkstätten, Ateliers, Studios und Probenräume der Fakultäten Bildende Kunst, Gestaltung, Musik und Darstellende Kunst sowie das Hochschulübergreifende Zentrum Tanz Berlin, das Jazz-Instituts Berlin und das Berlin Career Colleges öffnen zum Ende des akademischen Jahres ihre Türen. Von Malerei, Skulptur und Performance über Designentwürfe, Modenschau und Filmscreenings bis hin zu Konzerten, Tanz und Soundinstallationen zeigen Studierende Ergebnisse und Prozesse ihrer künstlerischen Arbeit.',
    'Zum Rundgang – Tage der offenen Tür sind alle eingeladen, die die Hochschule als Ort der Begegnung und des Diskurses für Künste und Wissenschaft kennenlernen möchten. Ein vielfältiges Beratungsangebot bietet Studieninteressierten darüber hinaus konkrete Einblicke in das vielfältige Angebot der Universität der Künste Berlin.',
    'Die Rundgang-Plattform bietet einen Überblick zum umfassenden Programm des Rundgangs. Sie bietet Orientierung und detaillierte Informationen zu den verschiedenen Projekten, Standorten und Programmpunkten des Rundgangs.',
    'Die Universität der Künste Berlin freut sich mit ihren Mitarbeitenden, Studierenden und Lehrenden darauf, Sie beim Rundgang 2023 an der Universität der Künste begrüßen zu dürfen!'
  ],
  en: [
    'From 21 to 23 July, the Berlin University of the Arts invites you to the Rundgang – Open Days. Workshops, studios and rehearsal rooms of the faculties of Fine Arts, Architecture, Media and Design, Music and Performing Arts as well as the Inter-University Center for Dance Berlin, the Jazz Institute Berlin and the Berlin Career College open their doors at the end of the academic year. From painting, sculpture and performance to design sketches, fashion shows and film screenings to concerts, dance and sound installations, students will show the results and processes of their artistic work.',
    'Everyone who would like to get to know the university as a place of encounter and discourse for the arts and sciences is invited to the Rundgang - Open Days. A wide range of advisory services also offers prospective students concrete insights into the diverse range of courses offered by Berlin University of the Arts.',
    'This platform provides an overview of the comprehensive programme of the Rundgang. It offers orientation and detailed information on the various projects, locations and programme of this years Rundgang.',
    'The Berlin University of the Arts and its staff, students and teachers look forward to welcoming you to the Rundgang 2023 at the Berlin University of the Arts!'
  ]
}

export default function LandingInfo({ infoIsActive, setInfoIsActive }) {
  const language = useIntl()

  let texts = TEXTS.de
  if (language.locale === 'en')
    texts = TEXTS.en

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
  align-items: ${({ theme }) => theme.info.alignItems};

  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  
  backdrop-filter: blur(8px);
  
  cursor: pointer;
`

const TextsContainer = styled.div`
  padding: 2rem 2rem;
  
  display: flex;
  flex-direction: column;
  
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  font-size: ${({ theme }) => theme.info.fontSize};
  
  overflow: scroll;
  
  > div {
    margin-top: 1rem;
  }
`;