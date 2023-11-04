import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - DHISHBA 2023',
    default: 'DHISHNA - THE REMARKABLE REVIVAL',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-black antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>
            {children}
        </RootLayout>
      </body>
    </html>
  )
}
