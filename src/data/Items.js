import GreenPressedBottle from '../assets/greenPressedBottle.png'; //Remove/Change Image

const itemsArray = [
    {
        id: 1,
        title: "Green",
        image: GreenPressedBottle,
        price: 4.99,
        description: "Green Juice put a sweet spin on this balanced green juice. Green spinach and kale, hydrating cucumber and other leafy veggies are balanced by apples and lemon. A perfect choice for those new to juicing.",
        benefits: "Balanced Greens - A balance of fruit & vegetables, enjoy the benefits of adding an easy-to-drink, refreshing green juice to your day.",
        ingredients: "Apple Juice, Cucumber Juice, Celery Juice, Lemon Juice, Spinach Juice, Kale Juice, Parsley",
        newItem: true,
        available: true,
        slug:"green-juice"
    },
    {
        id: 2,
        title: "Orange",
        image: GreenPressedBottle,
        price: 4.99,
        description: "WIP",
        benefits: "WIP",
        ingredients: "WIP",
        newItem: false,
        available: false,
        slug:"orange-juice"
    },
    {
        id: 3,
        title: "Red",
        image: GreenPressedBottle,
        price: 4.99,
        shortDescription: "WIP",
        LongDescription: "WIP",
        newItem: false,
        available: false
    },
    {
        id: 4,
        title: "Purple",
        image: GreenPressedBottle,
        price: 4.99,
        shortDescription: "WIP",
        LongDescription: "WIP",
        newItem: false,
        available: false
    },
    {
        id: 5,
        title: "5x5 Detox Carrot Juice",
        image: GreenPressedBottle,
        price: 29.99,
        description: "Unlock the natural detoxifying benefits of carrots with our 5-Day Carrot Juice Detox. Each bottle is packed with the vibrant goodness of fresh, organic carrots, rich in vitamins, antioxidants, and essential nutrients. Designed to cleanse your system, boost your immunity, and enhance your skin's natural glow, this 5-day program provides a delicious and effective way to reset your body. Enjoy the sweet and refreshing taste of carrot juice while giving your body the nourishment it needs to thrive. Start your journey to a healthier you with every revitalizing sip.",
        benefits: "Balanced Greens - A balance of fruit & vegetables, enjoy the benefits of adding an easy-to-drink, refreshing green juice to your day.",
        ingredients: "Apple Juice, Cucumber Juice, Celery Juice, Lemon Juice, Spinach Juice, Kale Juice, Parsley",
        newItem: true,
        available: true,
        slug:"5x5-detox-carrot-juice"
    }
]

const getItemData = (id) => {
    let itemData = itemsArray.find(item => item.id === id)

    if(itemData === undefined){
        console.log(`Item ${id} is undefined`)
    }

    return itemData;
}

export {itemsArray, getItemData}