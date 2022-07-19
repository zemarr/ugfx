export const allProducts = [
  {
    id: 1,
    slug: "mica",
    productName: "Mica Muscovite",
    short_description:
      "Mica is found in various parts of the Nigeria, with the major muscovite mica mineral deposits largely found in the Northern part of Nigeria, with reasonable deposits in some parts of ",
    full_description:
      "Mica is found in various parts of the Nigeria, with the major muscovite mica mineral deposits largely found in the Northern part of Nigeria, with reasonable deposits in some parts of the Western parts of Nigeria in places like Ibadan.",
    origins: ["Ogun", "Osun", "Kaduna"],
    slideshow: [
      require("../assets/images/IMG_scrap_big1.webp"),
      require("../assets/images/IMG_sheet_big1.webp"),
      require("../assets/images/IMG_scrap_small1.webp"),
    ],
    productVariations: [
      {
        name: "sheet",
        description:
          "We have high quality selected Mica sheets. They come with the following standards",
        standards: [
          "Clear and transparent",
          "No inclusions",
          "No waves",
          "Packed at 5kg",
        ],
        properties: {
          thickness: "0.2mm - 2mm",
          sizes: "2-3”, 4”, 5”, 6”,7”, 8”, 9”, 10”",
          weight: "5kg per packing",
        },
        slideshow: [
          require("../assets/images/IMG_sheet_big1.jpg"),
          require("../assets/images/IMG_sheet_big2.webp"),
          require("../assets/images/IMG_sheet_small1.webp"),
        ],
      },
      {
        name: "bulk",
        description:
          "We have high quality selected bulk of Mica. They come with the following standards",
        standards: ["No mud", "Packed in 50kg sacks"],
        properties: {
          thickness: "> 2mm",
          sizes: "varies",
          weight: "50kg per packing",
        },
        slideshow: [
          require("../assets/images/IMG_scrap_big1.webp"),
          require("../assets/images/product--thumb1.jpeg"),
          require("../assets/images/product--thumb3.jpeg"),
        ],
      },
      {
        name: "scrap",
        description:
          "We have scrap of Mica after sorting. They come with following standards",
        standards: ["No mud and Packed in 50kg sacks"],
        properties: {
          thickness: "varies",
          sizes: "varies",
          weight: "50kg per packing",
        },
        slideshow: [
          require("../assets/images/IMG_scrap_big2.webp"),
          require("../assets/images/IMG_scrap_small2.jpg"),
          require("../assets/images/IMG_scrap_small1.jpg"),
        ],
      },
    ],
    contact: {
      email: "ugraphix2001@gmail.com",
      phone: "08094709168",
    },
  },
];

export default allProducts;
