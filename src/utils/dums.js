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
      // require("../assets/images/IMG_Bulktwo.webp"),
      require("../assets/images/IMG_sheet_small1.webp"),
      require("../assets/images/IMG_sheet_big1.webp"),
      require("../assets/images/IMG_scrap_small1.webp"),
      require("../assets/images/IMG_scrap_big1.webp"),
    ],
    productVariations: [
      {
        name: "sheet",
        description:
          "We have high quality selected Mica sheets. Presently we are over booked and not accepting order for mica block (sheet). From October 30th we shall be resume accepting orders for mica sheet.",
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
        videos: [],
        caution: `<p style="color: red; font-size: inherit"><b>PLEASE NOTE!!!</b><br/>Presently we are over booked and not accepting orders for mica block (sheet).<br/>From October 30th we shall be resume accepting orders for mica sheet.</p>`,
      },
      // {
      //   name: "bulk",
      //   description:
      //     "We have high quality selected Mica bulk. They come with the following standards",
      //   standards: ["No mud", "Packed in 50kg sacks"],
      //   properties: {
      //     thickness: "-",
      //     sizes: "Bulk",
      //     weight: "50kg per packing",
      //   },
      //   slideshow: [
      //     require("../assets/images/IMG_Bulkfive.webp"),
      //     require("../assets/images/IMG_Bulkone.webp"),
      //     require("../assets/images/IMG_Bulkthree.webp"),
      //   ],
      // },
      {
        name: "crude scrap",
        description:
          'Our crude scrap comes in big sizes, sometimes more than 18". It has all best properties of mica block (sheet) but only without clear transparency. Unsurprisingly some very clean block mica is recoverable, between 1-5% are clean large sizes mica sheet, yet the price is the price of scrap mica. It is minimally entangled and very easy to open or split.',
        standards: ["No mud", "Packed in 50kg sacks"],
        properties: {
          thickness: "-",
          sizes: "vary",
          weight: "-",
        },
        slideshow: [
          require("../assets/images/IMG-scrap-mica-flat4.webp"),
          require("../assets/images/IMG-scrap-mica-side3.webp"),
          require("../assets/images/IMG-scrap-mica-flat1.jpg"),
          require("../assets/images/IMG-scrap-mica-flat2.webp"),
          require("../assets/images/IMG-scrap-mica-side1.jpg"),
          require("../assets/images/IMG-scrap-mica-side2.jpg"),
          require("../assets/images/IMG-scrap-mica-flat3.webp"),
        ],
        videos: [],
        caution: "",
      },
    ],
    contact: {
      email: "ugraphix2001@gmail.com",
      phone: "08094709168",
    },
  },
];

export default allProducts;
