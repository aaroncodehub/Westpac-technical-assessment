import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LayoutContainer from "../layout/LayoutContainer";
import useStyles from "./navigationStyles";

function Navigation() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <div id="navigation-container" className={classes.root}>
        <LayoutContainer>
          <Toolbar
            id="navigation-bar"
            component="nav"
            role="navigation"
            aria-label="navigation bar"
            disableGutters
          >
            <div id="logo">
              <a href="http://westpac.com.au">
                <img
                  aria-label="westpace logo"
                  src="https://banking.westpac.com.au/wbc/banking/Themes/Default/Desktop/WBC/Core/Images/logo_white_bg.png.ce5c4c19ec61b56796f0e218fc8329c558421fd8.png"
                  alt="Westpac Online Banking home"
                />
              </a>
            </div>
          </Toolbar>
        </LayoutContainer>
      </div>
    </AppBar>
  );
}

export default Navigation;
