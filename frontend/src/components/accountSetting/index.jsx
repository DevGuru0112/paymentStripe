import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './acount.scss'

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Account Details" href="/drafts" />
        <LinkTab label="Feed Settings" href="/trash" />
        <LinkTab label="Sub-Accounts" href="/spam" />
        <LinkTab label="SpiderPipe Accounts" href="/spam" />
        <LinkTab label="Reporting Settings" href="/spam" />
      </Tabs>
    </Box>
  );
}
