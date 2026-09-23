'use client'
import {FormEvent,useState} from 'react'
import {useRouter} from 'next/navigation'
import {supabase} from '@/lib/supabase'
export default function Reset(){const [password,setPassword]=useState(''),[message,setMessage]=useState(''),router=useRouter();async function submit(e:FormEvent){e.preventDefault();const {error}=await supabase.auth.updateUser({password});setMessage(error?error.message:'Password updated. You can now continue.');if(!error)setTimeout(()=>router.push('/dashboard'),1200)}return <main className="auth-wrap"><form className="card form" onSubmit={submit}><div className="brand"><span className="mark">SQL</span>SQLERA</div><h1>Set a new password</h1>{message&&<div className="success">{message}</div>}<div className="field"><label>New password</label><input type="password" minLength={8} value={password} onChange={e=>setPassword(e.target.value)} required/></div><button className="btn primary">Update password</button></form></main>}
