import React from "react";
import Slider from "react-slick";
import { useNavigate, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Container,
  Paper,
  Chip,
  Card,
  InputAdornment,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import {
  LocalOffer,
  Star,
  Search,
  FlashOn,
  LocalMall,
  Face,
  ChildCare,
  Devices,
  Home,
  Spa,
  Fastfood,
  ChevronRight,
  ChevronLeft,
  Inventory,
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
import sploffer1 from "../../../utils/assets/images/sploffer1.jpg";
import sploffer2 from "../../../utils/assets/images/sploffer2.jpg";
import sploffer3 from "../../../utils/assets/images/sploffer3.jpg";
import sploffer5 from "../../../utils/assets/images/sploffer5.jpg";
import spoffe4 from "../../../utils/assets/images/spoffe4.jpg";
import ZButton from "../../../components/ZButton/zbutton";
import ZToasterMsg from "../../../components/ZTosterMessage/ztostermsg";
import ZTypography from "../../../components/ZTyptography/ztyptography";
import ZTextField from "../../../components/ZTextFeild/ztextfeild";

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
      showToast: false,
      toastMessage: "",
      toastSeverity: "",
    };
  }

  showToast = (message, severity = "success") => {
    this.setState({
      showToast: true,
      toastMessage: message,
      toastSeverity: severity,
    });
    setTimeout(() => this.setState({ showToast: false }), 3000);
  };

  handleAddToCart = (product) => {
    this.showToast(`${product.name} added to cart!`);
  };

  handleCategoryClick = (categoryId, categoryName) => {
    if (categoryName === "Women's Fashion") {
      this.props.navigate("/womens", {
        state: { user: this.props.location?.state?.user },
      });
    } else if (categoryName === "Men's Fashion") {
      this.props.navigate("/mens", {
        state: { user: this.props.location?.state?.user },
      });
    } else {
      this.props.navigate(`/products?category=${categoryId}`, {
        state: { user: this.props.location?.state?.user },
      });
    }
  };

  render() {
    const {
      categories,
      specialOffers,
      featuredProducts,
      showToast,
      toastMessage,
      toastSeverity,
    } = this.state;
    const { location } = this.props;

    const carouselSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    // Consistent card height settings
    const cardHeight = 420;
    const imageHeight = 200;

    return (
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        {/* Toast Notification */}
        <ZToasterMsg
          open={showToast}
          message={toastMessage}
          severity={toastSeverity}
          onClose={() => this.setState({ showToast: false })}
        />
        <Card
          sx={{
            p: 3,
            borderRadius: 2,
            margin: -3,
            boxShadow: 3,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            minHeight: "100vh",
            position: "relative",
          }}
        >
          {/* Welcome Section */}
          <Paper
            elevation={0}
            sx={{ borderRadius: 2, width: "100%", margin: -1, p: 3 }}
          >
            <ZTypography
              flag="mainheader"
              sx={{ fontWeight: "bold", fontSize: "28px" }}
            >
              Welcome back,{" "}
              {this.props.location?.state?.user?.username || "Guest"}!
            </ZTypography>
            <ZTypography flag="label">
              Here's what's happening with your store today.
            </ZTypography>
          </Paper>

          {/* Search Bar */}
          <Box sx={{ px: 3 }}>
            <ZTextField
              fullWidth
              placeholder="Search products..."
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Special Offers Section with Carousel */}
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, mt: -3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <ZTypography
                flag="subheading"
                sx={{ fontWeight: "bold", fontSize: "22px" }}
              >
                <LocalOffer
                  color="error"
                  sx={{ verticalAlign: "middle", mr: 1 }}
                />
                Today's Special Offers
              </ZTypography>
            </Box>

            <Slider {...carouselSettings}>
              {specialOffers.map((offer) => (
                <Box key={offer.id} sx={{ px: 1, pb: 2 }}>
                  <Card
                    sx={{
                      height: 280, // Reduced height
                      position: "relative",
                      borderRadius: 2,
                      overflow: "hidden",
                      boxShadow: 2,
                      display: "flex",
                      flexDirection: "column",
                      "&:hover": {
                        boxShadow: 4,
                      },
                    }}
                  >
                    {/* Image Section */}
                    <Box sx={{ height: 160, overflow: "hidden" }}>
                      <CardMedia
                        component="img"
                        height="160"
                        image={offer.image}
                        alt={offer.title}
                        sx={{
                          objectFit: "cover",
                          width: "100%",
                          transition: "transform 0.3s",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                      />
                    </Box>

                    {/* Content Section */}
                    <Box
                      sx={{
                        p: 2,
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Top Section - Category and Title */}
                      <Box>
                        <Chip
                          label={offer.category}
                          size="small"
                          sx={{
                            backgroundColor: "#f0f0f0",
                            color: "#1976d2",
                            fontWeight: "bold",
                            mb: 1,
                          }}
                        />
                        <ZTypography
                          flag="value"
                          sx={{
                            fontWeight: "bold",
                            mb: 1,
                            fontSize: "1.1rem",
                          }}
                        >
                          {offer.title}
                        </ZTypography>
                      </Box>

                      {/* Bottom Section - Discount and Time */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-end",
                          justifyContent: "space-between",
                        }}
                      >
                        <ZTypography
                          flag="subheading"
                          sx={{
                            fontWeight: "bold",
                            color: "#ff5722",
                            lineHeight: 1,
                            fontSize: "24px",
                          }}
                        >
                          {offer.discount}
                        </ZTypography>
                        <ZTypography
                          flag="label"
                          sx={{
                            fontWeight: "medium",
                          }}
                        >
                          {offer.timeLeft}
                        </ZTypography>
                      </Box>
                    </Box>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Paper>

          {/* Categories Section */}
          <Paper elevation={0} sx={{ p: 3, mb: 4, borderRadius: 2, px: 9 }}>
            <Grid container spacing={3}>
              {categories.map((category) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
                  <Card
                    sx={{
                      height: cardHeight,
                      display: "flex",
                      flexDirection: "column",
                      minWidth: "300px",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      boxShadow: 2,
                      cursor: "pointer",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 3,
                      },
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: 2,
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    {/* Featured chip */}
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

                    {/* Image section */}
                    <Box
                      sx={{
                        height: imageHeight,
                        minWidth: "200px",
                        overflow: "hidden",
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

                    {/* Content section */}
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        p: 2,
                      }}
                    >
                      {/* Category name and icon */}
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
                        <ZTypography
                          flag="value"
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
                        </ZTypography>
                      </Box>

                      {/* Description */}
                      <ZTypography
                        flag="label"
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
                      </ZTypography>
                    </CardContent>

                    {/* Button section */}
                    <Box sx={{ p: 2, pt: 0 }}>
                      <ZButton
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
                      </ZButton>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Featured Products Section */}
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, px: 7 }}>
            <ZTypography
              flag="subheading"
              sx={{ fontWeight: "bold", fontSize: "22px", mb: 3 }}
            >
              <Star color="warning" sx={{ verticalAlign: "middle", mr: 1 }} />
              Featured Products
            </ZTypography>

            <Grid container spacing={3}>
              {featuredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Card
                    sx={{
                      height: cardHeight,
                      minWidth: "300px",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 3,
                      },
                      borderRadius: 2,
                    }}
                  >
                    {/* Product image */}
                    <Box
                      sx={{
                        height: imageHeight,
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

                    {/* Product content */}
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        p: 2,
                      }}
                    >
                      <ZTypography
                        flag="value"
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
                      </ZTypography>

                      {/* Rating */}
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
                        <ZTypography flag="label" sx={{ ml: 1 }}>
                          ({Math.floor(Math.random() * 50) + 10})
                        </ZTypography>
                      </Box>

                      {/* Price and button */}
                      <Box
                        sx={{
                          mt: "auto",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <ZTypography
                          flag="value"
                          sx={{
                            fontWeight: "bold",
                            color: "#1976d2",
                            fontSize: "18px",
                          }}
                        >
                          ${product.price.toFixed(2)}
                        </ZTypography>
                        <ZButton
                          variant="contained"
                          size="small"
                          onClick={() => this.handleAddToCart(product)}
                          sx={{
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: "bold",
                          }}
                        >
                          Add to Cart
                        </ZButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Card>
      </Container>
    );
  }
}

function withRouter(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    const location = useLocation();
    return <Component {...props} navigate={navigate} location={location} />;
  };
}

export default withRouter(Dashboard);
