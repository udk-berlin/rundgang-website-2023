import React from "react";
import {FormattedMessage, useIntl} from "react-intl";
import { useRouter } from "next/router";
import Link from 'next/link'

export function LocalizedLink ({ href, children } ) {
  const language = useIntl();

  return (
    <Link href={href} locale={language.locale}>
      {children}
    </Link>
  )
}

export function SwitchLocalizationLink () {
  const router = useRouter();
  const language = useIntl();

  return (
    <Link href={router.asPath} locale={language.locale === 'de' ? 'en' : 'de'}>
      <FormattedMessage id="other.language.abbreviation" />
    </Link>
  )
}
