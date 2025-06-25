import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  AppBar,
  Toolbar,
  Typography as MuiTypography,
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
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
  Container,
  Paper,
  Chip,
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
  LocalMall,
  Face,
  ChildCare,
  Star,
  FlashOn,
  LocalOffer,
  Fastfood,
  SportsEsports,
  Devices,
  Spa,
  Home,
  Restaurant,
  ChevronRight,
} from "@mui/icons-material";

import womenFashion from "../../../utils/assets/images/women-fashion.jpg";
import menFashion from "../../../utils/assets/images/men-fashion.jpg";
import kidsFashion from "../../../utils/assets/images/kids-fashion.jpg";
import electronics from "../../../utils/assets/images/electronics.jpg";
import homeDecor from "../../../utils/assets/images/home-decor.jpg";
import beautyProducts from "../../../utils/assets/images/beauty-products.jpg";
import food from "../../../utils/assets/images/food.jpg";
import gadgets from "../../../utils/assets/images/gadgets.jpg";
import toys from "../../../utils/assets/images/toys.jpg";
import sports from "../../../utils/assets/images/sports.jpg";
import books from "../../../utils/assets/images/books.jpg";
import jewelry from "../../../utils/assets/images/jewelry.jpg";
import furniture from "../../../utils/assets/images/furniture.jpg";
import appliances from "../../../utils/assets/images/appliances.jpg";
import sploffer1 from "../../../utils/assets/images/sploffer1.jpg";
import sploffer2 from "../../../utils/assets/images/sploffer2.jpg";
import sploffer3 from "../../../utils/assets/images/sploffer3.jpg";
import sploffer5 from "../../../utils/assets/images/sploffer5.jpg";
import spoffe4 from "../../../utils/assets/images/spoffe4.jpg";
import { lable } from "../../../utils/constants/lables";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{
        ...style,
        display: "block",
        right: 10,
        zIndex: 1,
        color: "#1976d2",
        background: "rgba(255,255,255,0.7)",
        borderRadius: "50%",
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <ChevronRight fontSize="large" />
    </Box>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{
        ...style,
        display: "block",
        left: 10,
        zIndex: 1,
        color: "#1976d2",
        background: "rgba(255,255,255,0.7)",
        borderRadius: "50%",
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <ChevronLeft fontSize="large" />
    </Box>
  );
}

class Dashboard extends React.Component {
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
      drawerOpen: true,
      anchorEl: null,
      notifications: [
        lable.dashboard.notifications.newOrder,
        lable.dashboard.notifications.paymentProcessed,
        lable.dashboard.notifications.newCustomer,
      ],
      categories: [
        {
          id: 1,
          name: "Women's Fashion",
          image: womenFashion,
          icon: <LocalMall />,
          description: "Trendy outfits for women",
          featured: true,
        },
        {
          id: 2,
          name: "Men's Fashion",
          image: menFashion,
          icon: <Face />,
          description: "Stylish clothing for men",
          featured: true,
        },
        {
          id: 3,
          name: "Kids & Baby",
          image: kidsFashion,
          icon: <ChildCare />,
          description: "Cute outfits for kids",
          featured: true,
        },
        {
          id: 4,
          name: "Electronics",
          image: electronics,
          icon: <Devices />,
          description: "Latest gadgets & devices",
          featured: true,
        },
        {
          id: 5,
          name: "Home & Living",
          image: homeDecor,
          icon: <Home />,
          description: "Beautiful home decor",
          featured: true,
        },
        {
          id: 6,
          name: "Beauty Products",
          image: beautyProducts,
          icon: <Spa />,
          description: "Cosmetics & skincare",
          featured: true,
        },
        {
          id: 7,
          name: "Gourmet Food",
          image: food,
          icon: <Fastfood />,
          description: "Delicious food items",
          featured: true,
        },
        {
          id: 8,
          name: "Tech Gadgets",
          image: gadgets,
          icon: <Inventory />,
          description: "Cool tech accessories",
          featured: true,
        },
      ],
      specialOffers: [
        {
          id: 1,
          title: "Summer Collection",
          discount: "50% OFF",
          image: sploffer1,
          timeLeft: "2 days left",
          category: "Fashion",
        },
        {
          id: 2,
          title: "Electronics Sale",
          discount: "30% OFF",
          image: sploffer2,
          timeLeft: "1 day left",
          category: "Electronics",
        },
        {
          id: 3,
          title: "New Arrivals",
          discount: "20% OFF",
          image: sploffer3,
          timeLeft: "3 days left",
          category: "All",
        },
        {
          id: 4,
          title: "Home Essentials",
          discount: "40% OFF",
          image: spoffe4,
          timeLeft: "5 days left",
          category: "Home",
        },
        {
          id: 5,
          title: "Beauty Bonanza",
          discount: "25% OFF",
          image: sploffer5,
          timeLeft: "4 days left",
          category: "Beauty",
        },
      ],
      featuredProducts: [
        {
          id: 1,
          name: "Wireless Headphones",
          price: 129.99,
          image: electronics,
          rating: 4,
          category: "Electronics",
        },
        {
          id: 2,
          name: "Designer Handbag",
          price: 199.99,
          image: womenFashion,
          rating: 5,
          category: "Fashion",
        },
        {
          id: 3,
          name: "Smart Watch",
          price: 159.99,
          image: gadgets,
          rating: 4,
          category: "Electronics",
        },
        {
          id: 4,
          name: "Organic Skincare Set",
          price: 89.99,
          image: beautyProducts,
          rating: 4,
          category: "Beauty",
        },
        {
          id: 5,
          name: "Gourmet Coffee Pack",
          price: 24.99,
          image: food,
          rating: 5,
          category: "Food",
        },
        {
          id: 6,
          name: "Educational Toy Set",
          price: 49.99,
          image: toys,
          rating: 4,
          category: "Toys",
        },
        {
          id: 7,
          name: "Yoga Mat",
          price: 29.99,
          image: sports,
          rating: 4,
          category: "Sports",
        },
        {
          id: 8,
          name: "Bestselling Novel",
          price: 14.99,
          image: books,
          rating: 5,
          category: "Books",
        },
      ],
    };
  }

  handleMenuProfileClick = () => {
    this.props.navigate("/profile");
  };

  handleProfileClick = () => {
    this.setState({ profileDialogOpen: true });
  };

  handleProfileClose = () => {
    this.setState({ profileDialogOpen: false });
  };

  handleLogout = () => {
    this.props.navigate("/");
  };

  handleLogoutConfirm = () => {
    this.setState({ logoutDialogOpen: false });
    this.props.navigate("/");
  };

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  handleMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  updateCartCount = () => {
    const count = this.state.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    this.setState({ cartCount: count });
  };

  handleAddToCart = (product) => {
    this.setState((prevState) => {
      const existingItem = prevState.cartItems.find(
        (item) => item.id === product.id
      );
      let updatedCart;

      if (existingItem) {
        updatedCart = prevState.cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevState.cartItems, { ...product, quantity: 1 }];
      }

      return {
        cartItems: updatedCart,
        cartCount: updatedCart.reduce(
          (total, item) => total + item.quantity,
          0
        ),
      };
    });
  };

  componentDidMount() {
    console.log(
      "Component mounted - Location state:",
      this.props.location?.state
    );
    console.log(
      "User data received:",
      this.props.location?.state?.user || "No user data received"
    );
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogoutClick = () => {
    this.setState({ logoutDialogOpen: true });
  };

  handleLogoutCancel = () => {
    this.setState({ logoutDialogOpen: false });
  };

  handleCategoryClick = (categoryId, categoryName) => {
    if (categoryName === "Women's Fashion") {
      this.props.navigate("/womens", {
        state: { user: this.state.user },
      });
    } else {
      this.props.navigate(`/dashboard/products?category=${categoryId}`, {
        state: { user: this.state.user },
      });
    }
  };
  render() {
    const {
      user,
      drawerOpen,
      anchorEl,
      notifications,
      categories,
      logoutDialogOpen,
      specialOffers,
      featuredProducts,
    } = this.state;
    const open = Boolean(anchorEl);

    const drawerWidth = 240;

    const carouselSettings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const menuItems = [
      {
        text: lable.dashboard.menuItems.dashboard,
        icon: <DashboardIcon />,
        path: "/dashboard",
      },
      {
        text: "Women's Fashion",
        icon: <LocalMall />,
        path: "/dashboard/womens-fashion",
      },
      {
        text: lable.dashboard.menuItems.products,
        icon: <Inventory />,
        path: "/dashboard/products",
      },
      {
        text: lable.dashboard.menuItems.orders,
        icon: <ShoppingCart />,
        path: "/dashboard/orders",
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
      <Box
        sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f5f5" }}
      >
        <CssBaseline />

        {/* Logout Confirmation Dialog */}
        <Dialog
          open={logoutDialogOpen}
          onClose={this.handleLogoutCancel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {lable.dashboard.confirmLogout.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {lable.dashboard.confirmLogout.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleLogoutCancel}>
              {lable.dashboard.confirmLogout.cancel}
            </Button>
            <Button
              onClick={this.handleLogoutConfirm}
              color="error"
              autoFocus
              startIcon={<Logout />}
            >
              {lable.dashboard.confirmLogout.logout}
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.profileDialogOpen}
          onClose={this.handleProfileClose}
          fullWidth
          maxWidth="sm"
          sx={{
            "& .MuiDialog-paper": {
              width: "300px", // Set your desired width
              maxWidth: "90vw", // Ensure it doesn't exceed viewport on small screens
            },
          }}
        >
          <DialogTitle>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <MuiTypography variant="h6">My Profile</MuiTypography>
              <IconButton onClick={this.handleProfileClose}>
                <ChevronLeft />
              </IconButton>
            </Box>
          </DialogTitle>
          <DialogContent>
            <Box sx={{ p: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <MuiTypography variant="h6" sx={{ mb: 2 }}>
                  Welcome, {this.state.user.name}!
                </MuiTypography>

                <Box>
                  <MuiTypography variant="subtitle2" color="textSecondary">
                    User Name
                  </MuiTypography>
                  <MuiTypography variant="body1">
                    {this.state.user.name}
                  </MuiTypography>
                </Box>

                <Box>
                  <MuiTypography variant="subtitle2" color="textSecondary">
                    Email
                  </MuiTypography>
                  <MuiTypography variant="body1">
                    {this.state.user.email}
                  </MuiTypography>
                </Box>

                <Box>
                  <MuiTypography variant="subtitle2" color="textSecondary">
                    Mobile
                  </MuiTypography>
                  <MuiTypography variant="body1">
                    {this.state.user.mobile || "Not provided"}
                  </MuiTypography>
                </Box>

                <Box>
                  <MuiTypography variant="subtitle2" color="textSecondary">
                    Role
                  </MuiTypography>
                  <MuiTypography variant="body1">
                    {this.state.user.role}
                  </MuiTypography>
                </Box>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>

        {/* App Bar */}
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "#1976d2",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.toggleDrawer}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <MuiTypography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: "0.5px" }}
            >
              Zoi Cart
            </MuiTypography>

            {/* Cart Icon */}
            <IconButton
              color="inherit"
              onClick={() => this.props.navigate("/cart")}
              sx={{ mr: 1 }}
            >
              <Badge badgeContent={this.state.cartCount} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>

            {/* Notifications Icon */}
            <IconButton color="inherit">
              <Badge badgeContent={notifications.length} color="error">
                <Notifications />
              </Badge>
            </IconButton>

            {/* Profile Avatar */}
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
                <Avatar /> Profile
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
                <ListItemText
                  primary="Logout"
                  primaryTypographyProps={{ color: "error" }}
                />
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        {/* Sidebar Drawer */}
        <Drawer
          variant="persistent"
          open={drawerOpen}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#ffffff",
              borderRight: "1px solid rgba(0, 0, 0, 0.12)",
              height: "100vh",
              overflowY: "hidden",
            },
          }}
        >
          <Toolbar />
          <Box
            sx={{
              overflow: "hidden",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ p: 1 }}>
              <IconButton onClick={this.toggleDrawer}>
                <ChevronLeft />
              </IconButton>
            </Box>
            <Divider />

            <Box sx={{ flexGrow: 1, overflowY: "hidden" }}>
              <List>
                {menuItems.map((item) => (
                  <ListItem
                    button
                    key={item.text}
                    onClick={() => this.props.navigate(item.path)}
                    selected={window.location.pathname === item.path}
                    sx={{
                      "&.Mui-selected": {
                        backgroundColor: "#e3f2fd",
                        borderLeft: "4px solid #1976d2",
                      },
                      "&.Mui-selected:hover": {
                        backgroundColor: "#e3f2fd",
                      },
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                      py: 1.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color:
                          window.location.pathname === item.path
                            ? "#1976d2"
                            : "inherit",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontWeight:
                          window.location.pathname === item.path
                            ? "bold"
                            : "normal",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Drawer>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />

          {/* Dashboard Content */}
          <Container maxWidth="xl" sx={{ mt: 2 }}>
            {/* Welcome Section */}
            <Paper elevation={0} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
              <MuiTypography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                Welcome back, {user.name}!
              </MuiTypography>
              <MuiTypography variant="body1" color="text.secondary">
                Here's what's happening with your store today.
              </MuiTypography>
            </Paper>
            {/* Special Offers Section with Carousel */}
            <Paper elevation={0} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <MuiTypography variant="h5" sx={{ fontWeight: "bold" }}>
                  <LocalOffer
                    color="error"
                    sx={{ verticalAlign: "middle", mr: 1 }}
                  />
                  Today's Special Offers
                </MuiTypography>
              </Box>

              <Slider {...carouselSettings}>
                {specialOffers.map((offer) => (
                  <Box key={offer.id} sx={{ px: 1, pb: 2 }}>
                    <Card
                      sx={{
                        height: 300,
                        position: "relative",
                        borderRadius: 2,
                        overflow: "hidden",
                        boxShadow: 3,
                        "&:hover": {
                          transform: "scale(1.02)",
                          transition: "transform 0.3s ease",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={offer.image}
                        alt={offer.title}
                        sx={{
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                          position: "absolute",
                          top: 0,
                          left: 0,
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          p: 2,
                          color: "white",
                        }}
                      >
                        <Chip
                          label={offer.category}
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 10,
                            left: 10,
                            backgroundColor: "rgba(25, 118, 210, 0.9)",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        />
                        <MuiTypography
                          variant="h6"
                          sx={{ fontWeight: "bold", mb: 1 }}
                        >
                          {offer.title}
                        </MuiTypography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <MuiTypography
                            variant="h4"
                            sx={{ fontWeight: "bold", color: "#ffeb3b" }}
                          >
                            {offer.discount}
                          </MuiTypography>
                          <Chip
                            label={offer.timeLeft}
                            size="small"
                            sx={{
                              backgroundColor: "rgba(255,255,255,0.3)",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          />
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                ))}
              </Slider>
            </Paper>
            {/* Categories Section */}
            <Paper elevation={0} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <MuiTypography variant="h5" sx={{ fontWeight: "bold" }}>
                  Shop by Category
                </MuiTypography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => this.props.navigate("/products")}
                  sx={{ borderRadius: 2 }}
                >
                  View All Categories
                </Button>
              </Box>

              <Grid container spacing={3}>
                {categories.map((category) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "420px", // Slightly increased to accommodate content
                        cursor: "pointer",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: 3,
                        },
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: 2,
                        border: category.featured
                          ? "2px solid #1976d2"
                          : "1px solid #e0e0e0",
                      }}
                    >
                      {/* Featured Chip */}
                      {category.featured && (
                        <Chip
                          label="Featured"
                          color="primary"
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            zIndex: 1,
                            fontWeight: "bold",
                          }}
                        />
                      )}

                      {/* Image Section - Fixed Height */}
                      <Box
                        sx={{
                          height: "180px",
                          width: "100%",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={category.image}
                          alt={category.name}
                          sx={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s",
                            "&:hover": {
                              transform: "scale(1.05)",
                            },
                          }}
                        />
                      </Box>

                      {/* Content Section - Flex Grow to fill remaining space */}
                      <CardContent
                        sx={{
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          p: 2,
                        }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 1 }}
                        >
                          <Box
                            sx={{
                              backgroundColor: category.featured
                                ? "#1976d2"
                                : "#757575",
                              color: "white",
                              p: 1,
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mr: 1,
                            }}
                          >
                            {category.icon}
                          </Box>
                          <MuiTypography
                            variant="subtitle1"
                            component="h3"
                            sx={{
                              fontWeight: "bold",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {category.name}
                          </MuiTypography>
                        </Box>
                        <MuiTypography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mb: 2,
                            flexGrow: 1,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {category.description}
                        </MuiTypography>
                      </CardContent>

                      {/* Button Section - Fixed Height */}
                      <Box sx={{ p: 2, pt: 0 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          sx={{
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: "bold",
                            backgroundColor: category.featured
                              ? "#1976d2"
                              : "#757575",
                            "&:hover": {
                              backgroundColor: category.featured
                                ? "#1565c0"
                                : "#616161",
                            },
                          }}
                          onClick={() =>
                            this.handleCategoryClick(category.id, category.name)
                          }
                        >
                          Shop Now
                        </Button>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
            {/* Featured Products Section */}
            <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
              <MuiTypography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                <Star color="warning" sx={{ verticalAlign: "middle", mr: 1 }} />
                Featured Products
              </MuiTypography>

              <Grid container spacing={3}>
                {featuredProducts.map((product) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "380px", // Adjusted for product cards
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: 3,
                        },
                        borderRadius: 2,
                      }}
                    >
                      {/* Image Section - Fixed Height */}
                      <Box
                        sx={{
                          height: "200px",
                          width: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={product.image}
                          alt={product.name}
                          sx={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>

                      {/* Content Section - Flex Grow to fill remaining space */}
                      <CardContent
                        sx={{
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          p: 2,
                        }}
                      >
                        <MuiTypography
                          gutterBottom
                          variant="subtitle1"
                          sx={{
                            fontWeight: "bold",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {product.name}
                        </MuiTypography>

                        {/* Rating Section */}
                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 1 }}
                        >
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              fontSize="small"
                              color={
                                star <= product.rating ? "warning" : "disabled"
                              }
                            />
                          ))}
                          <MuiTypography variant="caption" sx={{ ml: 1 }}>
                            ({Math.floor(Math.random() * 50) + 10})
                          </MuiTypography>
                        </Box>

                        {/* Price and Button Section */}
                        <Box
                          sx={{
                            mt: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <MuiTypography
                            variant="h6"
                            sx={{ fontWeight: "bold", color: "#1976d2" }}
                          >
                            ${product.price.toFixed(2)}
                          </MuiTypography>
                          <Button
                            variant="contained"
                            size="small"
                            sx={{
                              borderRadius: 2,
                              textTransform: "none",
                              fontWeight: "bold",
                            }}
                          >
                            Add to Cart
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>{" "}
          </Container>
        </Box>
      </Box>
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

export default withNavigation(Dashboard);
