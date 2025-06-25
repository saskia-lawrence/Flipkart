import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Rating,
  Box,
  Container,
  Paper,
  Divider,
  Chip,
  IconButton,
  Breadcrumbs,
  Link,
  Badge,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import womenFash1 from "../../../utils/assets/images/womenFash1.jpg";
import womenFash2 from "../../../utils/assets/images/womenFash2.jpg";
import womenFash3 from "../../../utils/assets/images/womenFash3.jpg";
import womenFash4 from "../../../utils/assets/images/womenFash4.jpg";
import womenFash5 from "../../../utils/assets/images/womenFash5.jpg";
import womenFash6 from "../../../utils/assets/images/womenFash6.jpg";
import womenFash7 from "../../../utils/assets/images/womenFash7.jpg";
import womenFash8 from "../../../utils/assets/images/womenFash8.jpg";
import womenFash9 from "../../../utils/assets/images/womenFash9.jpg";
import womenFash10 from "../../../utils/assets/images/womenFash10.jpg";
import womenFash11 from "../../../utils/assets/images/womenFash11.jpg";
import womenFash12 from "../../../utils/assets/images/womenFash12.jpg";
import womenFash13 from "../../../utils/assets/images/womenFash13.jpg";
import womenFash14 from "../../../utils/assets/images/womenFash14.jpg";
import womenFash15 from "../../../utils/assets/images/womenFash15.jpg";
import womenFash16 from "../../../utils/assets/images/womenFash16.jpg";

// Create a wrapper component to use hooks with class component
const withNavigation = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
};

class WomenFashion extends React.Component {
  constructor(props) {
    super(props);

    const productImages = {
      1: womenFash1,
      2: womenFash2,
      3: womenFash3,
      4: womenFash4,
      5: womenFash5,
      6: womenFash6,
      7: womenFash7,
      8: womenFash8,
      9: womenFash9,
      10: womenFash10,
      11: womenFash11,
      12: womenFash12,
      13: womenFash13,
      14: womenFash14,
      15: womenFash15,
      16: womenFash16,
    };

    this.state = {
      cart: [],
      selectedProduct: null,
      notification: {
        show: false,
        message: "",
      },
      products: [
        {
          id: 1,
          name: "Elegant Floral Dress",
          price: 49.99,
          rating: 4.5,
          image: productImages[1],
          reviews: 128,
          category: "Women's Fashion",
        },
        {
          id: 2,
          name: "Denim Jacket",
          price: 59.99,
          rating: 4.2,
          image: productImages[2],
          reviews: 86,
          category: "Women's Fashion",
        },
        {
          id: 3,
          name: "Summer T-Shirt",
          price: 19.99,
          rating: 3.9,
          image: productImages[3],
          reviews: 45,
          category: "Women's Fashion",
        },
        {
          id: 4,
          name: "Formal Blazer",
          price: 89.99,
          rating: 4.7,
          image: productImages[4],
          reviews: 210,
          category: "Women's Fashion",
        },
        {
          id: 5,
          name: "Casual Jeans",
          price: 39.99,
          rating: 4.1,
          image: productImages[5],
          reviews: 156,
          category: "Women's Fashion",
        },
        {
          id: 6,
          name: "Evening Gown",
          price: 129.99,
          rating: 4.8,
          image: productImages[6],
          reviews: 92,
          category: "Women's Fashion",
        },
        {
          id: 7,
          name: "Sports Leggings",
          price: 29.99,
          rating: 4.3,
          image: productImages[7],
          reviews: 78,
          category: "Women's Fashion",
        },
        {
          id: 8,
          name: "Winter Coat",
          price: 99.99,
          rating: 4.6,
          image: productImages[8],
          reviews: 134,
          category: "Women's Fashion",
        },
        {
          id: 9,
          name: "Silk Scarf",
          price: 24.99,
          rating: 4.0,
          image: productImages[9],
          reviews: 65,
          category: "Women's Fashion",
        },
        {
          id: 10,
          name: "Leather Handbag",
          price: 79.99,
          rating: 4.7,
          image: productImages[10],
          reviews: 187,
          category: "Women's Fashion",
        },
        {
          id: 11,
          name: "Casual Sneakers",
          price: 44.99,
          rating: 4.4,
          image: productImages[11],
          reviews: 112,
          category: "Women's Fashion",
        },
        {
          id: 12,
          name: "Boho Skirt",
          price: 34.99,
          rating: 4.2,
          image: productImages[12],
          reviews: 53,
          category: "Women's Fashion",
        },
        {
          id: 13,
          name: "Office Blouse",
          price: 29.99,
          rating: 4.1,
          image: productImages[13],
          reviews: 47,
          category: "Women's Fashion",
        },
        {
          id: 14,
          name: "Wool Sweater",
          price: 54.99,
          rating: 4.5,
          image: productImages[14],
          reviews: 89,
          category: "Women's Fashion",
        },
        {
          id: 15,
          name: "Sun Hat",
          price: 19.99,
          rating: 3.8,
          image: productImages[15],
          reviews: 36,
          category: "Women's Fashion",
        },
        {
          id: 16,
          name: "Linen Jumpsuit",
          price: 64.99,
          rating: 4.3,
          image: productImages[16],
          reviews: 72,
          category: "Women's Fashion",
        },
      ],
    };
  }

  handleAddToCart = (product, e) => {
    e?.stopPropagation();
    this.setState(
      (prevState) => {
        const existingItem = prevState.cart.find(
          (item) => item.id === product.id
        );
        const message = existingItem
          ? `${product.name} quantity updated`
          : `${product.name} added to cart`;

        if (existingItem) {
          return {
            cart: prevState.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            notification: {
              show: true,
              message,
            },
          };
        } else {
          return {
            cart: [...prevState.cart, { ...product, quantity: 1 }],
            notification: {
              show: true,
              message,
            },
          };
        }
      },
      () => {
        setTimeout(() => {
          this.setState({ notification: { show: false, message: "" } });
        }, 3000);
      }
    );
  };

  handleBuyNow = (product, e) => {
    e?.stopPropagation();
    this.handleAddToCart(product, e);
    this.props.navigate("/payment", {
      state: {
        products: this.state.cart.concat({ ...product, quantity: 1 }), // Include the new product
        fromCart: false,
      },
    });
  };

  handleCheckout = () => {
    this.props.navigate("/payment", {
      state: {
        products: this.state.cart,
        fromCart: true,
      },
    });
  };

  handleProductClick = (product) => {
    this.setState({ selectedProduct: product });
  };

  componentDidMount() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      this.setState({ cart: JSON.parse(savedCart) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart !== this.state.cart) {
      localStorage.setItem("cart", JSON.stringify(this.state.cart));
    }
  }

  handleBackToList = () => {
    this.setState({ selectedProduct: null });
  };

  getCartItemCount = () => {
    return this.state.cart.reduce((total, item) => total + item.quantity, 0);
  };

  render() {
    const { products, selectedProduct, cart } = this.state;

    if (selectedProduct) {
      return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={this.handleBackToList}
              sx={{
                mb: 2,
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
                width: "fit-content",
              }}
            >
              Back to Products
            </Button>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
              <Link color="inherit" href="/">
                Home
              </Link>
              <Link color="inherit" href="/womens-fashion">
                Women's Fashion
              </Link>
              <Typography color="text.primary">
                {selectedProduct.name}
              </Typography>
            </Breadcrumbs>
          </Box>

          <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image={selectedProduct.image}
                  alt={selectedProduct.name}
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    objectFit: "cover",
                    maxHeight: "500px",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label="Bestseller"
                    color="primary"
                    size="small"
                    sx={{ mb: 1 }}
                  />
                  <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                    {selectedProduct.name}
                  </Typography>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Rating
                      value={selectedProduct.rating}
                      precision={0.5}
                      readOnly
                    />
                    <Typography variant="body2" color="text.secondary" ml={1}>
                      ({selectedProduct.reviews} reviews)
                    </Typography>
                  </Box>
                  <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
                    ${selectedProduct.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", mb: 1 }}
                    >
                      Product Details:
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      - Material: 100% Cotton
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      - Care Instructions: Machine wash cold
                    </Typography>
                    <Typography variant="body2">
                      - Size: Available in S, M, L, XL
                    </Typography>
                  </Box>
                </Box>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    startIcon={<ShoppingCartIcon />}
                    fullWidth
                    onClick={(e) => this.handleAddToCart(selectedProduct, e)}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    startIcon={<FlashOnIcon />}
                    sx={{ ml: 1 }}
                    fullWidth
                    onClick={(e) => this.handleBuyNow(selectedProduct, e)}
                  >
                    Buy Now
                  </Button>
                </CardActions>
                {this.state.notification.show && (
                  <Box
                    sx={{
                      position: "fixed",
                      bottom: 20,
                      right: 20,
                      backgroundColor: "green",
                      color: "white",
                      padding: 2,
                      borderRadius: 1,
                      zIndex: 9999,
                    }}
                  >
                    {this.state.notification.message}
                  </Box>
                )}
                <Box sx={{ display: "flex", mt: 2 }}>
                  <IconButton aria-label="add to favorites" sx={{ mr: 1 }}>
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      );
    }

    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Badge badgeContent={this.getCartItemCount()} color="primary">
            <Button
              variant="outlined"
              startIcon={<ShoppingCartIcon />}
              onClick={() => {
                if (this.state.cart.length > 0) {
                  this.props.navigate("/cart", {
                    state: { cartItems: this.state.cart },
                  });
                } else {
                  this.setState(
                    {
                      notification: {
                        show: true,
                        message: "Your cart is empty",
                      },
                    },
                    () => {
                      setTimeout(() => {
                        this.setState({
                          notification: { show: false, message: "" },
                        });
                      }, 3000);
                    }
                  );
                }
              }}
            >
              View Cart
            </Button>
          </Badge>
        </Box>

        <Paper elevation={0} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Women's Fashion
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 4 }}>
            Discover our latest collection for women
          </Typography>

          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: 3,
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => this.handleProductClick(product)}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                      ${product.price.toFixed(2)}
                    </Typography>
                    <Box display="flex" alignItems="center" mt={1}>
                      <Rating
                        name="read-only"
                        value={product.rating}
                        precision={0.5}
                        readOnly
                      />
                      <Typography variant="body2" color="text.secondary" ml={1}>
                        ({product.reviews} reviews)
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      variant="outlined"
                      startIcon={<ShoppingCartIcon />}
                      fullWidth
                      onClick={(e) => {
                        e.stopPropagation();
                        this.handleAddToCart(product, e);
                      }}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      size="small"
                      color="secondary"
                      variant="contained"
                      startIcon={<FlashOnIcon />}
                      sx={{ ml: 1 }}
                      fullWidth
                      onClick={(e) => {
                        e.stopPropagation();
                        this.handleBuyNow(product, e);
                      }}
                    >
                      Buy Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default withNavigation(WomenFashion);
