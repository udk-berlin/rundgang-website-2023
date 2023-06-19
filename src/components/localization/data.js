import {useIntl} from "react-intl";

export default function getLocalizedData(data) {
  const localization = useIntl()
  let localizedData;

  if (localization.locale === 'en') {
    if ('EN' in data) {
      localizedData = data.EN
    } else if ('default' in data) {
      localizedData = data.default
    } else if ('DE' in data) {
      localizedData = data.DE
    }
  } else if ('DE' in data) {
    localizedData = data.DE
  } else if ('default' in data) {
    localizedData = data.default
  } else if ('EN' in data) {
    localizedData = data.EN
  }

  return localizedData
}