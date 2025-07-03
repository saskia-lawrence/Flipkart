import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Typography,
  Box,
  Pagination,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Breadcrumbs,
  Link,
  IconButton,
  Paper,
  Divider,
  Chip,
  Rating,
} from "@mui/material";
import {
  Star,
  FilterList,
  ArrowBack,
  ShoppingCart,
  FlashOn,
  FavoriteBorder,
  Share,
} from "@mui/icons-material";
import ZButton from "../../../components/ZButton/zbutton";
import ZToasterMsg from "../../../components/ZTosterMessage/ztostermsg";

import mensFash1 from "../../../utils/assets/images/mensfash1.jpg";
import mensFash2 from "../../../utils/assets/images/mensfash2.jpg";
import mensFash3 from "../../../utils/assets/images/mensfash3.jpg";
import mensFash4 from "../../../utils/assets/images/mensfash4.jpg";
import mensFash5 from "../../../utils/assets/images/mensfash5.jpg";
import mensFash6 from "../../../utils/assets/images/mensfash6.jpg";
import mensFash7 from "../../../utils/assets/images/mensfash7.jpg";
import mensFash8 from "../../../utils/assets/images/mensfash8.jpg";
import mensFash9 from "../../../utils/assets/images/mensfash9.jpg";
import mensFash10 from "../../../utils/assets/images/mensfash10.jpg";
import mensFash11 from "../../../utils/assets/images/mensfash11.jpg";
import mensFash12 from "../../../utils/assets/images/mensfash12.jpg";
import mensFash13 from "../../../utils/assets/images/mensfash13.jpg";
import mensFash14 from "../../../utils/assets/images/mensfash14.jpg";
import mensFash15 from "../../../utils/assets/images/mensfash15.jpg";
import kidsFash1 from "../../../utils/assets/images/kidsfash1.jpg";
import kidsFash2 from "../../../utils/assets/images/kidsfash2.jpg";
import kidsFash3 from "../../../utils/assets/images/kidsfash3.jpg";
import kidsFash4 from "../../../utils/assets/images/kidsfash4.jpg";
import kidsFash5 from "../../../utils/assets/images/kidsfash5.jpg";
import kidsFash6 from "../../../utils/assets/images/kidsfash6.jpg";
import kidsFash7 from "../../../utils/assets/images/kidsfash7.jpg";
import kidsFash8 from "../../../utils/assets/images/kidsfash8.jpg";
import kidsFash9 from "../../../utils/assets/images/kidsfash9.jpg";
import kidsFash10 from "../../../utils/assets/images/kidsfash10.jpg";
import kidsFash11 from "../../../utils/assets/images/kidsfash11.jpg";
import kidsFash12 from "../../../utils/assets/images/kidsfash12.jpg";
import kidsFash13 from "../../../utils/assets/images/kidsfash13.jpg";
import kidsFash14 from "../../../utils/assets/images/kidsfash14.jpg";
import kidsFash15 from "../../../utils/assets/images/kidsfash15.jpg";
import gadg1 from "../../../utils/assets/images/gadg1.jpg";
import gadg2 from "../../../utils/assets/images/gadg2.jpg";
import gadg3 from "../../../utils/assets/images/gadg3.jpg";
import gadg4 from "../../../utils/assets/images/gadg4.jpg";
import gadg5 from "../../../utils/assets/images/gadg5.jpg";
import gadg6 from "../../../utils/assets/images/gadg6.jpg";
import gadg7 from "../../../utils/assets/images/gadg7.jpg";
import gadg8 from "../../../utils/assets/images/gadg8.jpg";
import gadg9 from "../../../utils/assets/images/gadg9.jpg";
import gadg10 from "../../../utils/assets/images/gadg10.jpg";
import gadg11 from "../../../utils/assets/images/gadg11.jpg";
import gadg12 from "../../../utils/assets/images/gadg12.jpg";
import gadg13 from "../../../utils/assets/images/gadg13.jpg";
import gadg14 from "../../../utils/assets/images/gadg14.jpg";
import gadg15 from "../../../utils/assets/images/gadg15.jpg";
import food1 from "../../../utils/assets/images/food1.jpg";
import food2 from "../../../utils/assets/images/food2.jpg";
import food3 from "../../../utils/assets/images/food3.jpg";
import food4 from "../../../utils/assets/images/food4.jpg";
import food5 from "../../../utils/assets/images/food5.jpg";
import food6 from "../../../utils/assets/images/food6.jpg";
import food7 from "../../../utils/assets/images/food7.jpg";
import food8 from "../../../utils/assets/images/food8.jpg";
import food9 from "../../../utils/assets/images/food9.jpg";
import food10 from "../../../utils/assets/images/food10.jpg";
import food11 from "../../../utils/assets/images/food11.jpg";
import food12 from "../../../utils/assets/images/food12.jpg";
import food13 from "../../../utils/assets/images/food13.jpg";
import food14 from "../../../utils/assets/images/food14.jpg";
import food15 from "../../../utils/assets/images/food15.jpg";
import tech1 from "../../../utils/assets/images/tech1.jpg";
import tech2 from "../../../utils/assets/images/tech2.jpg";
import tech3 from "../../../utils/assets/images/tech3.jpg";
import tech4 from "../../../utils/assets/images/tech4.jpg";
import tech5 from "../../../utils/assets/images/tech5.jpg";
import tech6 from "../../../utils/assets/images/tech6.jpg";
import tech7 from "../../../utils/assets/images/tech7.jpg";
import tech8 from "../../../utils/assets/images/tech8.jpg";
import tech9 from "../../../utils/assets/images/tech9.jpg";
import tech10 from "../../../utils/assets/images/tech10.jpg";
import tech11 from "../../../utils/assets/images/tech11.jpg";
import tech12 from "../../../utils/assets/images/tech12.jpg";
import tech13 from "../../../utils/assets/images/tech13.jpg";
import tech14 from "../../../utils/assets/images/tech14.jpg";
import tech15 from "../../../utils/assets/images/tech15.jpg";
import home1 from "../../../utils/assets/images/home1.jpg";
import home2 from "../../../utils/assets/images/home2.jpg";
import home3 from "../../../utils/assets/images/home3.jpg";
import home4 from "../../../utils/assets/images/home4.jpg";
import home5 from "../../../utils/assets/images/home5.jpg";
import home6 from "../../../utils/assets/images/home6.jpg";
import home7 from "../../../utils/assets/images/home7.jpg";
import home8 from "../../../utils/assets/images/home8.jpg";
import home9 from "../../../utils/assets/images/home9.jpg";
import home10 from "../../../utils/assets/images/home10.jpg";
import home11 from "../../../utils/assets/images/home11.jpg";
import home12 from "../../../utils/assets/images/home12.jpg";
import home13 from "../../../utils/assets/images/home13.jpg";
import home14 from "../../../utils/assets/images/home14.jpg";
import home15 from "../../../utils/assets/images/home15.jpg";

const productImages = {
  kids: {
    1: kidsFash1,
    2: kidsFash2,
    3: kidsFash3,
    4: kidsFash4,
    5: kidsFash5,
    6: kidsFash6,
    7: kidsFash7,
    8: kidsFash8,
    9: kidsFash9,
    10: kidsFash10,
    11: kidsFash11,
    12: kidsFash12,
    13: kidsFash13,
    14: kidsFash14,
    15: kidsFash15,
  },
  men: {
    1: mensFash1,
    2: mensFash2,
    3: mensFash3,
    4: mensFash4,
    5: mensFash5,
    6: mensFash6,
    7: mensFash7,
    8: mensFash8,
    9: mensFash9,
    10: mensFash10,
    11: mensFash11,
    12: mensFash12,
    13: mensFash13,
    14: mensFash14,
    15: mensFash15,
  },
  gadget: {
    1: gadg1,
    2: gadg2,
    3: gadg3,
    4: gadg4,
    5: gadg5,
    6: gadg6,
    7: gadg7,
    8: gadg8,
    9: gadg9,
    10: gadg10,
    11: gadg11,
    12: gadg12,
    13: gadg13,
    14: gadg14,
    15: gadg15,
  },
  food: {
    1: food1,
    2: food2,
    3: food3,
    4: food4,
    5: food5,
    6: food6,
    7: food7,
    8: food8,
    9: food9,
    10: food10,
    11: food11,
    12: food12,
    13: food13,
    14: food14,
    15: food15,
  },
  tech: {
    1: tech1,
    2: tech2,
    3: tech3,
    4: tech4,
    5: tech5,
    6: tech6,
    7: tech7,
    8: tech8,
    9: tech9,
    10: tech10,
    11: tech11,
    12: tech12,
    13: tech13,
    14: tech14,
    15: tech15,
  },
  home: {
    1: home1,
    2: home2,
    3: home3,
    4: home4,
    5: home5,
    6: home6,
    7: home7,
    8: home8,
    9: home9,
    10: home10,
    11: home11,
    12: home12,
    13: home13,
    14: home14,
    15: home15,
  },
};

const allProductsList = [
  {
    id: 1,
    name: "Modern Sofa Set",
    price: 899.99,
    rating: 4.7,
    image: productImages.home[1],
    reviews: 156,
    category: "Furniture",
    brand: "ComfortLiving",
    material: "Premium fabric",
    color: "Charcoal gray",
  },
  {
    id: 2,
    name: "Glass Dining Table",
    price: 499.99,
    rating: 4.5,
    image: productImages.home[2],
    reviews: 128,
    category: "Furniture",
    brand: "EleganceHome",
    dimensions: "60'' x 36'' x 30''",
    seats: "6 chairs",
  },
  {
    id: 3,
    name: "Queen Size Bed Frame",
    price: 699.99,
    rating: 4.6,
    image: productImages.home[3],
    reviews: 187,
    category: "Bedroom",
    brand: "SleepWell",
    material: "Solid wood",
    color: "Espresso",
  },
  {
    id: 4,
    name: "Decorative Throw Pillows (Set of 4)",
    price: 49.99,
    rating: 4.3,
    image: productImages.home[4],
    reviews: 92,
    category: "Decor",
    brand: "CozyNest",
    material: "Velvet",
    colors: "Assorted",
  },
  {
    id: 5,
    name: "Area Rug 8x10",
    price: 249.99,
    rating: 4.4,
    image: productImages.home[5],
    reviews: 134,
    category: "Rugs",
    brand: "SoftStep",
    material: "Wool blend",
    pattern: "Geometric",
  },
  {
    id: 6,
    name: "Wall Art Canvas Triptych",
    price: 129.99,
    rating: 4.5,
    image: productImages.home[6],
    reviews: 87,
    category: "Wall Decor",
    brand: "ArtisticHaven",
    size: "36'' x 24'' (each panel)",
    theme: "Abstract",
  },
  {
    id: 7,
    name: "Ceramic Table Lamp",
    price: 59.99,
    rating: 4.2,
    image: productImages.home[7],
    reviews: 76,
    category: "Lighting",
    brand: "Lumina",
    bulb: "LED included",
    height: "22 inches",
  },
  {
    id: 8,
    name: "Bookshelf Storage Unit",
    price: 179.99,
    rating: 4.4,
    image: productImages.home[8],
    reviews: 103,
    category: "Storage",
    brand: "OrganizeIt",
    material: "Engineered wood",
    shelves: "5 adjustable",
  },
  {
    id: 9,
    name: "Kitchen Appliance Set",
    price: 349.99,
    rating: 4.6,
    image: productImages.home[9],
    reviews: 142,
    category: "Kitchen",
    brand: "Chef'sChoice",
    includes: "Toaster, blender, kettle",
  },
  {
    id: 10,
    name: "Bathroom Vanity Set",
    price: 399.99,
    rating: 4.5,
    image: productImages.home[10],
    reviews: 98,
    category: "Bath",
    brand: "AquaStyle",
    material: "Marble top",
    sink: "Porcelain",
  },
  {
    id: 11,
    name: "Outdoor Patio Furniture Set",
    price: 799.99,
    rating: 4.7,
    image: productImages.home[11],
    reviews: 167,
    category: "Outdoor",
    brand: "GardenLiving",
    includes: "Table + 4 chairs",
    material: "Weather-resistant wicker",
  },
  {
    id: 12,
    name: "Blackout Curtains (Pair)",
    price: 69.99,
    rating: 4.3,
    image: productImages.home[12],
    reviews: 114,
    category: "Window Treatments",
    brand: "SunBlock",
    size: "84'' length",
    lightBlocking: "100%",
  },
  {
    id: 13,
    name: "Coffee Table with Storage",
    price: 229.99,
    rating: 4.4,
    image: productImages.home[13],
    reviews: 89,
    category: "Living Room",
    brand: "UrbanNest",
    material: "Wood and metal",
    storage: "Hidden compartment",
  },
  {
    id: 14,
    name: "Smart Home Thermostat",
    price: 199.99,
    rating: 4.8,
    image: productImages.home[14],
    reviews: 203,
    category: "Smart Home",
    brand: "EcoControl",
    compatibility: "Works with Alexa",
  },
  {
    id: 15,
    name: "Decorative Mirror",
    price: 149.99,
    rating: 4.5,
    image: productImages.home[15],
    reviews: 76,
    category: "Decor",
    brand: "Reflections",
    size: "36'' diameter",
    frame: "Gold metal",
  },
  {
    id: 16,
    name: "Wireless Noise-Canceling Headphones",
    price: 349.99,
    rating: 4.8,
    image: productImages.tech[1],
    reviews: 1245,
    category: "Audio",
    brand: "SonicPro",
    batteryLife: "30 hours",
    connectivity: "Bluetooth 5.0",
    color: "Matte Black",
  },
  {
    id: 17,
    name: 'Ultra HD Smart TV 55"',
    price: 899.99,
    rating: 4.7,
    image: productImages.tech[2],
    reviews: 876,
    category: "Television",
    brand: "VisionPlus",
    resolution: "3840 x 2160",
    features: "HDR10+, Smart OS",
  },
  {
    id: 18,
    name: "Gaming Laptop Pro",
    price: 1599.99,
    rating: 4.6,
    image: productImages.tech[3],
    reviews: 542,
    category: "Computers",
    brand: "GameMaster",
    specs: "RTX 3070, 16GB RAM, 1TB SSD",
    processor: "Intel i7-11800H",
  },
  {
    id: 19,
    name: "Smartphone X Pro",
    price: 1099.99,
    rating: 4.9,
    image: productImages.tech[4],
    reviews: 1568,
    category: "Mobile",
    brand: "TechPear",
    storage: "256GB",
    camera: "Triple 48MP system",
  },
  {
    id: 20,
    name: "Fitness Smartwatch",
    price: 249.99,
    rating: 4.5,
    image: productImages.tech[5],
    reviews: 687,
    category: "Wearables",
    brand: "FitTech",
    features: "ECG, Blood oxygen, GPS",
    batteryLife: "7 days",
  },
  {
    id: 21,
    name: "4K Action Camera",
    price: 399.99,
    rating: 4.4,
    image: productImages.tech[6],
    reviews: 432,
    category: "Camera",
    brand: "ActionShot",
    resolution: "4K/60fps",
    waterproof: "10m without case",
  },
  {
    id: 22,
    name: "Wireless Charging Stand",
    price: 59.99,
    rating: 4.3,
    image: productImages.tech[7],
    reviews: 287,
    category: "Accessories",
    brand: "PowerUp",
    compatibility: "Qi-enabled devices",
    chargingSpeed: "15W",
  },
  {
    id: 23,
    name: "Smart Home Hub",
    price: 199.99,
    rating: 4.6,
    image: productImages.tech[8],
    reviews: 354,
    category: "Smart Home",
    brand: "HomeConnect",
    voiceControl: "Alexa, Google Assistant",
    protocols: "Zigbee, Z-Wave",
  },
  {
    id: 24,
    name: "Professional DSLR Camera",
    price: 1499.99,
    rating: 4.7,
    image: productImages.tech[9],
    reviews: 498,
    category: "Photography",
    brand: "PhotoPro",
    sensor: "Full-frame 24.2MP",
    video: "4K/30fps",
  },
  {
    id: 25,
    name: "Portable Bluetooth Speaker",
    price: 129.99,
    rating: 4.5,
    image: productImages.tech[10],
    reviews: 376,
    category: "Audio",
    brand: "BoomSound",
    waterproof: "IPX7",
    batteryLife: "20 hours",
  },
  {
    id: 26,
    name: "E-Reader with Backlight",
    price: 179.99,
    rating: 4.6,
    image: productImages.tech[11],
    reviews: 421,
    category: "Reading",
    brand: "ReadWell",
    storage: "32GB",
    screen: '6.8" 300ppi',
  },
  {
    id: 27,
    name: "Gaming Console",
    price: 499.99,
    rating: 4.8,
    image: productImages.tech[12],
    reviews: 987,
    category: "Gaming",
    brand: "NextGen",
    storage: "1TB SSD",
    resolution: "8K ready",
  },
  {
    id: 28,
    name: "Mechanical Keyboard",
    price: 129.99,
    rating: 4.4,
    image: productImages.tech[13],
    reviews: 254,
    category: "Accessories",
    brand: "TypeMaster",
    switches: "Cherry MX Red",
    backlight: "RGB",
  },
  {
    id: 29,
    name: "VR Headset Pro",
    price: 399.99,
    rating: 4.3,
    image: productImages.tech[14],
    reviews: 187,
    category: "Virtual Reality",
    brand: "VirtualX",
    resolution: "2160x2160 per eye",
    fieldOfView: "110°",
  },
  {
    id: 30,
    name: "External SSD 2TB",
    price: 249.99,
    rating: 4.7,
    image: productImages.tech[15],
    reviews: 342,
    category: "Storage",
    brand: "FastDrive",
    speed: "1050MB/s read",
    interface: "USB-C 3.2",
  },
  {
    id: 31,
    name: "Organic Whole Grain Bread",
    price: 5.99,
    rating: 4.7,
    image: productImages.food[1],
    reviews: 156,
    category: "Bakery",
    brand: "Nature's Harvest",
    weight: "500g",
    ingredients: "Organic whole wheat flour, water, yeast, salt",
    dietaryInfo: "Vegan, No preservatives",
  },
  {
    id: 32,
    name: "Extra Virgin Olive Oil",
    price: 12.99,
    rating: 4.8,
    image: productImages.food[2],
    reviews: 245,
    category: "Pantry",
    brand: "Mediterranean Gold",
    volume: "500ml",
    origin: "Italy",
    acidity: "<0.5%",
  },
  {
    id: 33,
    name: "Grass-Fed Beef Steak",
    price: 18.99,
    rating: 4.6,
    image: productImages.food[3],
    reviews: 187,
    category: "Meat",
    brand: "Pasture Raised",
    weight: "400g",
    cut: "Ribeye",
    aging: "21 days",
  },
  {
    id: 34,
    name: "Organic Free-Range Eggs",
    price: 6.49,
    rating: 4.5,
    image: productImages.food[4],
    reviews: 203,
    category: "Dairy & Eggs",
    brand: "Happy Hens",
    quantity: "12 eggs",
    size: "Large",
    certification: "USDA Organic",
  },
  {
    id: 35,
    name: "Fresh Strawberries",
    price: 4.99,
    rating: 4.4,
    image: productImages.food[5],
    reviews: 167,
    category: "Produce",
    brand: "Berry Best",
    weight: "1lb",
    origin: "Local farm",
    organic: true,
  },
  {
    id: 36,
    name: "Artisan Dark Chocolate",
    price: 8.99,
    rating: 4.7,
    image: productImages.food[6],
    reviews: 189,
    category: "Snacks",
    brand: "Cocoa Masters",
    weight: "100g",
    cocoaContent: "70%",
    ingredients: "Cocoa beans, cane sugar, cocoa butter",
  },
  {
    id: 37,
    name: "Cold-Pressed Juice",
    price: 7.49,
    rating: 4.3,
    image: productImages.food[7],
    reviews: 134,
    category: "Beverages",
    brand: "Pure Press",
    flavor: "Green Detox",
    volume: "500ml",
    ingredients: "Kale, apple, celery, lemon, ginger",
  },
  {
    id: 38,
    name: "Gourmet Coffee Beans",
    price: 14.99,
    rating: 4.8,
    image: productImages.food[8],
    reviews: 276,
    category: "Beverages",
    brand: "Morning Brew",
    weight: "1lb",
    roast: "Medium",
    origin: "Colombia",
  },
  {
    id: 39,
    name: "Organic Quinoa",
    price: 9.99,
    rating: 4.5,
    image: productImages.food[9],
    reviews: 142,
    category: "Grains",
    brand: "Ancient Harvest",
    weight: "1kg",
    cookingTime: "15 mins",
    proteinContent: "14g per 100g",
  },
  {
    id: 40,
    name: "Wild-Caught Salmon Fillet",
    price: 22.99,
    rating: 4.7,
    image: productImages.food[10],
    reviews: 198,
    category: "Seafood",
    brand: "Ocean's Best",
    weight: "500g",
    origin: "Alaska",
    omega3: "High",
  },
  {
    id: 41,
    name: "Greek Yogurt",
    price: 5.49,
    rating: 4.6,
    image: productImages.food[11],
    reviews: 231,
    category: "Dairy",
    brand: "Hellenic Farms",
    weight: "500g",
    fatContent: "5%",
    probiotic: "Contains live cultures",
  },
  {
    id: 42,
    name: "Organic Almond Butter",
    price: 11.99,
    rating: 4.5,
    image: productImages.food[12],
    reviews: 167,
    category: "Pantry",
    brand: "Nutty Goodness",
    weight: "350g",
    ingredients: "100% organic almonds",
    sugarFree: true,
  },
  {
    id: 43,
    name: "Fresh Basil Pesto",
    price: 6.99,
    rating: 4.4,
    image: productImages.food[13],
    reviews: 112,
    category: "Condiments",
    brand: "Italian Touch",
    weight: "200g",
    ingredients: "Basil, olive oil, pine nuts, garlic, parmesan",
    preservatives: "None",
  },
  {
    id: 44,
    name: "Gluten-Free Pasta",
    price: 7.99,
    rating: 4.3,
    image: productImages.food[14],
    reviews: 98,
    category: "Pantry",
    brand: "Pasta Lovers",
    weight: "400g",
    ingredients: "Brown rice flour, quinoa flour",
    cookingTime: "8-10 mins",
  },
  {
    id: 45,
    name: "Organic Avocados",
    price: 3.99,
    rating: 4.5,
    image: productImages.food[15],
    reviews: 203,
    category: "Produce",
    brand: "Green Gold",
    quantity: "3 avocados",
    ripeness: "Ready to eat",
    origin: "Mexico",
  },
  {
    id: 46,
    name: "Wireless Bluetooth Earbuds",
    price: 79.99,
    rating: 4.6,
    image: productImages.gadget[1],
    reviews: 245,
    category: "Audio",
    brand: "SoundMaster",
    batteryLife: "8 hours",
    color: "Black",
  },
  {
    id: 47,
    name: "Smart Fitness Band",
    price: 49.99,
    rating: 4.3,
    image: productImages.gadget[2],
    reviews: 187,
    category: "Wearables",
    brand: "FitTech",
    features: "Heart rate monitor, Sleep tracking",
  },
  {
    id: 48,
    name: "4K Ultra HD Smart TV",
    price: 699.99,
    rating: 4.8,
    image: productImages.gadget[3],
    reviews: 312,
    category: "Televisions",
    brand: "VisionPlus",
    screenSize: "55 inch",
  },
  {
    id: 49,
    name: "Gaming Laptop",
    price: 1299.99,
    rating: 4.7,
    image: productImages.gadget[4],
    reviews: 156,
    category: "Computers",
    brand: "GameMaster",
    specs: "16GB RAM, 1TB SSD, RTX 3060",
  },
  {
    id: 50,
    name: "Wireless Charging Pad",
    price: 29.99,
    rating: 4.2,
    image: productImages.gadget[5],
    reviews: 98,
    category: "Accessories",
    brand: "PowerUp",
    compatibility: "Qi-enabled devices",
  },
  {
    id: 51,
    name: "Smartphone Pro Max",
    price: 999.99,
    rating: 4.9,
    image: productImages.gadget[6],
    reviews: 421,
    category: "Mobile Phones",
    brand: "Pear",
    storage: "256GB",
  },
  {
    id: 52,
    name: "Noise Cancelling Headphones",
    price: 199.99,
    rating: 4.5,
    image: productImages.gadget[7],
    reviews: 276,
    category: "Audio",
    brand: "SoundMaster",
    batteryLife: "30 hours",
  },
  {
    id: 53,
    name: "Smart Home Hub",
    price: 149.99,
    rating: 4.4,
    image: productImages.gadget[8],
    reviews: 134,
    category: "Smart Home",
    brand: "HomeConnect",
    compatibility: "Works with Alexa & Google",
  },
  {
    id: 54,
    name: "Digital SLR Camera",
    price: 899.99,
    rating: 4.7,
    image: productImages.gadget[9],
    reviews: 198,
    category: "Photography",
    brand: "PhotoPro",
    resolution: "24.2MP",
  },
  {
    id: 55,
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    rating: 4.3,
    image: productImages.gadget[10],
    reviews: 167,
    category: "Audio",
    brand: "BoomSound",
    waterproof: "IPX7",
  },
  {
    id: 56,
    name: "Smart Watch Pro",
    price: 249.99,
    rating: 4.6,
    image: productImages.gadget[11],
    reviews: 231,
    category: "Wearables",
    brand: "TechWear",
    features: "ECG, Blood oxygen monitor",
  },
  {
    id: 57,
    name: 'Tablet 10.5"',
    price: 349.99,
    rating: 4.4,
    image: productImages.gadget[12],
    reviews: 143,
    category: "Tablets",
    brand: "Pear",
    storage: "128GB",
  },
  {
    id: 58,
    name: "Wireless Keyboard & Mouse",
    price: 59.99,
    rating: 4.1,
    image: productImages.gadget[13],
    reviews: 87,
    category: "Computer Accessories",
    brand: "TypeFast",
    connectivity: "Bluetooth 5.0",
  },
  {
    id: 59,
    name: "VR Headset",
    price: 299.99,
    rating: 4.3,
    image: productImages.gadget[14],
    reviews: 112,
    category: "Gaming",
    brand: "VirtualX",
    compatibility: "PC & Mobile",
  },
  {
    id: 60,
    name: "External SSD 1TB",
    price: 129.99,
    rating: 4.7,
    image: productImages.gadget[15],
    reviews: 203,
    category: "Storage",
    brand: "FastDrive",
    speed: "1050MB/s",
  },
  {
    id: 61,
    name: "Cute Baby Onesie",
    price: 19.99,
    rating: 4.5,
    image: productImages.kids[1],
    reviews: 98,
    category: "Baby Fashion",
    ageGroup: "0-12 months",
  },
  {
    id: 62,
    name: "Adorable Romper Set",
    price: 24.99,
    rating: 4.3,
    image: productImages.kids[2],
    reviews: 76,
    category: "Baby Fashion",
    ageGroup: "0-12 months",
  },
  {
    id: 63,
    name: "Soft Cotton Bodysuit",
    price: 14.99,
    rating: 4.2,
    image: productImages.kids[3],
    reviews: 65,
    category: "Baby Fashion",
    ageGroup: "0-12 months",
  },
  {
    id: 64,
    name: "Baby Hoodie Jacket",
    price: 22.99,
    rating: 4.4,
    image: productImages.kids[4],
    reviews: 82,
    category: "Baby Fashion",
    ageGroup: "0-12 months",
  },
  {
    id: 65,
    name: "Striped Baby Pants",
    price: 16.99,
    rating: 4.1,
    image: productImages.kids[5],
    reviews: 54,
    category: "Baby Fashion",
    ageGroup: "0-12 months",
  },
  {
    id: 66,
    name: "Baby Animal Costume",
    price: 29.99,
    rating: 4.7,
    image: productImages.kids[6],
    reviews: 112,
    category: "Baby Fashion",
    ageGroup: "0-12 months",
  },
  {
    id: 67,
    name: "Baby Denim Overalls",
    price: 26.99,
    rating: 4.3,
    image: productImages.kids[7],
    reviews: 68,
    category: "Baby Fashion",
    ageGroup: "0-12 months",
  },
  {
    id: 68,
    name: "Baby Winter Jacket",
    price: 34.99,
    rating: 4.6,
    image: productImages.kids[8],
    reviews: 94,
    category: "Baby Fashion",
    ageGroup: "0-12 months",
  },
  {
    id: 69,
    name: "Boys Graphic T-Shirt",
    price: 15.99,
    rating: 4.2,
    image: productImages.kids[9],
    reviews: 87,
    category: "Kids Fashion",
    ageGroup: "2-8 years",
  },
  {
    id: 70,
    name: "Boys Cargo Shorts",
    price: 19.99,
    rating: 4.3,
    image: productImages.kids[10],
    reviews: 76,
    category: "Kids Fashion",
    ageGroup: "2-8 years",
  },
  {
    id: 71,
    name: "Boys Hooded Sweatshirt",
    price: 24.99,
    rating: 4.5,
    image: productImages.kids[11],
    reviews: 92,
    category: "Kids Fashion",
    ageGroup: "2-8 years",
  },
  {
    id: 72,
    name: "Boys Athletic Pants",
    price: 21.99,
    rating: 4.1,
    image: productImages.kids[12],
    reviews: 63,
    category: "Kids Fashion",
    ageGroup: "2-8 years",
  },
  {
    id: 73,
    name: "Boys Denim Jeans",
    price: 27.99,
    rating: 4.4,
    image: productImages.kids[13],
    reviews: 78,
    category: "Kids Fashion",
    ageGroup: "2-8 years",
  },
  {
    id: 74,
    name: "Boys Winter Coat",
    price: 39.99,
    rating: 4.7,
    image: productImages.kids[14],
    reviews: 105,
    category: "Kids Fashion",
    ageGroup: "2-8 years",
  },
  {
    id: 75,
    name: "Boys Swim Trunks",
    price: 17.99,
    rating: 4.0,
    image: productImages.kids[15],
    reviews: 58,
    category: "Kids Fashion",
    ageGroup: "2-8 years",
  },
  {
    id: 76,
    name: "Classic White Shirt",
    price: 39.99,
    rating: 4.5,
    image: productImages.men[1],
    reviews: 128,
    category: "Men's Fashion",
  },
  {
    id: 77,
    name: "Slim Fit Jeans",
    price: 59.99,
    rating: 4.2,
    image: productImages.men[2],
    reviews: 86,
    category: "Men's Fashion",
  },
  {
    id: 78,
    name: "Casual T-Shirt",
    price: 24.99,
    rating: 4.0,
    image: productImages.men[3],
    reviews: 45,
    category: "Men's Fashion",
  },
  {
    id: 79,
    name: "Formal Suit",
    price: 199.99,
    rating: 4.7,
    image: productImages.men[4],
    reviews: 210,
    category: "Men's Fashion",
  },
  {
    id: 80,
    name: "Sports Jacket",
    price: 79.99,
    rating: 4.3,
    image: productImages.men[5],
    reviews: 156,
    category: "Men's Fashion",
  },
  {
    id: 81,
    name: "Denim Jacket",
    price: 89.99,
    rating: 4.4,
    image: productImages.men[6],
    reviews: 92,
    category: "Men's Fashion",
  },
  {
    id: 82,
    name: "Cargo Pants",
    price: 49.99,
    rating: 4.1,
    image: productImages.men[7],
    reviews: 78,
    category: "Men's Fashion",
  },
  {
    id: 83,
    name: "Winter Coat",
    price: 129.99,
    rating: 4.6,
    image: productImages.men[8],
    reviews: 134,
    category: "Men's Fashion",
  },
  {
    id: 84,
    name: "Polo Shirt",
    price: 34.99,
    rating: 4.0,
    image: productImages.men[9],
    reviews: 65,
    category: "Men's Fashion",
  },
  {
    id: 85,
    name: "Leather Jacket",
    price: 159.99,
    rating: 4.8,
    image: productImages.men[10],
    reviews: 187,
    category: "Men's Fashion",
  },
  {
    id: 86,
    name: "Casual Sneakers",
    price: 69.99,
    rating: 4.4,
    image: productImages.men[11],
    reviews: 112,
    category: "Men's Fashion",
  },
  {
    id: 87,
    name: "Chinos Pants",
    price: 44.99,
    rating: 4.2,
    image: productImages.men[12],
    reviews: 53,
    category: "Men's Fashion",
  },
  {
    id: 88,
    name: "Business Shirt",
    price: 49.99,
    rating: 4.3,
    image: productImages.men[13],
    reviews: 47,
    category: "Men's Fashion",
  },
  {
    id: 89,
    name: "Hoodie Sweatshirt",
    price: 54.99,
    rating: 4.2,
    image: productImages.men[14],
    reviews: 89,
    category: "Men's Fashion",
  },
  {
    id: 90,
    name: "Summer Shorts",
    price: 29.99,
    rating: 4.0,
    image: productImages.men[15],
    reviews: 36,
    category: "Men's Fashion",
  },
];

const Products = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [toaster, setToaster] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [isLoading, setIsLoading] = useState(true);

  const productsPerPage = 12;

  const categoryMappings = {
    men: ["Men's Fashion"],
    kids: ["Baby Fashion", "Kids Fashion"],
    gadget: [
      "Audio",
      "Wearables",
      "Televisions",
      "Computers",
      "Accessories",
      "Smart Home",
      "Photography",
      "Tablets",
      "Computer Accessories",
      "Gaming",
      "Mobile Phones",
    ],
    food: [
      "Bakery",
      "Pantry",
      "Meat",
      "Dairy & Eggs",
      "Produce",
      "Snacks",
      "Beverages",
      "Grains",
      "Seafood",
      "Dairy",
      "Condiments",
    ],
    tech: [
      "Audio",
      "Television",
      "Computers",
      "Mobile",
      "Wearables",
      "Camera",
      "Smart Home",
      "Photography",
      "Reading",
      "Gaming",
      "Virtual Reality",
      "Storage",
    ],
    home: [
      "Furniture",
      "Bedroom",
      "Decor",
      "Rugs",
      "Wall Decor",
      "Lighting",
      "Storage",
      "Kitchen",
      "Bath",
      "Outdoor",
      "Window Treatments",
      "Living Room",
    ],
  };

  // Load products by category
  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setProducts(allProductsList);
      setFilteredProducts(allProductsList);
      setCurrentPage(1);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart]);

  // Sort products
  useEffect(() => {
    if (!sortOption || sortOption === "featured") {
      setFilteredProducts([...products]);
      return;
    }

    const sorted = [...products];
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
        break;
    }
    setFilteredProducts(sorted);
  }, [sortOption, products]);

  const handleAddToCart = (product, e) => {
    e?.stopPropagation();

    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      showToaster(`${product.name} quantity updated`);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      showToaster(`${product.name} added to cart`);
    }
  };

  const handleBuyNow = (product, e) => {
    e?.stopPropagation();
    handleAddToCart(product, e);
    navigate("/payment", {
      state: {
        products: [...cart, { ...product, quantity: 1 }],
        fromCart: false,
      },
    });
  };

  const showToaster = (message) => {
    setToaster({
      open: true,
      message,
      severity: "success",
    });
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleBackClick = () => {
    if (selectedProduct) {
      setSelectedProduct(null);
    } else {
      navigate(-1);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const categoryTitles = {
    men: "Men's Fashion",
    kids: "Kids & Baby",
    gadget: "Tech Gadgets",
    food: "Gourmet Food",
    tech: "Electronics",
    home: "Home & Living",
  };

  const getCategoryTitle = () => {
    if (!category) return "Products";
    const lower = category.toLowerCase();
    return categoryTitles[lower] || category;
  };

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress />
      </Box>
    );
  }

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
              <Link
                color="inherit"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                <Typography variant="body2">Home</Typography>
              </Link>
              <Link
                color="inherit"
                href={`/${category}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${category}`);
                }}
              >
                <Typography variant="body2">{getCategoryTitle()}</Typography>
              </Link>
              <Typography variant="body2" color="textPrimary">
                {selectedProduct.name}
              </Typography>
            </Breadcrumbs>
            <IconButton
              onClick={handleBackClick}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
              }}
            >
              <ArrowBack />
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
                      startIcon={<ShoppingCart />}
                      onClick={(e) => handleAddToCart(selectedProduct, e)}
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
                      startIcon={<FlashOn />}
                      onClick={(e) => handleBuyNow(selectedProduct, e)}
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

              <Grid item xs={12} md={6}>
                <Box display="flex" flexDirection="column" height="100%">
                  <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                    {selectedProduct.name}
                  </Typography>

                  <Box display="flex" alignItems="center" mb={2}>
                    <Rating
                      value={selectedProduct.rating}
                      precision={0.5}
                      readOnly
                    />
                    <Typography variant="body2" color="textSecondary" ml={1}>
                      ({selectedProduct.reviews} ratings)
                    </Typography>
                  </Box>

                  <Box display="flex" gap={1} mb={3}>
                    <IconButton>
                      <FavoriteBorder />
                    </IconButton>
                    <IconButton>
                      <Share />
                    </IconButton>
                  </Box>

                  <Box mb={3}>
                    <Typography variant="h4" color="primary" sx={{ mb: 1 }}>
                      ${selectedProduct.price.toFixed(2)}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ textDecoration: "line-through" }}
                    >
                      M.R.P.: ${(selectedProduct.price * 1.5).toFixed(2)}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="success.main"
                      sx={{ fontWeight: "bold" }}
                    >
                      (33% off)
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Inclusive of all taxes
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      EMI starts at ₹{(selectedProduct.price / 12).toFixed(0)}.
                      No Cost EMI available
                    </Typography>
                    <Chip
                      label={
                        <Typography variant="body2">Bestseller</Typography>
                      }
                      color="primary"
                      size="small"
                      sx={{ mb: 2, mt: 5 }}
                    />
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                      Product Details:
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      - Material: {selectedProduct.material || "High quality"}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      - Brand: {selectedProduct.brand || "Premium brand"}
                    </Typography>
                    <Typography variant="body2">
                      - Category: {selectedProduct.category}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Card>

        <ZToasterMsg
          open={toaster.open}
          message={toaster.message}
          severity={toaster.severity}
          onClose={() => setToaster({ ...toaster, open: false })}
        />
      </Container>
    );
  }

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
          {getCategoryTitle()}
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
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => handleProductClick(product)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6">
                      {product.name}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          fontSize="small"
                          color={
                            star <= Math.floor(product.rating)
                              ? "warning"
                              : star === Math.ceil(product.rating) &&
                                product.rating % 1 >= 0.5
                              ? "warning"
                              : "disabled"
                          }
                        />
                      ))}
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        ({product.reviews})
                      </Typography>
                    </Box>
                    <Typography variant="h6" color="primary">
                      ${product.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2, display: "flex", gap: 1 }}>
                    <ZButton
                      fullWidth
                      variant="contained"
                      startIcon={<ShoppingCart />}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product, e);
                      }}
                    >
                      Add to Cart
                    </ZButton>
                    <ZButton
                      fullWidth
                      variant="outlined"
                      startIcon={<FlashOn />}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBuyNow(product, e);
                      }}
                    >
                      Buy Now
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
