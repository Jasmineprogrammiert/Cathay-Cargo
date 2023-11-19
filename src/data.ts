export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Customers",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 3,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Chatbot",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forum",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    destination: "HKG (FWD)",
    time: "184",
  },
  {
    id: 2,
    destination: "AKL (TMT)",
    time: "164",
  },
  {
    id: 3,
    destination: "AMS (EIF)",
    time: "139",
  },
  {
    id: 4,
    destination: "ATL (ATT)",
    time: "105",
  },
  {
    id: 5,
    destination: "BKK (TMT)",
    time: "87",
  },
  {
    id: 6,
    destination: "BLR (NNR)",
    time: "63",
  },
  {
    id: 7,
    destination: "BNE (HHI)",
    time: "58",
  },
  {
    id: 8,
    destination: "BKK (TMT)",
    time: "30",
  },
  {
    id: 9,
    destination: "BLR (NNR)",
    time: "24",
  },
  {
    id: 10,
    destination: "PVG (KWE)",
    time: "11",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Agent",
  number: "152",
  dataKey: "users",
  percentage: 25,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Commodity",
  number: "39740",
  dataKey: "products",
  percentage: 37.4,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$569,432",
  dataKey: "revenue",
  percentage: 15,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "18.7",
  dataKey: "ratio",
  percentage: 19.4,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 98000,
    },
    {
      name: "Mon",
      profit: 83000,
    },
    {
      name: "Tue",
      profit: 72000,
    },
    {
      name: "Wed",
      profit: 49780,
    },
    {
      name: "Thu",
      profit: 58890,
    },
    {
      name: "Fri",
      profit: 85390,
    },
    {
      name: "Sat",
      profit: 73490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Site Traffic",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    agent: "FWD",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    agent: "NEC",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    agent: "SNC",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    agent: "DSV",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    agent: "NNR",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    agent: "TPI",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    agent: "HPF",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    agent: "YAS",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    agent: "BKK",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    agent: "GEO",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    agent: "GEO",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    agent: "BKK",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    agent: "HPF",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    agent: "YAS",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    agent: "SIG",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];

export const products = [
  {
    id: 1,
    img: "https://e7.pngegg.com/pngimages/944/390/png-clipart-grape-fruit-kyoho-white-wine-cardinal-grape-grape-natural-foods-frutti-di-bosco-thumbnail.png",
    title: "Grapes",
    producer: "BKK",
    price: "$550.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "data:image/jpeg;base64,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",
    title: "Livestock",
    producer: "HAN",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    producer: "CGK",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    producer: "HKG",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "data:image/jpeg;base64,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",
    title: "Seafood",
    producer: "PEN",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    producer: "MNL",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "data:image/png;base64,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",
    title: "Dangerous Goods",
    producer: "HKG",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    producer: "SIN",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "data:image/jpeg;base64,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",
    title: "Medicine",
    producer: "SNG",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    producer: "PNH",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];



export const singleUser = {
  id: 1,
  title: "Done Lee",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "donelee",
    fullname: "Done Lee",
    email: "donelee@gmail.com",
    phone: "+852 5584 0937",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Done Lee made changes to the database",
      time: "3 day ago",
    },
    {
      text: "Done Lee added 3 notes",
      time: "1 week ago",
    },
    {
      text: "Done Lee modified Form X",
      time: "2 weeks ago",
    },
    {
      text: "Done Lee authorised Jenny Leung to view the dashboard",
      time: "1 month ago",
    },
    {
      text: "Done Lee removed Jimmy Chan's access to the dashboard ",
      time: "1 month ago",
    },
    {
      text: "Done Lee 1st sign-in to the dashboard",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Jane Lee purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};
