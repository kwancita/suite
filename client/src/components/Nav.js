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
import { useNavigate, Link  } from "react-router-dom";

const Nav = ({setCurrentUser}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", {
        method: 'DELETE'
    })
    navigate('/')
    setCurrentUser(null)
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ color: 'white', background:'black'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Suite Finder
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
              <MenuItem component={Link} to="/">Home</MenuItem>
              <MenuItem component={Link}  to="/rooms">Rooms</MenuItem>
              <MenuItem component={Link} to="/contact">Contact</MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Suite Finder
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button component={Link} to="/" sx={{ my: 2, color: 'white', display: 'block' }} >Home</Button>
            <Button component={Link} to="/rooms" sx={{ my: 2, color: 'white', display: 'block' }} >Rooms</Button>
            <Button component={Link} to="/contact" sx={{ my: 2, color: 'white', display: 'block' }} >Contact</Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ background:'white' }} alt="Remy Sharp" src="https://img.icons8.com/external-bearicons-glyph-bearicons/344/external-User-essential-collection-bearicons-glyph-bearicons.png" />
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
              <MenuItem component={Link} to="/login">Login</MenuItem>
              <MenuItem component={Link} to="/account">Account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;



// import { useNavigate, Link } from "react-router-dom";
// import "./nav.css"

// function Nav({setCurrentUser}) {
//   const navigate = useNavigate();

//   function handleLogout() {
//     fetch("/logout", {
//         method: 'DELETE'
//     })
//     navigate('/')
//     setCurrentUser(null)
//   }

//   return (
//     <nav className="n">
//       <div className="n-container">
//         <b>Suite Finder</b>
//         <Link classname="n-link" to="/">Home</Link>
//         <Link to="/rooms">Rooms </Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/login">Login </Link>
//         <Link to="/account">Account </Link>
//         <button onClick={handleLogout}>Logout </button>
//       </div>
//     </nav>
//   );
// }

// export default Nav


