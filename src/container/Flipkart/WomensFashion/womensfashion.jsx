import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Rating,
  Box,
  Container,
  Paper,
  Divider,
  Chip,
  IconButton,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { GetApi } from "../../../utils/api/networking";
import { ApiUrl } from "../../../utils/api/apiUrl";
import ZTypography from "../../../components/ZTyptography/ztyptography";
import ZButton from "../../../components/ZButton/zbutton";
import ZToasterMsg from "../../../components/ZTosterMessage/ztostermsg";

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
import womenFash17 from "../../../utils/assets/images/womenFash17.jpg";
import womenFash18 from "../../../utils/assets/images/womenFash18.jpg";

const withNavigation = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
};

class WomenFashion extends React.Component {
  constructor(props) {
    super(props);

    this.productImages = {
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
      17: womenFash17,
      18: womenFash18,
    };

    this.state = {
      cart: [],
      selectedProduct: null,
      products: [],
      notification: {
        show: false,
        message: "",
      },
    };
  }

  fetchProducts = async () => {
    try {
      const data = await GetApi(ApiUrl.GetWomensFashion);

      if (data.status === "S" && data.data) {
        const products = data.data.map((item) => ({
          id: item.womId,
          name: item.womName,
          price: item.womPrice,
          rating: item.womRating,
          image: this.productImages[item.womId] || "default.jpg",
          reviews: item.womReviews,
          category: "Women's Fashion",
        }));
        this.setState({ products });
      } else {
        throw new Error(data.message || "Failed to fetch products");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      this.setState({
        error: error.message,
        products: [],
      });
    }
  };

  handleAddToCart = (product, e) => {
    e?.stopPropagation();

    const savedCart = localStorage.getItem("cart");
    let cart = savedCart ? JSON.parse(savedCart) : [];

    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      cart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      cart = [...cart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));

    this.setState({
      notification: {
        show: true,
        message: existingItem
          ? `${product.name} quantity updated`
          : `${product.name} added to cart`,
      },
      cart,
    });

    setTimeout(() => {
      this.setState({ notification: { show: false, message: "" } });
    }, 3000);
  };

  handleBuyNow = (product, e) => {
    e?.stopPropagation();
    this.handleAddToCart(product, e);
    this.props.navigate("/payment", {
      state: {
        products: this.state.cart.concat({ ...product, quantity: 1 }),
        fromCart: false,
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
    this.fetchProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart !== this.state.cart) {
      localStorage.setItem("cart", JSON.stringify(this.state.cart));
    }
  }

  handleBackToList = () => {
    this.setState({ selectedProduct: null });
  };

  render() {
    const { products, selectedProduct } = this.state;

    if (selectedProduct) {
      return (
        <Container maxWidth="lg" sx={{ py: 2, px: 2 }}>
          <Card
            sx={{
              p: 5,
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              minHeight: "100vh",
              position: "relative",
            }}
          >
            <Box sx={{ mb: 3 }}>
              <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                <Link color="inherit" href="/">
                  Home
                </Link>
                <Link color="inherit" href="/womens-fashion">
                  Women's Fashion
                </Link>
                <ZTypography color="text.primary">
                  {selectedProduct.name}
                </ZTypography>
              </Breadcrumbs>
              <IconButton
                onClick={this.handleBackToList}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                }}
              >
                <ArrowBackIcon />
              </IconButton>
            </Box>

            <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardMedia
                      component="img"
                      image={selectedProduct.image}
                      alt={selectedProduct.name}
                      sx={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "500px",
                        borderRadius: 2,
                        objectFit: "contain",
                        mb: 3,
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <ZButton
                        variant="contained"
                        color="primary"
                        startIcon={<ShoppingCartIcon />}
                        onClick={(e) =>
                          this.handleAddToCart(selectedProduct, e)
                        }
                        sx={{
                          py: 2,
                          flex: 1,
                          borderRadius: 1,
                        }}
                      >
                        Add to Cart
                      </ZButton>
                      <ZButton
                        variant="contained"
                        color="secondary"
                        startIcon={<FlashOnIcon />}
                        onClick={(e) => this.handleBuyNow(selectedProduct, e)}
                        sx={{
                          py: 2,
                          flex: 1,
                          borderRadius: 1,
                        }}
                      >
                        Buy Now
                      </ZButton>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6} ml={15}>
                  <Box display="flex" flexDirection="column" height="100%">
                    <ZTypography
                      variant="h4"
                      sx={{ fontWeight: "bold", mb: 1 }}
                    >
                      {selectedProduct.name}
                    </ZTypography>

                    <Box display="flex" alignItems="center" mb={2}>
                      <Rating
                        value={selectedProduct.rating}
                        precision={0.5}
                        readOnly
                      />
                      <ZTypography
                        variant="body2"
                        color="text.secondary"
                        ml={1}
                      >
                        ({selectedProduct.reviews} ratings)
                      </ZTypography>
                    </Box>

                    <Box display="flex" gap={1} mb={3}>
                      <IconButton aria-label="add to favorites" color="primary">
                        <FavoriteBorderIcon />
                      </IconButton>
                      <IconButton aria-label="share" color="primary">
                        <ShareIcon />
                      </IconButton>
                    </Box>

                    <Box mb={3}>
                      <ZTypography variant="h4" color="primary" sx={{ mb: 1 }}>
                        ${selectedProduct.price.toFixed(2)}
                      </ZTypography>
                      <ZTypography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textDecoration: "line-through" }}
                      >
                        M.R.P.: ${(selectedProduct.price * 1.5).toFixed(2)}
                      </ZTypography>
                      <ZTypography
                        variant="body2"
                        color="success.main"
                        sx={{ fontWeight: "bold" }}
                      >
                        (33% off)
                      </ZTypography>
                      <ZTypography variant="body2" sx={{ mt: 1 }}>
                        Inclusive of all taxes
                      </ZTypography>
                      <ZTypography variant="body2" sx={{ mt: 1 }}>
                        EMI starts at ₹{(selectedProduct.price / 12).toFixed(0)}
                        . No Cost EMI available
                      </ZTypography>
                      <Chip
                        label="Bestseller"
                        color="primary"
                        size="small"
                        sx={{ mb: 2, mt: 5 }}
                      />
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ mb: 3 }}>
                      <ZTypography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold", mb: 1 }}
                      >
                        Product Details:
                      </ZTypography>
                      <ZTypography variant="body2" sx={{ mb: 1 }}>
                        - Material: 100% Cotton
                      </ZTypography>
                      <ZTypography variant="body2" sx={{ mb: 1 }}>
                        - Care Instructions: Machine wash cold
                      </ZTypography>
                      <ZTypography variant="body2">
                        - Size: Available in S, M, L, XL
                      </ZTypography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Card>

          <ZToasterMsg
            open={this.state.notification.show}
            message={this.state.notification.message}
            severity="success"
            onClose={() =>
              this.setState({ notification: { show: false, message: "" } })
            }
          />
        </Container>
      );
    }

    return (
      <Container maxWidth="xl" sx={{ px: 5 }}>
        <Card
          sx={{
            p: 5,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <IconButton
              onClick={() => this.props.navigate("/dashboard")}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Box>

          <Paper elevation={0} sx={{ p: 4, mt: -7, borderRadius: 2 }}>
            <ZTypography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Women's Fashion
            </ZTypography>
            <ZTypography variant="subtitle1" sx={{ mb: 4 }}>
              Discover our latest collection for women
            </ZTypography>

            <Grid container spacing={4} sx={{ px: 5 }}>
              {products.length > 0 ? (
                products.map((product) => (
                  <Grid key={product.id} size={4}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        boxShadow: 2,
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
                        <ZTypography gutterBottom variant="h6" component="div">
                          {product.name}
                        </ZTypography>
                        <ZTypography variant="h6" color="text.primary">
                          ${product.price.toFixed(2)}
                        </ZTypography>
                        <Box display="flex" alignItems="center" mt={1}>
                          <Rating
                            name="read-only"
                            value={product.rating}
                            precision={0.5}
                            readOnly
                          />
                          <ZTypography
                            variant="body2"
                            color="text.secondary"
                            ml={1}
                          >
                            ({product.reviews} reviews)
                          </ZTypography>
                        </Box>
                      </CardContent>
                      <CardActions>
                        <ZButton
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
                        </ZButton>
                        <ZButton
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
                        </ZButton>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              ) : (
                <ZTypography variant="body1" sx={{ p: 4, width: "100%" }}>
                  No products available
                </ZTypography>
              )}
            </Grid>
          </Paper>
        </Card>
      </Container>
    );
  }
}

export default withNavigation(WomenFashion);
