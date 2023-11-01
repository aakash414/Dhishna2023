import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Denmark',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-black text-base antialiased">
      <body className="flex min-h-full flex-col">
        <>{children}</>
      </body>
    </html>
  )
}
