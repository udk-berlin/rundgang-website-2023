import React from "react";
import Head from "next/head";
import { useIntl } from "react-intl";

import { useMetaHeaderTitle } from "@/providers/title";

export default function MetaHeader({ titleWithSuffix }) {
  const language = useIntl();
  const title = useMetaHeaderTitle()

  return (
    <Head>
      <title>
        {`${language.formatMessage({ id: title.name })} ${titleWithSuffix ? "– Rundgang 23" : ""}`}
      </title>
      <meta name="description" content="UdK Rundgang 2023" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
    </Head>
  );
}
