import React from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

import styles from "@/styles/localization/Links.module.css";

import { useLinkDispatch } from "@/providers/link";

export function SwitchLocalizationLink() {
  const dispatch = useLinkDispatch()
  const router = useRouter();
  const language = useIntl();

  return (
    <SwitchLocalizationWrapper>
      <SwitchLocalizationLinkContainer selected={language.locale === "de"}>
        <Link onClick={() => dispatch({type: 'clicked'})} href={router.asPath} locale={"de"}>
          DE
        </Link>
      </SwitchLocalizationLinkContainer>
      <SlashContainer>&nbsp;/&nbsp;</SlashContainer>
      <SwitchLocalizationLinkContainer selected={language.locale === "en"}>
        <Link onClick={() => dispatch({type: 'clicked'})} href={router.asPath} locale={"en"}>
          EN
        </Link>
      </SwitchLocalizationLinkContainer>
    </SwitchLocalizationWrapper>
  );
}

const SwitchLocalizationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
  font-size: ${({ theme }) => theme.localization.fontSize};
  color: ${({ theme }) => theme.localization.color};
`;

const SlashContainer = styled.div`
  cursor: default;
`;

const SwitchLocalizationLinkContainer = styled.div`
  > a {
    color: ${({ theme, selected }) =>
      selected ? "var(--color-pink) !important" : theme.localization.color};
  }

  > a:hover {
    color: var(--color-pink) !important;
  }
`;

export function LocalizedLink({ href, children }) {
  const dispatch = useLinkDispatch()
  const language = useIntl();

  return (
    <Link onClick={() => dispatch({type: 'clicked'})} className={styles.link} href={href} locale={language.locale}>
      {children}
    </Link>
  );
}

export function TimelineLink({ children }) {
  return <LocalizedLink href="/timeline">{children}</LocalizedLink>;
}

export function LocationsLink({ children }) {
  return <LocalizedLink href="/locations">{children}</LocalizedLink>;
}

export function ProgramLink({ children }) {
  return <LocalizedLink href="/program">{children}</LocalizedLink>;
}

export function SavedProjectsLink({ children }) {
  return <LocalizedLink href="/projects/saved">{children}</LocalizedLink>;
}

export function ContactLink({ children }) {
  return <LocalizedLink href="/contact">{children}</LocalizedLink>;
}

export function ImprintLink({ children }) {
  return <LocalizedLink href="/imprint">{children}</LocalizedLink>;
}

export function FaqLink({ children }) {
  return <LocalizedLink href="/faq">{children}</LocalizedLink>;
}
