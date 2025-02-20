import React,{useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link } from 'react-router-dom';
import{ Box, ListItem, ListItemButton,Typography, List, ListItemText, CssBaseline}from "@mui/material";
import {AppBar, Drawer, Toolbar, Divider,Button} from '@mui/material'
import './Navbar.scss'
import Cart from '../Cart/Cart';
// import PropTypes from "prop-types";
import menuData from './data';
import menuData1 from "./data1";
import menuData2 from "./data2";
import { useSelector } from 'react-redux/es/hooks/useSelector';


const drawerWidth = 240;

const Navbar = (props) => {
    const {window} = props;
    const [open, setOpen] = useState(false)
    const products = useSelector((state) => state.cart.products);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      md={{ textAlign: "center" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        VELDERA
      </Typography>
      <Divider />
      <List>
        {menuData.map((menuItem, index) => (
          <ListItem key={index} disablePadding className="item">
            <ListItemButton sx={{ textAlign: "start" }} >
              <ListItemText key={index} className="link">
                <Link to={menuItem.path}>{menuItem.name}</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      
    </Box>
  );

    const container =
      window !== undefined ? () => window().document.body : undefined;

    const handleClick = () => {
        setOpen(!false)
    }

  return (
    <Box className="navbar" sx={{ display: "flex" }}>
      <CssBaseline />
      <div className="wrapper" component="nav">
        {/* <Toolbar> */}
        <div className="left">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="item">
            <img src="img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {menuData1.map((menuItem, index) => (
              <Button key={index} sx={{ color: "#000003" }}>
                <Link to={menuItem.path} className="link">
                  {menuItem.name}
                </Link>
              </Button>
            ))}
          </Box>
        </div>
        <div className="center">
          <Link className="link" to="/">
            VELDERA
          </Link>
        </div>

        <div className="right">
          <List>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {menuData2.map((menuItem, index) => (
                <Button key={index} sx={{ color: "#000003" }}>
                  <Link to={menuItem.path} className="link">
                    {menuItem.name}
                  </Link>
                </Button>
              ))}
            </Box>
          </List>

          <div className="icons" sx={{ display: { xs: "none", sm: "block" } }}>
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon" onClick={() => setOpen(handleClick)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        {/* </Toolbar> */}
      </div>

      {open && <Cart />}
    </Box>
  );
}

export default Navbar