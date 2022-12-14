import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {NavLink} from 'react-router-dom'
import styles from './styles.module.css'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ButtonMy from './Button'
import axios from 'axios';




export const ResponsiveAppBar = () => {

  const { user } = useTypedSelector(state => state)
  const isDoctor = user.user.isDoctor
 console.log('UUUUUUSSSSEEEERRR', user);

const pages = [<NavLink to="registration" className={styles.links}>Регистрация</NavLink>, <NavLink to="login" className={styles.links}>Логин</NavLink>];

const settings = [
<NavLink to={`/user/${user.user.id}`} className={styles.linksLk}>Личный кабинет</NavLink>,
<NavLink to="/documents" className={styles.linksLk}>Мои документы</NavLink>,
 <NavLink to="/timetable" className={styles.linksLk}>Моё расписание</NavLink>,
<NavLink to="/appointments" className={styles.linksLk}>Мои записи</NavLink>];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [ava, setAva] = React.useState<null | string>(null);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await axios.post('http://localhost:4000/api/documents/ava', { id: user.user.id, isDoc: user.user.isDoctor });
        console.log('ava', response.data);
        if (response.data) {
          setAva(response.data);
        } else {
          setAva(null);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <div className={styles.containerLogo}>
            <NavLink to="/" className={styles.links}><img className={styles.logo} src="./logo.png" alt=""/></NavLink>
            </div>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                { !user.isAuth ? (
                  <div className={styles.containerItemsBar}>            
                  <Typography className={styles.menuItem} textAlign="center">{pages[0]}</Typography>
                  <Typography className={styles.menuItem} textAlign="center">{pages[1]}</Typography>
                  </div>   
                ): (
                  <div className={styles.containerItemsBar}>            
                  <Typography  textAlign="center"><ButtonMy color={'black'}/></Typography>
                  </div>   
                )


           } 
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <div className={styles.containerLogo}>
            <NavLink to="/" className={styles.links}><img className={styles.logo} src="./logo.png" alt=""/></NavLink>
            </div>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           { !user.isAuth ? (
           <>
           <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>{pages[0]}</Button>
           <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>{pages[1]}</Button>
           </>
           ) : (
            <>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}><ButtonMy color={'white'}/></Button>
            </>
           )

           } 
           
          </Box>
          {user.isAuth && 
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {ava ? (
                    <Avatar alt="Remy Sharp" src={`http://localhost:4000/img/${ava}`}  />
                  ): (
                      <Avatar alt="Remy Sharp" src="./defaultProfile.png" />
                  )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem  onClick={handleCloseUserMenu}>
              <div className={styles.lk}>
                <Typography textAlign="center"><p className={styles.p}>{settings[0]}</p></Typography>
                {!user.user.isDoctor && <Typography textAlign="center">{settings[1]}</Typography>} 
                {user.user.isDoctor && <Typography textAlign="center">{settings[2]}</Typography>} 
                  <Typography textAlign="center">{settings[3]}</Typography>
                <Typography textAlign="center"><ButtonMy/></Typography>

                </div>
              </MenuItem>
            </Menu>
          </Box>
            }
        </Toolbar>
      </Container>
    </AppBar>
  );
};

