import React from "react";
import {FormattedMessage, useIntl} from "react-intl";
import { useRouter } from "next/router";
import Link from 'next/link'

import styles from '@/styles/localization/Links.module.css'


export function SwitchLocalizationLink () {
  const router = useRouter();
  const language = useIntl();

  return (
    <Link href={router.asPath} locale={language.locale === 'de' ? 'en' : 'de'}>
      <FormattedMessage id="other.language.abbreviation" />
    </Link>
  )
}

export function LocalizedLink ({ href, children } ) {
  const language = useIntl();

  return (
    <Link className={styles.link} href={href} locale={language.locale}>
      {children}
    </Link>
  )
}

export function TimelineLink ({ children }) {
  return (
    <LocalizedLink href="/timeline">
      {children}
    </LocalizedLink>
  )
}

export function LocationsLink ({ children }) {
  return (
    <LocalizedLink href="/locations">
      {children}
    </LocalizedLink>
  )
}

export function ProgramLink ({ children }) {
  return (
    <LocalizedLink href="/program">
      {children}
    </LocalizedLink>
  )
}


export function ContactLink ({ children }) {
  return (
    <LocalizedLink href="/contact">
      {children}
    </LocalizedLink>
  )
}

export function ImprintLink ({ children }) {
  return (
    <LocalizedLink href="/imprint">
      {children}
    </LocalizedLink>
  )
}

export function FaqLink ({ children }) {
  return (
    <LocalizedLink href="/faq">
      {children}
    </LocalizedLink>
  )
}