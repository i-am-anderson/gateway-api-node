const mockup = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 29.99,
    inStock: true,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 89.99,
    inStock: true,
  },
  {
    id: 3,
    name: "Gaming Headset",
    category: "Electronics",
    price: 59.99,
    inStock: false,
  },
  {
    id: 4,
    name: "USB-C Hub",
    category: "Accessories",
    price: 24.99,
    inStock: true,
  },
  {
    id: 5,
    name: "Portable Charger",
    category: "Accessories",
    price: 19.99,
    inStock: true,
  },
  {
    id: 6,
    name: "Smartphone Stand",
    category: "Accessories",
    price: 9.99,
    inStock: true,
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 49.99,
    inStock: false,
  },
  {
    id: 8,
    name: "Noise Cancelling Earbuds",
    category: "Electronics",
    price: 99.99,
    inStock: true,
  },
  {
    id: 9,
    name: "Laptop Cooling Pad",
    category: "Accessories",
    price: 15.99,
    inStock: true,
  },
  {
    id: 10,
    name: "External Hard Drive",
    category: "Electronics",
    price: 74.99,
    inStock: true,
  },
  {
    id: 11,
    name: "LED Desk Lamp",
    category: "Home Office",
    price: 39.99,
    inStock: true,
  },
  {
    id: 12,
    name: "Ergonomic Chair",
    category: "Furniture",
    price: 149.99,
    inStock: false,
  },
  {
    id: 13,
    name: "Dual Monitor Stand",
    category: "Accessories",
    price: 59.99,
    inStock: true,
  },
  {
    id: 14,
    name: "4K Webcam",
    category: "Electronics",
    price: 129.99,
    inStock: true,
  },
  {
    id: 15,
    name: "Adjustable Standing Desk",
    category: "Furniture",
    price: 299.99,
    inStock: true,
  },
  {
    id: 16,
    name: "Whiteboard",
    category: "Office Supplies",
    price: 24.99,
    inStock: true,
  },
  {
    id: 17,
    name: "Wireless Charger",
    category: "Accessories",
    price: 19.99,
    inStock: true,
  },
  {
    id: 18,
    name: "Graphic Tablet",
    category: "Electronics",
    price: 89.99,
    inStock: false,
  },
  {
    id: 19,
    name: "Smart Light Bulb",
    category: "Home Automation",
    price: 14.99,
    inStock: true,
  },
  {
    id: 20,
    name: "Fitness Tracker",
    category: "Wearables",
    price: 49.99,
    inStock: true,
  },
  {
    id: 21,
    name: "Smartphone",
    category: "Electronics",
    price: 799.99,
    inStock: true,
  },
  {
    id: 22,
    name: "Tablet",
    category: "Electronics",
    price: 349.99,
    inStock: true,
  },
  {
    id: 23,
    name: "Bluetooth Mouse",
    category: "Accessories",
    price: 34.99,
    inStock: true,
  },
  {
    id: 24,
    name: "Laptop Sleeve",
    category: "Accessories",
    price: 19.99,
    inStock: true,
  },
  {
    id: 25,
    name: "Power Bank",
    category: "Accessories",
    price: 29.99,
    inStock: true,
  },
  {
    id: 26,
    name: "Smart Speaker",
    category: "Electronics",
    price: 99.99,
    inStock: false,
  },
  {
    id: 27,
    name: "Fitness Tracker Watch",
    category: "Wearables",
    price: 79.99,
    inStock: true,
  },
  {
    id: 28,
    name: "Home Security Camera",
    category: "Home Automation",
    price: 129.99,
    inStock: true,
  },
  {
    id: 29,
    name: "Wireless Keyboard",
    category: "Electronics",
    price: 49.99,
    inStock: true,
  },
  {
    id: 30,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 59.99,
    inStock: false,
  },
  {
    id: 31,
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 89.99,
    inStock: true,
  },
  {
    id: 32,
    name: "Laptop Stand",
    category: "Accessories",
    price: 29.99,
    inStock: true,
  },
  {
    id: 33,
    name: "USB Flash Drive",
    category: "Electronics",
    price: 12.99,
    inStock: true,
  },
  {
    id: 34,
    name: "Smartphone Charger",
    category: "Accessories",
    price: 9.99,
    inStock: true,
  },
  {
    id: 35,
    name: "Camera Tripod",
    category: "Accessories",
    price: 34.99,
    inStock: true,
  },
  {
    id: 36,
    name: "Smart Thermostat",
    category: "Home Automation",
    price: 129.99,
    inStock: true,
  },
  {
    id: 37,
    name: "Virtual Reality Headset",
    category: "Electronics",
    price: 299.99,
    inStock: true,
  },
  {
    id: 38,
    name: "Wireless Earphones",
    category: "Electronics",
    price: 39.99,
    inStock: true,
  },
  {
    id: 39,
    name: "Smart Door Lock",
    category: "Home Automation",
    price: 199.99,
    inStock: false,
  },
  {
    id: 40,
    name: "Electric Kettle",
    category: "Home Appliances",
    price: 49.99,
    inStock: true,
  },
  {
    id: 41,
    name: "Cordless Vacuum",
    category: "Home Appliances",
    price: 159.99,
    inStock: true,
  },
  {
    id: 42,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 79.99,
    inStock: true,
  },
  {
    id: 43,
    name: "Digital Camera",
    category: "Electronics",
    price: 349.99,
    inStock: true,
  },
  {
    id: 44,
    name: "Bluetooth Car Kit",
    category: "Accessories",
    price: 19.99,
    inStock: true,
  },
  {
    id: 45,
    name: "Electric Grill",
    category: "Home Appliances",
    price: 89.99,
    inStock: true,
  },
  {
    id: 46,
    name: "Smart Mirror",
    category: "Home Automation",
    price: 199.99,
    inStock: true,
  },
  {
    id: 47,
    name: "Projector",
    category: "Electronics",
    price: 199.99,
    inStock: false,
  },
  {
    id: 48,
    name: "Smart Scale",
    category: "Wearables",
    price: 29.99,
    inStock: true,
  },
  {
    id: 49,
    name: "Home Theater System",
    category: "Electronics",
    price: 299.99,
    inStock: true,
  },
  {
    id: 50,
    name: "Cordless Drill",
    category: "Tools",
    price: 59.99,
    inStock: true,
  },
  {
    id: 51,
    name: "Bluetooth Headset",
    category: "Electronics",
    price: 79.99,
    inStock: true,
  },
  {
    id: 52,
    name: "Smartwatch",
    category: "Wearables",
    price: 199.99,
    inStock: true,
  },
  {
    id: 53,
    name: "Electric Toothbrush",
    category: "Personal Care",
    price: 49.99,
    inStock: true,
  },
  {
    id: 54,
    name: "Handheld Fan",
    category: "Home Appliances",
    price: 14.99,
    inStock: true,
  },
  {
    id: 55,
    name: "Portable Air Conditioner",
    category: "Home Appliances",
    price: 249.99,
    inStock: false,
  },
  {
    id: 56,
    name: "Air Purifier",
    category: "Home Appliances",
    price: 119.99,
    inStock: true,
  },
  {
    id: 57,
    name: "Smart Watch Strap",
    category: "Accessories",
    price: 19.99,
    inStock: true,
  },
  {
    id: 58,
    name: "Robot Vacuum",
    category: "Home Appliances",
    price: 179.99,
    inStock: true,
  },
  {
    id: 59,
    name: "Smart Speaker with Display",
    category: "Electronics",
    price: 149.99,
    inStock: true,
  },
  {
    id: 60,
    name: "Portable Fridge",
    category: "Home Appliances",
    price: 159.99,
    inStock: false,
  },
  {
    id: 61,
    name: "Treadmill",
    category: "Fitness",
    price: 499.99,
    inStock: true,
  },
  {
    id: 62,
    name: "Dumbbells",
    category: "Fitness",
    price: 39.99,
    inStock: true,
  },
  {
    id: 63,
    name: "Resistance Bands",
    category: "Fitness",
    price: 14.99,
    inStock: true,
  },
  {
    id: 64,
    name: "Yoga Mat",
    category: "Fitness",
    price: 19.99,
    inStock: true,
  },
  {
    id: 65,
    name: "Exercise Bike",
    category: "Fitness",
    price: 399.99,
    inStock: true,
  },
  {
    id: 66,
    name: "Smart Water Bottle",
    category: "Fitness",
    price: 24.99,
    inStock: true,
  },
  {
    id: 67,
    name: "Massage Gun",
    category: "Fitness",
    price: 79.99,
    inStock: true,
  },
  {
    id: 68,
    name: "Electric Heater",
    category: "Home Appliances",
    price: 89.99,
    inStock: true,
  },
  {
    id: 69,
    name: "Humidifier",
    category: "Home Appliances",
    price: 49.99,
    inStock: true,
  },
  {
    id: 70,
    name: "Outdoor Grill",
    category: "Outdoor",
    price: 249.99,
    inStock: false,
  },
  {
    id: 71,
    name: "Camping Tent",
    category: "Outdoor",
    price: 129.99,
    inStock: true,
  },
  {
    id: 72,
    name: "Camping Chair",
    category: "Outdoor",
    price: 39.99,
    inStock: true,
  },
  {
    id: 73,
    name: "Portable Cooler",
    category: "Outdoor",
    price: 49.99,
    inStock: true,
  },
  {
    id: 74,
    name: "Hiking Backpack",
    category: "Outdoor",
    price: 79.99,
    inStock: true,
  },
  {
    id: 75,
    name: "Camping Stove",
    category: "Outdoor",
    price: 89.99,
    inStock: true,
  },
  {
    id: 76,
    name: "Sleeping Bag",
    category: "Outdoor",
    price: 59.99,
    inStock: true,
  },
  {
    id: 77,
    name: "Solar Charger",
    category: "Outdoor",
    price: 34.99,
    inStock: true,
  },
  {
    id: 78,
    name: "Thermal Flask",
    category: "Outdoor",
    price: 19.99,
    inStock: true,
  },
  {
    id: 79,
    name: "Fishing Rod",
    category: "Outdoor",
    price: 49.99,
    inStock: true,
  },
  {
    id: 80,
    name: "Smartphone Camera Lens",
    category: "Electronics",
    price: 49.99,
    inStock: true,
  },
  {
    id: 81,
    name: "Bluetooth Keychain Tracker",
    category: "Accessories",
    price: 19.99,
    inStock: true,
  },
  {
    id: 82,
    name: "Smart Coffee Mug",
    category: "Home Appliances",
    price: 59.99,
    inStock: true,
  },
  {
    id: 83,
    name: "Game Controller",
    category: "Electronics",
    price: 29.99,
    inStock: true,
  },
  {
    id: 84,
    name: "Smart Plug",
    category: "Home Automation",
    price: 19.99,
    inStock: true,
  },
  {
    id: 85,
    name: "Electric Blanket",
    category: "Home Appliances",
    price: 49.99,
    inStock: true,
  },
  {
    id: 86,
    name: "Heated Jacket",
    category: "Clothing",
    price: 99.99,
    inStock: true,
  },
  {
    id: 87,
    name: "Smart Glasses",
    category: "Wearables",
    price: 249.99,
    inStock: true,
  },
  {
    id: 88,
    name: "VR Gloves",
    category: "Electronics",
    price: 99.99,
    inStock: true,
  },
  {
    id: 89,
    name: "Portable Power Station",
    category: "Electronics",
    price: 299.99,
    inStock: true,
  },
  {
    id: 90,
    name: "Electric Shaver",
    category: "Personal Care",
    price: 39.99,
    inStock: true,
  },
  {
    id: 91,
    name: "Smart Ring",
    category: "Wearables",
    price: 149.99,
    inStock: true,
  },
  {
    id: 92,
    name: "Smart Bed",
    category: "Furniture",
    price: 499.99,
    inStock: true,
  },
  {
    id: 93,
    name: "Bicycle",
    category: "Fitness",
    price: 299.99,
    inStock: true,
  },
  {
    id: 94,
    name: "Smart Refrigerator",
    category: "Home Appliances",
    price: 999.99,
    inStock: false,
  },
  {
    id: 95,
    name: "Smart Washing Machine",
    category: "Home Appliances",
    price: 799.99,
    inStock: true,
  },
  {
    id: 96,
    name: "Smart Air Purifier",
    category: "Home Appliances",
    price: 199.99,
    inStock: true,
  },
  {
    id: 97,
    name: "Pet Camera",
    category: "Electronics",
    price: 49.99,
    inStock: true,
  },
  {
    id: 98,
    name: "Heated Foot Warmer",
    category: "Home Appliances",
    price: 29.99,
    inStock: true,
  },
  {
    id: 99,
    name: "Electric Pressure Cooker",
    category: "Home Appliances",
    price: 79.99,
    inStock: true,
  },
  {
    id: 100,
    name: "LED String Lights",
    category: "Home Decor",
    price: 19.99,
    inStock: true,
  },
];

export default mockup;
