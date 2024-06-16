
import rice from '../assets/rice.jpg'
import oliveOil from '../assets/oliveOil.jpg'
import coffe from '../assets/coffe.jpg'
import cola from '../assets/cola.jpg'

const productsData = [
    {
        id: 1,
        name: "Organic Basmati Rice",
        qty: 500,
        price: 12.99,
        category: {
            id: 1,
            name: "Grains",
        },
        image: rice,
    },
    {
        id: 2,
        name: "Extra Virgin Olive Oil",
        qty: 200,
        price: 18.99,
        category: {
            id: 2,
            name: "Oils",
        },
        image: oliveOil,
    },
    {
        id: 3,
        name: "Nescafe",
        qty: 300,
        price: 9.99,
        category: {
            id: 1,
            name: "Grains",
        },
        image: coffe,
    },
    {
        id: 4,
        name: "Coca Cola",
        qty: 400,
        price: 6.99,
        category: {
            id: 3,
            name: "Legumes",
        },
        image: cola,
    },
    {
        id: 5,
        name: "Organic Lentils",
        qty: 350,
        price: 7.99,
        category: {
            id: 3,
            name: "Legumes",
        },
        image: "../assets/lentils.jpg",
    },
    {
        id: 6,
        name: "Organic Almonds",
        qty: 150,
        price: 14.99,
        category: {
            id: 4,
            name: "Nuts",
        },
        image: "../assets/almonds.jpg",
    },
    {
        id: 7,
        name: "Organic Walnuts",
        qty: 100,
        price: 16.99,
        category: {
            id: 4,
            name: "Nuts",
        },
        image: "../assets/walnuts.jpg",
    },
    {
        id: 8,
        name: "Organic Peanut Butter",
        qty: 80,
        price: 10.99,
        category: {
            id: 5,
            name: "Spreads",
        },
        image: "../assets/peanut_butter.jpg",
    },
    {
        id: 9,
        name: "Organic Almond Butter",
        qty: 60,
        price: 12.99,
        category: {
            id: 5,
            name: "Spreads",
        },
        image: "../assets/almond_butter.jpg",
    },
    {
        id: 10,
        name: "Organic Coconut Oil",
        qty: 100,
        price: 15.99,
        category: {
            id: 2,
            name: "Oils",
        },
        image: "../assets/coconut_oil.jpg",
    },
    {
        id: 11,
        name: "Organic Chia Seeds",
        qty: 200,
        price: 8.99,
        category: {
            id: 6,
            name: "Seeds",
        },
        image: "../assets/chia_seeds.jpg",
    },
    {
        id: 12,
        name: "Organic Flaxseeds",
        qty: 250,
        price: 7.99,
        category: {
            id: 6,
            name: "Seeds",
        },
        image: "../assets/flaxseeds.jpg",
    },
    {
        id: 13,
        name: "Organic Pumpkin Seeds",
        qty: 150,
        price: 9.99,
        category: {
            id: 6,
            name: "Seeds",
        },
        image: "../assets/pumpkin_seeds.jpg",
    },
    {
        id: 14,
        name: "Organic Sunflower Seeds",
        qty: 180,
        price: 6.99,
        category: {
            id: 6,
            name: "Seeds",
        },
        image: "../assets/sunflower_seeds.jpg",
    },
    {
        id: 15,
        name: "Organic Cashews",
        qty: 120,
        price: 18.99,
        category: {
            id: 4,
            name: "Nuts",
        },
        image: "../assets/cashews.jpg",
    },
    {
        id: 16,
        name: "Organic Pistachios",
        qty: 90,
        price: 21.99,
        category: {
            id: 4,
            name: "Nuts",
        },
        image: "../assets/pistachios.jpg",
    },
    {
        id: 17,
        name: "Organic Sesame Seeds",
        qty: 300,
        price: 5.99,
        category: {
            id: 6,
            name: "Seeds",
        },
        image: "../assets/sesame_seeds.jpg",
    },
    {
        id: 18,
        name: "Organic Black Beans",
        qty: 400,
        price: 8.99,
        category: {
            id: 3,
            name: "Legumes",
        },
        image: "../assets/black_beans.jpg",
    },
    {
        id: 19,
        name: "Organic Kidney Beans",
        qty: 380,
        price: 7.99,
        category: {
            id: 3,
            name: "Legumes",
        },
        image: "../assets/kidney_beans.jpg",
    },
    {
        id: 20,
        name: "Organic Pinto Beans",
        qty: 420,
        price: 6.99,
        category: {
            id: 3,
            name: "Legumes",
        },
        image: "../assets/pinto_beans.jpg",
    },
    {
        id: 21,
        name: "Organic Avocado Oil",
        qty: 80,
        price: 19.99,
        category: {
            id: 2,
            name: "Oils",
        },
        image: "../assets/avocado_oil.jpg",
    },
    {
        id: 22,
        name: "Organic Tahini",
        qty: 70,
        price: 11.99,
        category: {
            id: 5,
            name: "Spreads",
        },
        image: "../assets/tahini.jpg",
    },
    {
        id: 23,
        name: "Organic Amaranth",
        qty: 200,
        price: 10.99,
        category: {
            id: 1,
            name: "Grains",
        },
        image: "../assets/amaranth.jpg",
    },
    {
        id: 24,
        name: "Organic Millet",
        qty: 250,
        price: 8.99,
        category: {
            id: 1,
            name: "Grains",
        },
        image: "../assets/millet.jpg",
    },
];

export default productsData;