import LoaderLayout from '@/components/LoaderLayout'
import { AuthContextProvider } from '@/store/AuthContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<>
    <AuthContextProvider>
      <LoaderLayout>
        <Component {...pageProps} />
      </LoaderLayout>
    </AuthContextProvider>
  </>)
}
