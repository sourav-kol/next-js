import React from 'react';

 const metadata = {
  title: 'Story',
  description: 'Tell your story',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
