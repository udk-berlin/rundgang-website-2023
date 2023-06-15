import {IntlProvider} from 'react-intl';
import {useRouter} from 'next/router';

import english from '/locales/en.json';
import german from '/locales/de.json';

export default function LocalizationProvider({children}) {
    const router = useRouter();
    let language = {}

    if (router.locale === 'en') {
        language.locale = 'en'
        language.messages = english
    } else {
        language.locale = 'de'
        language.messages = german
    }

    return (
        <IntlProvider locale={language.locale} messages={language.messages}>
            {children}
        </IntlProvider>
    );
}