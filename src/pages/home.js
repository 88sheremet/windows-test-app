import React from "react"
import Menu from "../component/menu"
import Languageoption from '../component/language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
import { NavLink } from "react-router-dom"
const Home = () => {
    const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
    return(
        <div style={{marginTop:'50px'}}>
            <Menu/>
            <Languageoption onChange={(e)=> handleClick(e)}/>
            {/* <h1>{t('welcome')} {t('home')} || Seema {t('holiday')} Developer</h1> */}
            <ul >
 <li key={1} >
 {/* <Avatar icon={<ConferenceRoomRegular />} shape="square" aria-label="Room" /> */}
 <NavLink to='/system/'>
   <h3 >{t('System')}</h3>
   <p>{t('Screen')}</p>
 </NavLink>
</li>
<li key={2}>
{/* <Avatar icon={<PersonCallRegular />} aria-label="Phone Contact" /> */}
 <NavLink to='/devices'>
   <h3 >{t('Devices')}</h3>
   <p>{t('bluetooth, printers, mouse')}</p>
 </NavLink>
</li>
<li key={3} >
{/* <Avatar icon={<GuestRegular />} aria-label="Guest" /> */}
 <NavLink to='/telephone'>
   <h3 >{t('Telephone')}</h3>
   <p>{t('Link')}</p>
 </NavLink>
</li>
<li key={4}>
{/* <Avatar icon={<PeopleTeamRegular />} shape="square" aria-label="Team" /> */}
 <NavLink to={`/network`}>
   <h3 >{t('Network')}</h3>
   <p>{t('Wi-fi')}</p>
 </NavLink>
</li>
<li key={5} >
{/* <Avatar icon={<PeopleRegular />} aria-label="Group" /> */}
     <NavLink to='/personalization'>
       <h3 >{t('Personalization')}</h3>
       <p>{t('Background')}</p>
     </NavLink>
   </li>
   <li >
   {/* <Avatar icon={<CalendarLtrRegular />} aria-label="Meeting" /> */}
     <NavLink to='/applications'>
       <h3 >{t('Applications')}</h3>
       <p>{t('Delete')}</p>
     </NavLink>
   </li>
   <li >
   {/* <Avatar icon={<PeopleTeamRegular />} shape="square" aria-label="Team" /> */}
     <NavLink to='/accounts'>
       <h3 >{t('Accounts')}</h3>
       <p>{t('Accountsand')}</p>
     </NavLink>
   </li>
   <li >
   {/* <Avatar icon={<CalendarLtrRegular />} aria-label="Meeting" /> */}
     <NavLink to='/time'>
       <h3 >{t('Time')}</h3>
       <p>{t('Time')}</p>
     </NavLink>
   </li>
   <li key={9} >
   {/* <Avatar icon={<BriefcaseRegular />} shape="square" aria-label="Tenant" /> */}
     <NavLink to='/games'>
       <h3 >{t('Games')}</h3>
       <p>{t('Xbox and other')}</p>
     </NavLink>
   </li>
   <li key={10} >
   {/* <Avatar icon={<GuestRegular />} aria-label="Guest" /> */}
     <NavLink to='/search'>
       <h3 >{t('Search')}</h3>
       <p>{t('Searchmyfiles')}</p>
     </NavLink>
   </li>
   <li key={11} >
   {/* <Avatar icon={<ConferenceRoomRegular />} shape="square" aria-label="Room" /> */}
     <NavLink to='/update'>
       <h3 >{t('Updateandsecurity')}</h3>
       <p>{t('Updatewindows')}</p>
     </NavLink>
   </li>
   <li key={12} >
   {/* <Avatar icon={<PersonCallRegular />} aria-label="Phone Contact" /> */}
     <NavLink to='/confidential'>
       <h3 >{t('Confidential')}</h3>
       <p>{t('Cameramicrophone')}</p>
     </NavLink>
   </li>
  </ul>
            </div>
        
    )
}
export default Home