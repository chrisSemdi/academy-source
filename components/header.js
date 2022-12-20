import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';


function NavigationItem (props){
  let imgSrc = "/images/"+props.route+"Icon.png";
  let linkDestination = "/"+props.route;

  return(
    <Link href= {linkDestination}>
      <Image
        priority
        className = {utilStyles.navigationIcon}
        src = {imgSrc}
        height = {35}
        width = {35}
        alt = {props.route}
        title= {props.route}
      />
    </Link>
  );
}


export default function HeaderBar(){
  return (
    <header>
      <div className={utilStyles.mainLogo}>
        <Link href="/">
          <Image
            priority
            src = '/images/headerLogo.png'
            height = {52}
            width = {251}
            alt = 'Academy for Agile Coaches'
            title= 'Academy for Agile Coaches'
          />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavigationItem
              route = "dashboard"
            />
          </li>
          <li>
            <NavigationItem
              route = "community"
            />
          </li>
          <li>
            <NavigationItem
              route = "calendar"
            />
          </li>
          <li>
            <NavigationItem
              route = "studentDirectory"
            />
          </li>
          <li>
            <NavigationItem
              route = "account"
            />
          </li>
        </ul>
      </nav>
    </header>
);
}
