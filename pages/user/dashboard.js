import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import SingleEventSummary from '../../components/userDashboard/singleEventSummary.js';

export default function Dashboard({ children, home }) {
  return (
    <>
      <Head>
        <title>Welcome to your User Dashboard</title>
      </Head>
      <main className={utilStyles.mainBackground}>
        <section className="upcoming-event-overview">
          <SingleEventSummary />
        </section>
      </main>
    </>
  );
}
