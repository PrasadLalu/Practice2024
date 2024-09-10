import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Avatar,
} from "@mui/material";

const drawerWidth = 240;

function ResponsiveDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Left Side Menu */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ padding: "16px" }}>
          <Typography variant="h6" noWrap>
            Hi, username
          </Typography>
        </Box>
        <List>
          {["Reports", "All Users", "Banned Users", "Change Password"].map(
            (text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Box sx={{ position: "absolute", bottom: 16, left: 16 }}>
          <ListItem button>
            <ListItemText primary="Log Out" />
          </ListItem>
        </Box>
      </Drawer>

      {/* Right Side Content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Typography variant="h4" gutterBottom>
          Today
        </Typography>

        {/* Example content */}
        {[
          {
            name: "Lisa Cuddy",
            action: "has reported the user profile of",
            target: "janemich",
          },
          {
            name: "Lisa Cuddy",
            action: "has reported a post made by",
            target: "iraava",
          },
          {
            name: "Lisa Cuddy",
            action: "has reported a message made by",
            target: "kellyj",
          },
        ].map((report, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
          >
            <Avatar alt={report.name} src="/static/images/avatar/1.jpg" />
            <Box sx={{ marginLeft: 2 }}>
              <Typography variant="body1">
                <strong>{report.name}</strong> {report.action}{" "}
                <strong>{report.target}</strong>
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
