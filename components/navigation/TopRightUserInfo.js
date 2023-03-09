import styles from '../../styles/TopRightUserInfo.module.css';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';

import { loggedStatus, loggedName, loggedToken } from '../../reducers/user';
import { useDispatch, useSelector } from 'react-redux';


function TopRightUserInfo() {
  const dispatch = useDispatch();
  const userConnected = useSelector((state) => state.user.userConnected);

  if (!userConnected) {
    window.location.href = 'http://localhost:3001/login'
    return null
  }

  const handleLogout = () => {
    dispatch(loggedStatus())
    dispatch(loggedName(''))
    dispatch(loggedToken(''))
  }

  return (

    <div className={styles.userInfoWrapper}>

      <Avatar alt="Remy Sharp" src="/images/1.jpg" />
      <span>Cynthia Duval</span>

      <Tooltip title="Messages">
        <Badge badgeContent={4} color="primary" >
            <EmailIcon/>
        </Badge>
      </Tooltip>

      <Tooltip title="Paramètres">
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Se déconnecter">
        <IconButton color="inherit" onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </Tooltip>
            
    </div>

  );
}

export default TopRightUserInfo;