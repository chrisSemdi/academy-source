import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import userStyles from '../styles/user.module.css';
import Link from 'next/link';

function UserAvatar(props){
  let userImgSrc = "/images/avatar"+props.username+".jpg";
  let aspirationImgSrc = "/images/aspiration"+props.useraspiration+".png";
  let altText = "HP from " + props.userFullName;
  return(
    <div className = {userStyles.sidebarProfileInfo}>
      <div className = {userStyles.sideBarUserLevel}>
        <div className = {[userStyles.userLevel, userStyles.level1].join(' ')}></div>
        <div className = {[userStyles.userLevel, userStyles.level2].join(' ')}></div>
        <div className = {[userStyles.userLevel, userStyles.level3].join(' ')}></div>
        <div className = {[userStyles.userLevel, userStyles.level4].join(' ')}></div>
        <div className = {[userStyles.userLevel, userStyles.level5].join(' ')}></div>
        <div className = {[userStyles.userLevel, userStyles.level6].join(' ')}></div>
      </div>
      <Image
        className = {userStyles.sidebarAvatar}
        src = {userImgSrc}
        height = {121}
        width = {121}
        alt = {props.userFullName}
        title = {props.userFullName}
      />
      <div className = {userStyles.sidebarUserInfo}>
        <Image
          src = {aspirationImgSrc}
          height = {33}
          width = {33}
          alt = {altText}
        />
         {props.userFullName}
      </div>
    </div>
  );
}

function HealthMeter(props){

  return(
    <div>
      <meter className={userStyles.healthpoints}
        in="10" max="100"
        low="50" high="85" optimum="100"
        value="90">90%
      </meter>
    </div>
  );
}

function XPIcon(props){
  let width = 22;
  let height = 22;
  let order = props.order ? props.order : '';

  if(props.style == "header"){
    width = 35;
    height = 35;
  }

  let altText = props.category+'Icon'+props.order+'.png';
  let imgSrc = '/images/experiencePoints/'+props.category+'Icon'+order+'.png';

  return(
    <Image
      src = {imgSrc}
      height = {height}
      width = {width}
      alt = {altText}
      title  ={altText}
    />
  );
}

function XPSubCat(props){
  let cssClass = userStyles.xpSubCat;

  if(props.category == "activities"){
    cssClass = userStyles.xpSubCatRight;
  }

  return(
    <div className={cssClass}>
      <span> 8 500 </span><XPIcon style="row" category={props.category} order={props.order} />
    </div>
  );
}

function XPColumn(props){
  let cssClass = userStyles.xpColumn;

  if(props.category == "activities"){
    cssClass = userStyles.xpColumnRight;
  }

  return(
    <div className={cssClass}>
      44 000 <XPIcon style="header" category={props.category} />
      <div className={userStyles.xpSubCats}>
        <XPSubCat category={props.category} order={1} />
        <XPSubCat category={props.category} order={2} />
        <XPSubCat category={props.category} order={3} />
        <XPSubCat category={props.category} order={4} />
        <XPSubCat category={props.category} order={5} />
      </div>
    </div>
  );
}

function ExperiencePoints(props){

  return(
    <div>
      <div className={userStyles.xpHeading}>80 000 xP</div>
      <div className={userStyles.xpTable}>
        <XPColumn category="competences" />
        <XPColumn category="activities" />
      </div>
    </div>
  );
}

export default function Sidebar(){
  return(
    <aside>
      <UserAvatar
        userFullName = "Chris Kruppa"
        username = "Chris"
        useraspiration = "Wizard"
      />
      <HealthMeter />
      <ExperiencePoints
        username = "Chris"
      />
    </aside>
  );
}
