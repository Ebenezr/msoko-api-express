import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  const john = await prisma.user.upsert({
    where: { email: "john@prisma.io" },
    update: {},
    create: {
      name: "John Doe",
      phone: "123-456-7890",
      email: "john@mail.com",
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
  const bob = await prisma.user.upsert({
    where: { email: "mercy@prisma.io" },
    update: {},
    create: {
      name: "Mercy Grace",
      phone: "123-456-7890",
      email: "mercy@mail.com",
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
      name: "Cooking Fat",
      products: {
        create: {
          name: "Kasuku",
          description: "cooking fat",
          price: 799.99,
          image_url: "https://example.com/smartphone.jpg",
          size: "10KG",
          rating: 3.5,
          ProductReview: {
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
      name: "Vegateble Oil",
      products: {
        create: {
          name: "Rina",
          description: "sweet vegetable oil",
          price: 999.99,
          image_url: "https://example.com/laptop.jpg",
          size: "5L",
          rating: 3.5,
          ProductInventory: {
            create: {
              quantity: 345,
            },
          },
          ProductReview: {
            create: {
              user: {
                connect: { email: "john@prisma.io" },
              },
              rating: 5,
              description: "This is an excellent product. Highly recommended!",
            },
          },
        },
      },
    },
  ];

  //   for (const product of cat) {
  //     await prisma.productCategory.create({
  //       data: product,
  //     });
  //   }

  console.log({ john, bob });
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
