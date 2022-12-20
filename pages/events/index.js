import { read, write } from '../api/dbQueryConnector.js';
import Link from 'next/link';

export async function getStaticProps() {

  const res = await read(`
    MATCH (e:Event)
    RETURN e.name AS events
  `);

  const events = JSON.stringify(res);

  return {
    props: {
      events,
    }
  }
}


export default function EventsList({ events }) {
  events = JSON.parse(events);
  return (
    <ul>
      {events.map(ev => <li key={Math.random()}>
        <Link href={`/event/${ev.name}`}>{ev.name}</Link>
      </li>)}
    </ul>
  )
}
