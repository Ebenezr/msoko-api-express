import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  const john = await prisma.user.upsert({
    where: { email: "john@prisma.io" },
    update: {},
    create: {
      name: "John Doe",
      phone: "123-456-7890",
      email: "john@prisma.io",
      image: "https://api.realworld.io/images/smiley-cyrus.jpeg",

      addresses: {
        create: {
          line1: "0745554566",
          line2: "0715515155",
          county: "Trans-Nzoia",
          town: "Kitale",
          station: "G4S",
        },
      },
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: "mercy@prisma.io" },
    update: {},
    create: {
      name: "Mercy Grace",
      phone: "123-456-7890",
      email: "mercy@prisma.io",
      image: "https://api.realworld.io/images/smiley-cyrus.jpeg",

      addresses: {
        create: {
          line1: "0745554566",
          line2: "0715515155",
          county: "Trans-nzoia",
          town: "Kitale",
          station: "G4S",
        },
      },
    },
  });

  const counties = [
    { name: "Mombasa", id: 1 },
    { name: "Kwale", id: 2 },
    { name: "Kilifi", id: 3 },
    { name: "Tana River", id: 4 },
    { name: "Lamu", id: 5 },
    { name: "Taita-Taveta", id: 6 },
    { name: "Garissa", id: 7 },
    { name: "Wajir", id: 8 },
    { name: "Mandera", id: 9 },
    { name: "Marsabit", id: 10 },
    { name: "Isiolo", id: 11 },
    { name: "Meru", id: 12 },
    { name: "Tharaka-Nithi", id: 13 },
    { name: "Embu", id: 14 },
    { name: "Kitui", id: 15 },
    { name: "Machakos", id: 16 },
    { name: "Makueni", id: 17 },
    { name: "Nyandarua", id: 18 },
    { name: "Nyeri", id: 19 },
    { name: "Kirinyaga", id: 20 },
    { name: "Murang'a", id: 21 },
    { name: "Kiambu", id: 22 },
    { name: "Turkana", id: 23 },
    { name: "West Pokot", id: 24 },
    { name: "Samburu", id: 25 },
    { name: "Trans Nzoia", id: 26 },
    { name: "Uasin Gishu", id: 27 },
    { name: "Elgeyo-Marakwet", id: 28 },
    { name: "Nandi", id: 29 },
    { name: "Baringo", id: 30 },
    { name: "Laikipia", id: 31 },
    { name: "Nakuru", id: 32 },
    { name: "Narok", id: 33 },
    { name: "Kajiado", id: 34 },
    { name: "Kericho", id: 35 },
    { name: "Bomet", id: 36 },
    { name: "Kakamega", id: 37 },
    { name: "Vihiga", id: 38 },
    { name: "Bungoma", id: 39 },
    { name: "Busia", id: 40 },
    { name: "Siaya", id: 41 },
    { name: "Kisumu", id: 42 },
    { name: "Homa Bay", id: 43 },
    { name: "Migori", id: 44 },
    { name: "Kisii", id: 45 },
    { name: "Nyamira", id: 46 },
    { name: "Nairobi", id: 47 },
  ];

  for (const product of counties) {
    await prisma.county.create({
      data: product,
    });
  }
  const towns = [
    { id: 1, name: "Mombasa Town", countyId: 1 },
    { id: 2, name: "Nyali", countyId: 1 },
    { id: 3, name: "Ukunda", countyId: 2 },
    { id: 4, name: "Lungalunga", countyId: 2 },
    { id: 5, name: "Kilifi Town", countyId: 3 },
    { id: 6, name: "Malindi", countyId: 3 },
    { id: 7, name: "Voi", countyId: 4 },
    { id: 8, name: "Taveta", countyId: 4 },
    { id: 9, name: "Marsabit", countyId: 5 },
    { id: 10, name: "Laisamis", countyId: 5 },
    { id: 11, name: "Emali", countyId: 6 },
    { id: 12, name: "Loitokitok", countyId: 6 },
    { id: 13, name: "Kitui Town", countyId: 7 },
    { id: 14, name: "Mwingi", countyId: 7 },
    { id: 15, name: "Nakuru Town", countyId: 8 },
    { id: 16, name: "Naivasha", countyId: 8 },
    { id: 17, name: "Kericho Town", countyId: 9 },
    { id: 18, name: "Bomet", countyId: 9 },
    { id: 19, name: "Eldoret Town", countyId: 10 },
    { id: 20, name: "Turbo", countyId: 10 },
    { id: 21, name: "Kakamega Town", countyId: 11 },
    { id: 22, name: "Lugari", countyId: 11 },
    { id: 23, name: "Siaya Town", countyId: 12 },
    { id: 24, name: "Bondo", countyId: 12 },
    { id: 25, name: "Nairobi West", countyId: 47 },
  ];

  for (const product of towns) {
    await prisma.town.create({
      data: product,
    });
  }
  const cat = [
    {
      name: "MARGARINE",
      code: "MG",
      products: {
        create: {
          name: "Prestige Margarine",
          description:
            "Having a base of pure vegetable oils, this smooth and premium margarine has a soft yellow color with a fine refined taste. You’ll find it hard to believe it’s not butter!",
          price: 224.99,
          image_url: "https://example.com/smartphone.jpg",
          size: "1KG",
          rating: 5,
          review: {
            create: {
              user: {
                connect: { email: "john@prisma.io" },
              },
              rating: 5,
              description: "As advertised!",
            },
          },
          ProductInventory: {
            create: {
              quantity: 35,
            },
          },
        },
      },
    },
    {
      name: "BAKING POWDER",
      code: "BKP",
      products: {
        create: {
          name: "Chapa Mandashi",
          description:
            "Chapa Mandashi Baking Powder has been in the market for over 40 years and is the ultimate choice for all your baking purposes giving you ‘Perfect baking every time’",
          price: 14.99,
          image_url: "https://example.com/smartphone.jpg",
          size: "100G",
          rating: 5,
          review: {
            create: {
              user: {
                connect: { email: "john@prisma.io" },
              },
              rating: 5,
              description: "As advertised!",
            },
          },
          ProductInventory: {
            create: {
              quantity: 345,
            },
          },
        },
      },
    },
    {
      name: "Noodles",
      code: "IND",
      products: {
        create: {
          name: "Numi",
          description:
            "Numi Instant Noodles is proudly Kenyan. Manufactured using state of the art technology, Numi is Halal certified and packed under the highest quality standards How to cook in the cook in 3 minutes",
          price: 29.99,
          image_url: "https://example.com/smartphone.jpg",
          size: "400G",
          rating: 3.5,
          review: {
            create: {
              user: {
                connect: { email: "john@prisma.io" },
              },
              rating: 5,
              description: "This is a sweet dish. Highly recommended!",
            },
          },
          ProductInventory: {
            create: {
              quantity: 345,
            },
          },
        },
      },
    },
    {
      name: "Cooking Fat",
      code: "CF01",
      products: {
        create: {
          name: "Kasuku",
          description:
            "Kasuku, East Africa’s most popular cooking fat, is a pure white cooking fat manufactured using refined natural vegetable palm oil. You will enjoy cooking with Kasuku’s soft and smooth texture. Kasuku is manufactured and packed under the highest international quality control standards",
          price: 799.99,
          image_url: "https://example.com/smartphone.jpg",
          size: "10KG",
          rating: 3.5,
          review: {
            create: {
              user: {
                connect: { email: "john@prisma.io" },
              },
              rating: 5,
              description: "This is an excellent product. Highly recommended!",
            },
          },
          ProductInventory: {
            create: {
              quantity: 345,
            },
          },
        },
      },
    },
    {
      name: "Vegetable Oil",
      code: "VB01",
      products: {
        create: {
          name: "Rina",
          description:
            "Rina Vegetable Oil is processed in an extremely modern and technologically advanced refining plant.",
          price: 999.99,
          image_url: "https://example.com/laptop.jpg",
          size: "5L",
          rating: 3.5,
          ProductInventory: {
            create: {
              quantity: 345,
            },
          },
          review: {
            create: {
              user: {
                connect: { email: "mercy@prisma.io" },
              },
              rating: 5,
              description: "This is an excellent product. Highly recommended!",
            },
          },
        },
      },
    },
  ];

  for (const product of cat) {
    await prisma.productCategory.create({
      data: product,
    });
  }

  console.log("done seeding");
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
