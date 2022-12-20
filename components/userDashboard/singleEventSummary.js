import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';
import eventStyles from '../../styles/eventStyles.module.css';
import componentStyles from '../../styles/components.module.css';
import Link from 'next/link';
import React from 'react';

function CalendarView(props){
  return(
    <div className={eventStyles.dashboardEventBoxDate}>
      <div className={eventStyles.dashboardEventBoxMonth}>{props.eventMonth}</div>
      <div className={eventStyles.dashboardEventBoxDay}>{props.eventDay}</div>
    </div>
  );
}

function RenderIcon(props){
  let imgSrc = "/images/clockIcon.png";
  let altText = "Schedule Time";

  if(props.iconReason === "link"){
    imgSrc = "/images/cameraIcon.png";
    altText = "Acess the Zoom Link";
  }
  if(props.iconReason === "participants") {
    imgSrc = "/images/participantIcon.png";
    altText = "Registered and confirmed participants";
  }

  return(
    <Image
      className = {eventStyles.dashboardEventMetaIcon}
      src = {imgSrc}
      height = {25}
      width = {25}
      alt = {altText}
      title= {altText}
    />
  );

}

function RenderAttendanceButton(props){

  return(
    <button
      className={props.buttonClass}
      onClick = {props.onClick}>
      &nbsp;
    </button>
  );
}


function EventMeta(props){
  return(
    <div className={eventStyles.dashboardEventBoxMeta}>
      <span className={eventStyles.dashboardEventBoxTime}>
        <RenderIcon
          iconReason = "time"
        />
        {props.eventTime}
      </span>
      <span className={eventStyles.dashboardEventBoxLink}>
        <RenderIcon
          iconReason = "link"
        />
        <Link href="https://zoom.link/">{props.eventLink}</Link>
      </span>
      <span className={eventStyles.dashboardEventBoxParticipants}>
        <RenderIcon
          iconReason = "participants"
        />{props.participants}
      </span>
      <RenderAttendanceButton
        attends = {props.attends}
        onClick = {props.activateClick}
        buttonClass = {props.buttonClass}
      />
    </div>
  );
}

export default class SingleEventSummary extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      eventMonth: "October",
      eventDay: "18",
      eventTime: "6.00pm - 7.30pm",
      eventLink: "https://zoom.link/",
      participants: 7,
      attends: Array(5).fill(false),
      eventName: "Better Communication",
      questCode: "02PR.01-SS06a",
      eventID: "02PR.01-SS06a-10",
      cssClass: Array(5).fill(componentStyles.dashboardEventBoxRegister),
    };
  }

  registerAttend(eventsNo){

    const buttonCssClass = this.state.cssClass.slice();
    const activeEventsNo = this.state.attends.slice();

    for(let i = 0; i < activeEventsNo.length; i++){
      if( i === eventsNo) {
        if(activeEventsNo[i] === true ){
          activeEventsNo[i] = false;
          buttonCssClass[i] = componentStyles.dashboardEventBoxRegister;
        } else {
          activeEventsNo[i] = true;
          buttonCssClass[i] = componentStyles.dashboardEventBoxRegisterActive;
        }
      }
    }



    this.setState({
      attends: activeEventsNo,
      cssClass: buttonCssClass,
    })

  }

  renderSingleEvent(eventsNo){

    return (
      <div className={eventStyles.dashboardEventBox}>
        <CalendarView
          eventMonth = {this.state.eventMonth}
          eventDay = {this.state.eventDay}
        />
        <div className={eventStyles.dashboardEventBoxContent}>
          <EventMeta
            eventTime = {this.state.eventTime}
            eventLink = "Access Zoom link"
            participants = {this.state.participants}
            attends = {this.state.attends[eventsNo]}
            activateClick = {() => this.registerAttend(eventsNo)}
            buttonClass = {this.state.cssClass[eventsNo]}
          />
          <div className={eventStyles.dashboardEventBoxTitle}>
            <h2>{this.state.eventName}</h2>
          </div>
        </div>
      </div>
    );

  }

  render(){
    return (
      <>
        {this.renderSingleEvent(0)}
        {this.renderSingleEvent(1)}
        {this.renderSingleEvent(2)}
        {this.renderSingleEvent(3)}
        {this.renderSingleEvent(4)}
      </>
    );
  }
}
