import Head from "next/head";
import { useIntl } from "react-intl";

export default function MetaHeader({ title, suffix }) {
  const language = useIntl();
  const translatedMessage = language.formatMessage({ id: title });
  return (
    <Head>
      <title>
        {`${translatedMessage} ${suffix ? "– Rundgang 23" : ""}`}
      </title>
      <meta name="description" content="UdK Rundgang 2023" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/x-icon" href="/assets/favicon/favicon.ico" />
    </Head>
  );
}
