import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import SingleEventSummary from '../../components/userDashboard/singleEventSummary.js';
import HeaderBar from '../../components/header.js';
import SideBar from '../../components/sidebar.js';

export default function Dashboard({ children, home }) {
  return (
    <>
      <Head>
        <title>Welcome to your User Dashboard</title>
      </Head>
      <HeaderBar />
      <content>
        <SideBar />
        <main>
          <section className="upcoming-event-overview">
            <SingleEventSummary />
          </section>
        </main>
      </content>
    </>
  );
}
