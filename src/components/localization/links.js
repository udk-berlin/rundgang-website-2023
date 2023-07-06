import React from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

import styles from "@/styles/localization/Links.module.css";

export function SwitchLocalizationLink({ setIsLinkClicked = (_) => {}}) {
  const router = useRouter();
  const language = useIntl();

  return (
    <SwitchLocalizationWrapper>
      <SwitchLocalizationLinkContainer selected={language.locale === "de"}>
        <Link onClick={() => setIsLinkClicked(true)} href={router.asPath} locale={"de"}>
          DE
        </Link>
      </SwitchLocalizationLinkContainer>
      <SlashContainer>&nbsp;/&nbsp;</SlashContainer>
      <SwitchLocalizationLinkContainer selected={language.locale === "en"}>
        <Link onClick={() => setIsLinkClicked(true)} href={router.asPath} locale={"en"}>
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

export function LocalizedLink({ href, setIsLinkClicked = (_) => {}, children }) {
  const language = useIntl();

  return (
    <Link onClick={() => setIsLinkClicked(true)} className={styles.link} href={href} locale={language.locale}>
      {children}
    </Link>
  );
}

export function TimelineLink({ setIsLinkClicked, children }) {
  return <LocalizedLink setIsLinkClicked={setIsLinkClicked} href="/timeline">{children}</LocalizedLink>;
}

export function LocationsLink({ setIsLinkClicked, children }) {
  return <LocalizedLink setIsLinkClicked={setIsLinkClicked} href="/locations">{children}</LocalizedLink>;
}

export function ProgramLink({ setIsLinkClicked, children }) {
  return <LocalizedLink setIsLinkClicked={setIsLinkClicked} href="/program">{children}</LocalizedLink>;
}

export function SavedProjectsLink({ setIsLinkClicked, children }) {
  return <LocalizedLink setIsLinkClicked={setIsLinkClicked} href="/projects/saved">{children}</LocalizedLink>;
}

export function ContactLink({ setIsLinkClicked, children }) {
  return <LocalizedLink setIsLinkClicked={setIsLinkClicked} href="/contact">{children}</LocalizedLink>;
}

export function ImprintLink({ setIsLinkClicked, children }) {
  return <LocalizedLink setIsLinkClicked={setIsLinkClicked} href="/imprint">{children}</LocalizedLink>;
}

export function FaqLink({ setIsLinkClicked, children }) {
  return <LocalizedLink setIsLinkClicked={setIsLinkClicked} href="/faq">{children}</LocalizedLink>;
}
