import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Pagination,
} from "@mui/material";
import {
  LocalOffer,
  Star,
  FilterList,
  ArrowBack,
  ShoppingCart,
} from "@mui/icons-material";
import ZButton from "../../components/ZButton/zbutton";
import ZToasterMsg from "../../components/ZTosterMessage/ztostermsg";

const Products = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [toaster, setToaster] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const productsPerPage = 12;

  const allProducts = [
    {
      id: 1,
      name: "Classic White Shirt",
      price: 39.99,
      rating: 4.5,
      image: productImages[1],
      reviews: 128,
      category: "Men's Fashion",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: 59.99,
      rating: 4.2,
      image: productImages[2],
      reviews: 86,
      category: "Men's Fashion",
    },
    {
      id: 3,
      name: "Casual T-Shirt",
      price: 24.99,
      rating: 4.0,
      image: productImages[3],
      reviews: 45,
      category: "Men's Fashion",
    },
    {
      id: 4,
      name: "Formal Suit",
      price: 199.99,
      rating: 4.7,
      image: productImages[4],
      reviews: 210,
      category: "Men's Fashion",
    },
    {
      id: 5,
      name: "Sports Jacket",
      price: 79.99,
      rating: 4.3,
      image: productImages[5],
      reviews: 156,
      category: "Men's Fashion",
    },
    {
      id: 6,
      name: "Denim Jacket",
      price: 89.99,
      rating: 4.4,
      image: productImages[6],
      reviews: 92,
      category: "Men's Fashion",
    },
    {
      id: 7,
      name: "Cargo Pants",
      price: 49.99,
      rating: 4.1,
      image: productImages[7],
      reviews: 78,
      category: "Men's Fashion",
    },
    {
      id: 8,
      name: "Winter Coat",
      price: 129.99,
      rating: 4.6,
      image: productImages[8],
      reviews: 134,
      category: "Men's Fashion",
    },
    {
      id: 9,
      name: "Polo Shirt",
      price: 34.99,
      rating: 4.0,
      image: productImages[9],
      reviews: 65,
      category: "Men's Fashion",
    },
    {
      id: 10,
      name: "Leather Jacket",
      price: 159.99,
      rating: 4.8,
      image: productImages[10],
      reviews: 187,
      category: "Men's Fashion",
    },
    {
      id: 11,
      name: "Casual Sneakers",
      price: 69.99,
      rating: 4.4,
      image: productImages[11],
      reviews: 112,
      category: "Men's Fashion",
    },
    {
      id: 12,
      name: "Chinos Pants",
      price: 44.99,
      rating: 4.2,
      image: productImages[12],
      reviews: 53,
      category: "Men's Fashion",
    },
    {
      id: 13,
      name: "Business Shirt",
      price: 49.99,
      rating: 4.3,
      image: productImages[13],
      reviews: 47,
      category: "Men's Fashion",
    },
    {
      id: 14,
      name: "Hoodie Sweatshirt",
      price: 54.99,
      rating: 4.2,
      image: productImages[14],
      reviews: 89,
      category: "Men's Fashion",
    },
    {
      id: 15,
      name: "Summer Shorts",
      price: 29.99,
      rating: 4.0,
      image: productImages[15],
      reviews: 36,
      category: "Men's Fashion",
    },
  ];

  useEffect(() => {
    // Filter products by category
    const categoryProducts = allProducts.filter(
      (product) => product.category === category
    );
    setProducts(categoryProducts);
    setFilteredProducts(categoryProducts);
    setCurrentPage(1);
  }, [category]);

  useEffect(() => {
    // Apply sorting
    let sorted = [...products];
    switch (sortOption) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - keep original order
        break;
    }
    setFilteredProducts(sorted);
  }, [sortOption, products]);

  const handleAddToCart = (product) => {
    // Add to cart logic
    setToaster({
      open: true,
      message: `${product.name} added to cart`,
      severity: "success",
    });
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const categoryTitles = {
    womens: "Women's Fashion",
    mens: "Men's Fashion",
    kids: "Kids & Baby",
    electronics: "Electronics",
    homeliving: "Home & Living",
    beautyproducts: "Beauty Products",
    food: "Gourmet Food",
    techgadgets: "Tech Gadgets",
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <ZButton
          startIcon={<ArrowBack />}
          onClick={handleBackClick}
          sx={{ textTransform: "none" }}
        >
          Back
        </ZButton>
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
          {categoryTitles[category.toLowerCase()] || category}
        </Typography>
        <FormControl sx={{ minWidth: 180 }} size="small">
          <InputLabel>
            <FilterList sx={{ mr: 1 }} />
            Sort By
          </InputLabel>
          <Select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            label="Sort By"
          >
            <MenuItem value="featured">Featured</MenuItem>
            <MenuItem value="price-low">Price: Low to High</MenuItem>
            <MenuItem value="price-high">Price: High to Low</MenuItem>
            <MenuItem value="rating">Customer Rating</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {currentProducts.length > 0 ? (
        <>
          <Grid container spacing={3}>
            {currentProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 3,
                    },
                  }}
                >
                  {product.featured && (
                    <Chip
                      label="Featured"
                      color="primary"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        zIndex: 1,
                      }}
                    />
                  )}
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h3">
                      {product.name}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          fontSize="small"
                          color={
                            star <= product.rating ? "warning" : "disabled"
                          }
                        />
                      ))}
                    </Box>
                    <Typography variant="h6" color="primary">
                      ${product.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2 }}>
                    <ZButton
                      fullWidth
                      variant="contained"
                      startIcon={<ShoppingCart />}
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </ZButton>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          {pageCount > 1 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Pagination
                count={pageCount}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          )}
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            No products found in this category
          </Typography>
          <ZButton variant="contained" onClick={handleBackClick}>
            Continue Shopping
          </ZButton>
        </Box>
      )}

      <ZToasterMsg
        open={toaster.open}
        message={toaster.message}
        severity={toaster.severity}
        onClose={() => setToaster({ ...toaster, open: false })}
      />
    </Container>
  );
};

export default Products;
