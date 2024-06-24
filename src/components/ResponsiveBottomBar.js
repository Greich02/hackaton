import * as React from 'react';
import {Link as RouterLink} from 'react-router-dom'
import {Link, BottomNavigation, BottomNavigationAction} from '@mui/material';
import { ChatBubbleOutlineSharp as ChatIcon, AddSharp, PlayLessonSharp, SettingsAccessibilitySharp , } from '@mui/icons-material';

export default function ResponsiveBottomBar(prop) {
  const [value, setValue] = React.useState(prop.page);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ position: 'fixed', bottom: 5, width : 500 }} value={value} onChange={handleChange}>
      <Link component={RouterLink} to={`/chatlist`} color="inherit" underline="none">
        <BottomNavigationAction
          label="Chat"
          value="chat"
          icon={<ChatIcon />}
        />
      </Link>
      <Link component={RouterLink} to={`/addnew`} color="inherit" underline="none">
        <BottomNavigationAction
          label="New Chat"
          value="addNew"
          icon={<AddSharp />}
        />
      </Link>
      <Link component={RouterLink} to={`/report`} color="inherit" underline="none">
        <BottomNavigationAction
          label="Mistakes"
          value="mistakes"
          icon={<PlayLessonSharp />}
        />
      </Link>
      <Link component={RouterLink} to={`/settings`} color="inherit" underline="none">
        <BottomNavigationAction label="Settings" value="settings" icon={<SettingsAccessibilitySharp />} />
      </Link>
    </BottomNavigation>
  );
}
