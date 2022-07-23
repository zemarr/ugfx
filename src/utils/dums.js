export const allProducts = [
  {
    id: 1,
    slug: "mica",
    productName: "Muscovite Mica",
    short_description:
      "Mica is found in various parts of the Nigeria, with the major muscovite mica mineral deposits largely found in the Northern part of Nigeria, with reasonable deposits in some parts of ",
    full_description:
      "Mica is found in various parts of the Nigeria, with the major muscovite mica mineral deposits largely found in the Northern part of Nigeria, with reasonable deposits in some parts of the Western parts of Nigeria like Oyo and Ogun states.",
    origins: ["Ogun", "Osun", "Kaduna"],
    slideshow: [
      require("../assets/images/IMG_Bulktwo.webp"),
      require("../assets/images/IMG_sheet_small1.webp"),
      require("../assets/images/IMG_sheet_big1.webp"),
      require("../assets/images/IMG_scrap_small1.webp"),
      require("../assets/images/IMG_scrap_big1.webp"),
    ],
    productVariations: [
      {
        name: "sheet",
        description:
          "We have high quality selected Mica sheets. They come with the following standards",
        standards: [
          "Clear and transparent",
          "No inclusions",
          "No air bubbles",
          "No waves",
          "Packed at 5kg",
        ],
        properties: {
          thickness: "0.2mm - 2mm",
          sizes: "2-3”, 4”, 5”, 6”,7”, 8”, 9”, 10”",
          weight: "5kg per packing",
        },
        slideshow: [
          require("../assets/images/IMG_sheet_big1.webp"),
          require("../assets/images/IMG_sheet_big2.webp"),
          require("../assets/images/IMG_sheet_small1.webp"),
        ],
      },
      {
        name: "bulk",
        description:
          "We have high quality selected Mica bulk. They come with the following standards",
        standards: ["No mud", "Packed in 50kg sacks"],
        properties: {
          thickness: "-",
          sizes: "Bulk",
          weight: "50kg per packing",
        },
        slideshow: [
          require("../assets/images/IMG_Bulkfive.webp"),
          require("../assets/images/IMG_Bulkone.webp"),
          require("../assets/images/IMG_Bulkthree.webp"),
        ],
      },
      {
        name: "scrap",
        description:
          "We have Mica scrap after sorting. They come with following standards",
        standards: ["No mud", "Packed in 50kg sacks"],
        properties: {
          thickness: "-",
          sizes: "vary",
          weight: "-",
        },
        slideshow: [
          require("../assets/images/IMG_scrap_big2.webp"),
          require("../assets/images/IMG_scrap_small2.webp"),
          require("../assets/images/IMG_scrap_small1.webp"),
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
