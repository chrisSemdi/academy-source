import { read } from '../api/dbQueryConnector.js';

export async function getStaticProps() {

  const res = await read(`
    MATCH (e:Event)
    WHERE e.questCode = "02PR.01-SS06a"
    RETURN e.endTime, e.startTime, e.name, e.eventLink, e.questCode AS events
  `);

  const events = res.map();

  return {
    props: {
      events,
    }
  }
}


export default function EventsList({ events }) {
  return (
    <ul>
      {events.map((ev) => (
        <li>{ ev.name }</li>
      ))}
    </ul>
  )
}
