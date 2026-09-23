import {Suspense} from 'react'
import AuthForm from '@/components/AuthForm'
export default function AuthPage(){return <main className="auth-wrap"><Suspense fallback={<div>Loading…</div>}><AuthForm/></Suspense></main>}
