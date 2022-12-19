import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from '../components/login.js'
import {read} from './api/dbQueryConnector.js'

export async function getStaticProps() {
  const res = await read(`
    MATCH (g:User)
    WHERE g.username <> '(chris)'

    RETURN g.firstname, g.lastname AS users

    ORDER BY g.username ASC
  `)

  const users = res.map(row => row.users)

  return {
    props: {
      users,
    }
  }
}


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
