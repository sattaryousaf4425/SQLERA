import type { Metadata } from 'next'
import './globals.css'
import './tutorials.css'
export const metadata: Metadata = {title:'SQLERA — SQL Interview Preparation',description:'Master SQL through guided practice, assessments, and mock interviews.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
