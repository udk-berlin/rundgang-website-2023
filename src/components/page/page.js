import MetaHeader from '@/components/page/meta_header'
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
