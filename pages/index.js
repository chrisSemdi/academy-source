import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from '../components/login.js'

export default function Home() {
  return (
    <div>
      <Head>
         <title>Welcome to the semdi solutions Academy for Agile Coaches</title>
      </Head>
      <Login />
    </div>
  )
}
