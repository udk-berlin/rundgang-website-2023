import MetaHeader from '@/components/pages/meta_header'
import LocalizationProvider from "@/components/localization/provider";

export default function Page ({ children }) {
  return (
    <>
      <MetaHeader />
      <main>
          <LocalizationProvider>
            {children}
          </LocalizationProvider>
      </main>
    </>
  )
}
