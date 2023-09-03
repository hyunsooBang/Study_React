const quotes = [
    {
        quote: "하면 된다",
        author: "방현수1",
    },
    {
        quote: "팥 붕어빵 먹고 싶다",
        author: "방현수2",
    },
    {
        quote: "개발 잘 하고 싶어요",
        author: "방현수3",
    },
    {
        quote: "js 복습용",
        author: "방현수4",
    },
    {
        quote: "부자 되고싶다",
        author: "방현수5",
    },
    {
        quote: "하면 된다2",
        author: "방현수6",
    },
    {
        quote: "팥 붕어빵 먹고 싶다2",
        author: "방현수7",
    },
    {
        quote: "개발 잘 하고 싶어요2",
        author: "방현수8",
    },
    {
        quote: "js 복습용2",
        author: "방현수9",
    },
    {
        quote: "부자 되고싶다2",
        author: "방현수10",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;