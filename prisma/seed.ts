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
