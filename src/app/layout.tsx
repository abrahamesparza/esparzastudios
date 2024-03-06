import styles from './page.module.css';

export const metadata = {
  title: 'Esparza Studios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={styles.html} lang="en">
      <body>{children}</body>
    </html>
  )
}
