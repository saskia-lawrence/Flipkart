import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  CssBaseline,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Container,
  styled,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ShoppingCart,
  Dashboard as DashboardIcon,
  Inventory,
  People,
  Settings,
  Logout,
  Notifications,
  ChevronLeft,
  ArrowBack,
  LocalMall,
} from "@mui/icons-material";
import ZTypography from "../../../components/ZTyptography/ztyptography";
import ZButton from "../../../components/ZButton/zbutton";
import { lable } from "../../../utils/constants/lables";

const AppBarOffset = styled("div")(({ theme }) => theme.mixins.toolbar);

const FixedDrawerPaper = styled("div")({
  width: 240,
  position: "fixed",
  height: "100vh",
  overflow: "hidden",
  boxSizing: "border-box",
  backgroundColor: "#f5f5f5",
});

const MainRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const MainContent = styled("main")({
  flexGrow: 1,
  display: "flex",
  overflow: "hidden",
  paddingBottom: "64px",
});

const ContentWrapper = styled("div")({
  flexGrow: 1,
  overflow: "auto",
  marginLeft: 240,
  paddingBottom: "16px",
});

const Footer = styled("footer")(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  color: "black",
  padding: theme.spacing(2),
  textAlign: "center",
  position: "fixed",
  bottom: 0,
  left: 240,
  right: 0,
  zIndex: theme.zIndex.drawer - 1,
}));

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutDialogOpen: false,
      profileDialogOpen: false,
      cartItems: [],
      cartCount: 0,
      user: {
        name: props.location?.state?.user?.username || "Guest",
        email: props.location?.state?.user?.email || "",
        mobile: props.location?.state?.user?.mobile || "",
        avatar: props.location?.state?.user?.avatar || "",
        role: props.location?.state?.user?.role || "User",
      },
      isLoading: false,
      snackbar: { open: false, message: "", severity: "" },
      anchorEl: null,
      notifications: [
        lable.dashboard.notifications.newOrder,
        lable.dashboard.notifications.paymentProcessed,
        lable.dashboard.notifications.newCustomer,
      ],
    };
  }

  handleCartClick = () => {
    this.props.navigate("/cart", {
      state: {
        cartItems: this.state.cartItems,
      },
    });
  };

  componentDidMount() {
    this.loadCart();
    window.addEventListener("cartUpdated", this.handleCartUpdate);
  }

  componentWillUnmount() {
    window.removeEventListener("cartUpdated", this.handleCartUpdate);
  }

  handleCartUpdate = () => {
    this.loadCart();
  };

  loadCart = () => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        const cartCount = cartItems.reduce(
          (total, item) => total + (item.quantity || 1),
          0
        );
        this.setState({
          cartItems,
          cartCount,
        });
      } catch (error) {
        console.error("Error parsing cart data:", error);
        this.setState({ cartItems: [], cartCount: 0 });
      }
    } else {
      this.setState({ cartItems: [], cartCount: 0 });
    }
  };

  handleMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleProfileClick = () => {
    this.setState({ profileDialogOpen: true, anchorEl: null });
  };

  handleProfileClose = () => {
    this.setState({ profileDialogOpen: false });
  };

  handleLogoutClick = () => {
    this.setState({ logoutDialogOpen: true, anchorEl: null });
  };

  handleLogoutCancel = () => {
    this.setState({ logoutDialogOpen: false });
  };

  handleLogoutConfirm = () => {
    this.setState({ logoutDialogOpen: false });
    localStorage.removeItem("token");
    this.props.navigate("/");
  };

  handleBackClick = () => {
    this.props.navigate(-1);
  };

  render() {
    const {
      user,
      anchorEl,
      notifications,
      logoutDialogOpen,
      cartCount = 0,
    } = this.state;
    const open = Boolean(anchorEl);

    const menuItems = [
      {
        text: lable.dashboard.menuItems.dashboard,
        icon: <DashboardIcon />,
        path: "/dashboard",
      },
      {
        text: "Women's Fashion",
        icon: <LocalMall />,
        path: "/womens",
      },
      {
        text: lable.dashboard.menuItems.products,
        icon: <Inventory />,
        path: "/products",
      },
      {
        text: lable.dashboard.menuItems.orders,
        icon: <ShoppingCart />,
        path: "/orders",
      },
      {
        text: lable.dashboard.menuItems.customers,
        icon: <People />,
        path: "/dashboard/customers",
      },
      {
        text: lable.dashboard.menuItems.settings,
        icon: <Settings />,
        path: "/dashboard/settings",
      },
    ];

    return (
      <MainRoot>
        <CssBaseline />

        {/* Fixed AppBar */}
        <AppBar
          position="fixed"
          sx={{
            width: "100%",
            ml: `240px`,
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "#1976d2",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Toolbar>
            {this.props.location.pathname !== "/dashboard" && (
              <IconButton
                edge="start"
                color="inherit"
                onClick={this.handleBackClick}
                sx={{ mr: 2 }}
              >
                <ArrowBack />
              </IconButton>
            )}
            <ZTypography
              flag="mainheader"
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: "0.5px" }}
            >
              Zoi Cart
            </ZTypography>
            <IconButton
              color="inherit"
              onClick={this.handleCartClick}
              sx={{ mr: 1 }}
            >
              <Badge badgeContent={this.state.cartCount} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={notifications.length} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              onClick={this.handleMenuOpen}
              color="inherit"
              sx={{ ml: 2 }}
            >
              <Avatar
                alt={user.name}
                src={user.avatar}
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: "white",
                  color: "#1976d2",
                }}
              >
                {user?.name?.charAt(0) || "G"}
              </Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={this.handleMenuClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={this.handleProfileClick} sx={{ py: 1.5 }}>
                <Avatar />
                <ZTypography flag="label">Profile</ZTypography>
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={this.handleLogoutClick}
                sx={{
                  "&:hover": {
                    backgroundColor: "#ffebee",
                  },
                  py: 1.5,
                }}
              >
                <ListItemIcon>
                  <Logout fontSize="small" color="error" />
                </ListItemIcon>
                <ZTypography flag="label" color="error">
                  Logout
                </ZTypography>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        {/* Fixed Drawer */}
        <FixedDrawerPaper>
          <Drawer
            variant="permanent"
            sx={{
              width: 240,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 240,
                boxSizing: "border-box",
                height: "100vh",
                backgroundColor: "#f5f5f5",
                position: "relative",
              },
            }}
            open
          >
            <AppBarOffset />
            <Divider />
            <List>
              {menuItems.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  onClick={() => this.props.navigate(item.path)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ZTypography flag="label">{item.text}</ZTypography>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </FixedDrawerPaper>

        {/* Updated main content structure */}
        <MainContent>
          <ContentWrapper>
            <AppBarOffset />
            <Container maxWidth="lg" sx={{ py: 3 }}>
              <Outlet
                context={{
                  cartItems: this.state.cartItems,
                  onCartUpdate: this.handleCartUpdate,
                }}
              />
              {this.props.children}
            </Container>
          </ContentWrapper>
        </MainContent>

        {/* Add the Footer */}
        <Footer>
          <ZTypography flag="label">
            © {new Date().getFullYear()} Zoi Cart - All Rights Reserved
          </ZTypography>
          <Box sx={{ mt: 1 }}>
            <ZButton
              variant="text"
              size="small"
              onClick={() => this.props.navigate("/terms")}
            >
              <ZTypography flag="label">Terms of Service</ZTypography>
            </ZButton>
            <ZButton
              variant="text"
              size="small"
              onClick={() => this.props.navigate("/privacy")}
            >
              <ZTypography flag="label">Privacy Policy</ZTypography>
            </ZButton>
            <ZButton
              variant="text"
              size="small"
              onClick={() => this.props.navigate("/contact")}
            >
              <ZTypography flag="label">Contact Us</ZTypography>
            </ZButton>
          </Box>
        </Footer>

        {/* Logout Confirmation Dialog */}
        <Dialog
          open={logoutDialogOpen}
          onClose={this.handleLogoutCancel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <ZTypography flag="mainheader">
              {lable.dashboard.confirmLogout.title}
            </ZTypography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <ZTypography flag="label">
                {lable.dashboard.confirmLogout.message}
              </ZTypography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <ZButton variant="outlined" onClick={this.handleLogoutCancel}>
              <ZTypography flag="label">
                {lable.dashboard.confirmLogout.cancel}
              </ZTypography>
            </ZButton>
            <ZButton
              variant="contained"
              color="error"
              onClick={this.handleLogoutConfirm}
              autoFocus
              startIcon={<Logout />}
            >
              <ZTypography flag="label">
                {lable.dashboard.confirmLogout.logout}
              </ZTypography>
            </ZButton>
          </DialogActions>
        </Dialog>

        {/* Profile Dialog */}
        <Dialog
          open={this.state.profileDialogOpen}
          onClose={this.handleProfileClose}
          fullWidth
          maxWidth="sm"
          sx={{
            "& .MuiDialog-paper": {
              width: "300px",
              maxWidth: "90vw",
            },
          }}
        >
          <DialogTitle>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <ZTypography flag="mainheader">My Profile</ZTypography>
              <IconButton onClick={this.handleProfileClose}>
                <ChevronLeft />
              </IconButton>
            </Box>
          </DialogTitle>
          <DialogContent>
            <Box sx={{ p: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <ZTypography flag="mainheader" sx={{ mb: 2 }}>
                  Welcome, {this.state.user.name}!
                </ZTypography>

                <Box>
                  <ZTypography flag="label" color="textSecondary">
                    User Name
                  </ZTypography>
                  <ZTypography flag="value">{this.state.user.name}</ZTypography>
                </Box>

                <Box>
                  <ZTypography flag="label" color="textSecondary">
                    Email
                  </ZTypography>
                  <ZTypography flag="value">
                    {this.state.user.email}
                  </ZTypography>
                </Box>

                <Box>
                  <ZTypography flag="label" color="textSecondary">
                    Mobile
                  </ZTypography>
                  <ZTypography flag="value">
                    {this.state.user.mobile || "Not provided"}
                  </ZTypography>
                </Box>

                <Box>
                  <ZTypography flag="label" color="textSecondary">
                    Role
                  </ZTypography>
                  <ZTypography flag="value">{this.state.user.role}</ZTypography>
                </Box>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <ZButton variant="contained" onClick={this.handleProfileClose}>
              <ZTypography flag="label">Close</ZTypography>
            </ZButton>
          </DialogActions>
        </Dialog>
      </MainRoot>
    );
  }
}

function withNavigation(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    const location = useLocation();
    return <Component {...props} navigate={navigate} location={location} />;
  };
}

export default withNavigation(PageLayout);
