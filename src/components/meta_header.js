import Head from "next/head";

export default function MetaHeader() {
  return (
    <Head>
      <title>UdK Rundgang 2023</title>
      <meta name="description" content="UdK Rundgang 2023" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        type="image/x-icon"
        href="/assets/favicon/favicon.ico"
      ></link>
    </Head>
  );
}
