import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './globals.css'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import { Roboto } from 'next/font/google'
import { ReduxProvider } from '@/store/ReduxProvider'
import { ToastContainer } from '@/app/reactToast'
import 'react-toastify/dist/ReactToastify.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import { NextAuthProvider } from './Provider'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.thatsmycollege.com'),
  title: {
    default:'Thats My College',
    template:'%s - Thats My College'
  },
  description: 'Find a best college and Get Admission to start your education',
  openGraph: {
    images: '/logo/tmc_blue.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={`bg-[#e6e6e6]`}>
        <NextAuthProvider>
          <SkeletonTheme baseColor="#cccccc" highlightColor="#a6a6a6">
            <ReduxProvider>
              <Navbar className="bg-gray-800" />
              {children}
              <Footer />
              <ToastContainer />
            </ReduxProvider>
          </SkeletonTheme>
        </NextAuthProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
