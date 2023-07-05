import {useIntl} from "react-intl";

export default function getLocalizedData(data) {
  const localization = useIntl()
  let localizedData;

  if (localization.locale === 'en') {
    if (data.EN) {
      localizedData = data.EN
    } else if (data.default) {
      localizedData = data.default
    } else if (data.DEFAULT) {
      localizedData = data.DEFAULT
    }
  } else if (data.DE) {
      localizedData = data.DE
  } else if (data.default) {
    localizedData = data.default
  } else if (data.DEFAULT) {
    localizedData = data.DEFAULT
  } else if (data.EN) {
    localizedData = data.EN
  }

  return localizedData
}