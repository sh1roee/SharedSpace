import { Link } from 'react-router-dom'
import ArtWallIcon from '../assets/ArtWallIcon.svg'
import ChallengesIcon from '../assets/ChallengesIcon.svg'
import FriendsSpaceIcon from '../assets/FriendsSpaceIcon.svg'
import LeaderboardIcon from '../assets/LeaderboardIcon.svg'
import LogoutIcon from '../assets/LogoutIcon.svg'
import NotificationIcon from '../assets/NotificationIcon.svg'

export function NavigationBar() {
  return (
    <nav style = {{ display: 'flex', gap: '1rem', padding: '0.5rem', background: '#FDD9C5' }}>
        <Link to = "/friends-space">
            <img src = {FriendsSpaceIcon} alt = "Friends' Space" height = "30" width = "30"/>
        </Link>

        <Link to = "/art-wall">
            <img src = {ArtWallIcon} alt = "Art Wall" height = "30" width = "30"/>
        </Link>

        <Link to = "/leaderboard">
            <img src = {LeaderboardIcon} alt = "Leaderboard" height = "30" width = "30"/>
        </Link>
        
        <img src = {ChallengesIcon} alt = "Challenges" height = "30" width = "30"/>

        <img src = {NotificationIcon} alt = "Notifications" height = "30" width = "30"/>

        <Link to = "/login">
            <img src = {LogoutIcon} alt = "Logout" height = "30" width = "30"/>
        </Link>
    </nav>
  );
}