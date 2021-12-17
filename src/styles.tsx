import { makeStyles } from "@material-ui/core/styles";

//import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appRoot: {
    display: "flex",
  },
  appBar: {
    background: "#6EC177",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  appBarSpacer: {
    [theme.breakpoints.down("xs")]: {
      ...theme.mixins.toolbar,
    },
  },

  navigationLogo: {  //look at this agn
    width: "50%"
  },

  navigationLogoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  navigationDrawer: {
    width: 250,
    border: 'none',
    whiteSpace: "nowrap",
    overflowX: "hidden",
    position: "relative",
    height: "100vh",
  },

  navigationDrawerCollapse: {
    width: theme.spacing(9),
  },

  navigationToolbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: theme.spacing(1),
    ...theme.mixins.toolbar,     //look at this agn
  },

  navigationList: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center",
      flex: 1,
  },

  navigationToolbarCollapse: {
    justifyContent: "center",
    paddingRight: 0,
  },

  menuItemIcon: {
      width: "100%",
  },

  navigationSpacer: {
    flex: 1,
  },

  menuItem: {
      width: '80%',
      //borderRadius: 8,
      //marginBottom: 8

      borderRadius: theme.spacing(1),
      marginBottom: theme.spacing(1),
  },

  menuItemActive: {
      backgroundColor: "#EBEBEC"
  }
}));
