import React from "react";
import ReactDOM from "react-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from "@material-ui/icons/Menu"
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const drawerPaper = {
  position: 'relative',
  width: 240
};

const Index = () => {
  return <div>
    <AppBar position="absolute">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          News
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent" classes={drawerPaper}>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
    </Drawer>
    <Button color="primary" variant="contained">Yo</Button>
  </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
