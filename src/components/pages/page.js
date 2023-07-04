import MetaHeader from "@/components/pages/meta_header";
import LocalizationProvider from "@/components/localization/provider";

export default function Page({ children, title, suffix = true }) {
  return (
    <LocalizationProvider>
      <MetaHeader title={title} suffix={suffix} />
      <main>{children}</main>
    </LocalizationProvider>
  );
}
