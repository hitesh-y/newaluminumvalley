'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/component/Header'
import Script from 'next/script'
import Footer from '@/component/Footer'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Best Luxurious Hotel Booking Template." />
          <meta name="keywords" content="hotel, booking, business, restaurant, spa, resort, landing, agency, corporate, start up, site design, new business site, business template, professional template, classic, modern" />
          <title>Luxurious - Hotel Booking HTML Template</title>
          <link rel="icon" href="./assets/img/logo/favicon.jpg" type="image/x-icon" />
          {/* Css All Plugins Files */}
          <link rel="stylesheet" href="./assets/css/vendor/bootstrap.min.css" />
          <link rel="stylesheet" href="./assets/css/vendor/magnific-popup.css" />
          <link rel="stylesheet" href="./assets/css/vendor/aos.css" />
          <link rel="stylesheet" href="./assets/css/vendor/remixicon.css" />
          <link rel="stylesheet" href="./assets/css/vendor/materialdesignicons.min.css" />
          <link rel="stylesheet" href="./assets/css/vendor/swiper-bundle.min.css" />
          <link rel="stylesheet" href="./assets/css/vendor/semantic.min.css" />
          <link rel="stylesheet" href="./assets/css/vendor/slick.min.css" />
          {/* Main Style */}
          <link rel="stylesheet" href="./assets/css/style.css" />
        </div>

      </head>

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>

      {/* <!-- Plugins JS --> */}
      <Script src="/assets/js/vendor/jquery.min.js" />
      <Script src="/assets/js/vendor/swiper-bundle.min.js" />
      <Script src="/assets/js/vendor/bootstrap.bundle.min.js" />
      <Script src="/assets/js/vendor/magnific-popup.min.js" />
      <Script src="/assets/js/vendor/aos.js" />
      <Script src="/assets/js/vendor/semantic.min.js" />
      <Script src="/assets/js/vendor/slick.min.js" />
      <Script src="/assets/js/vendor/particles.min.js" />
      <Script src="/assets/js/vendor/app.js" />

      {/* <!-- Main-js --> */}
      <Script src="/assets/js/main.js" />
    </html>
  )
}
