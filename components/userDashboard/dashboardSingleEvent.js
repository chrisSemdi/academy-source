import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';
import eventStyles from '../../styles/eventStyles.module.css';
import Link from 'next/link';

export default function DashboardSingleEvent() {
  return(
    <div className={eventStyles.dashboardEventBox}>
      <div className={eventStyles.dashboardEventBoxDate}>
        <div className={eventStyles.dashboardEventBoxMonth}>Oct</div>
        <div className={eventStyles.dashboardEventBoxDay}>18</div>
      </div>
      <div className={eventStyles.dashboardEventBoxContent}>
        <div className={eventStyles.dashboardEventVoxMeta}>
          <span className={eventStyles.dashboardEventBoxTime}>6.00pm - 7.30pm </span>
          <span className={eventStyles.dashboardEventBoxLink}>https://zoom.link/ </span>
          <span className={eventStyles.dashboardEventBoxParticipants}>
            <button className={eventStyles.dashboardEventBoxRegister}>&nbsp;</button>
          </span>
        </div>
        <div className={eventStyles.dashboardEventBoxTitle}>
          <h2>Better Communication 1</h2>
        </div>
      </div>
    </div>
  );
}
