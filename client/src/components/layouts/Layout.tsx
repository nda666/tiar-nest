import React, { FC } from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';

import {
  Root,
  Header,
  EdgeTrigger,
  EdgeSidebar,
  SidebarContent,
  Content,
  Footer,
  getFixedScheme,
} from '@mui-treasury/layout';

import Menu from '@mui/icons-material/Menu';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const scheme = getFixedScheme();
const list = () => (
  <Box>
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Box>
);

const Layout: FC = ({ children }) => {
  return (
    <Root scheme={scheme}>
      <CssBaseline />
      <Header></Header>
      <EdgeSidebar anchor="left">
        <SidebarContent>{list()}</SidebarContent>
        <EdgeTrigger target={{ anchor: 'left', field: 'collapsed' }}>
          {(collapsed, setCollapsed) => (
            <ButtonBase
              onClick={() => setCollapsed(!collapsed)}
              sx={{ flexGrow: 1, height: 48 }}
            >
              {collapsed ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </ButtonBase>
          )}
        </EdgeTrigger>
      </EdgeSidebar>
      <Content>
        <Container maxWidth="lg" sx={{ py: 1 }}>
          {children}
        </Container>
      </Content>
      <Footer></Footer>
    </Root>
  );
};

export default Layout;
