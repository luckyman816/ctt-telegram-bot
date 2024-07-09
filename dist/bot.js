"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the necessary packages
const TelegramBot = require("node-telegram-bot-api");
const dotenv = require("dotenv");
const axios = require("axios");
const express = require("express");
// Create a new Express app
const app = express();
// Load environment variables
dotenv.config();
const token = process.env.TELEGRAM_TOKEN;
console.log("Bot token:", token); // Confirm token is loaded
// Create a new Telegram bot using polling to fetch new updates
const bot = new TelegramBot(token, { polling: true });
// Assign telegram channel id
const groupUsername = process.env.GROUP_USERNAME;
const channelUsername = process.env.CHANNEL_USERNAME;
const twitter = process.env.TWITTER_ID;
let groupId = 0;
let channelID = 0;
let twitterID = 0;
let USER_ID = 2323232323;
let USER_NAME = "Leo_mint";
bot
    .getChat(groupUsername)
    .then((chat) => {
    groupId = chat.id;
    console.log("Group ID:", groupId);
})
    .catch((error) => {
    console.error("Error getting chat:", error);
});
// Define the inline keyboard layout for interaction
const options = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: "Play in 1 click  🐉",
                    web_app: { url: "https://darrel-clicker-game.vercel.app/" },
                },
            ],
            [
                {
                    text: "Subscribe to the channel  🐸",
                    url: "https://t.me/MikeTokenAnn",
                },
            ],
            [{ text: "How to earn from the game  🐲", callback_data: "earn" }],
            [{ text: "Task 📝", callback_data: "task" }],
        ],
    },
};
const option1 = {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: "💰 Join Yes's telegram group?   Sure! 👌 ",
                    callback_data: "join",
                },
            ],
            [
                {
                    text: "💰 Subscribe Yes's Ann Channel?   Sure! 👌 ",
                    callback_data: "subscribe",
                },
            ],
            [
                {
                    text: "💰 Follow Yes's Twitter?          Sure! 👌 ",
                    callback_data: "follow",
                },
            ],
        ],
    },
};
const options3 = {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: "Play in 1 click  🐉",
                    web_app: { url: "https://darrel-clicker-game.vercel.app/" },
                },
            ],
            [
                {
                    text: "Subscribe to the channel  🐸",
                    url: "https://t.me/MikeTokenAnn",
                },
            ],
            [{ text: "Tap to Earn 💰", callback_data: "earn" }],
            [{ text: "Task 📝", callback_data: "task" }],
        ],
    },
};
// Handle the /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const userID = msg.from.id;
    USER_ID = chatId;
    console.log("--//---myChatID----//---", chatId);
    const welcomeMessage = "🕹️ *Introducing MAGA Tap-A-Thon!* 🕹️                             \n\n🇺🇸 Ready to make America great again, one tap at a time? Join the ultimate clicker game where YOU help Trump reach his goal of ultimate greatness! 🏛️✨   \n\n🎯 *How It Works:*    \n\n👉 *Tap Away!* Each tap gets Trump closer to his MAGA dreams. More walls, more tweets, more... hats! 🎩 \n\n💸 *Earn Rewards:* \n\n    --*Trump Coins* 💰 for completing tasks and challenges, and tapping away!!  \n\n   --Show off your *MAGA Leaderboard* status! 📊   \n\nAre you ready to tap your way to greatness? Join MAGA Tap-A-Thon now and let’s make tapping great again! 🇺🇸🎉";
    // Send the welcome message with the inline keyboard
    bot.sendMessage(chatId, welcomeMessage, options);
});
bot.on("message", (msg) => {
    var _a;
    const chatId = msg.chat.id;
    const userID = msg.from.id;
    USER_NAME = (_a = msg.from) === null || _a === void 0 ? void 0 : _a.username;
    console.log("--//---myChatID----//---", chatId);
    console.log("--//---myUserID----//---", userID);
});
// Handle callback queries from inline buttons
bot.on("callback_query", (callbackQuery) => {
    const message = callbackQuery.message;
    const category = callbackQuery.data; // The 'callback_data' associated with the button pressed.
    if (category === "earn") {
        // Replace 'URL_TO_CHANNEL' with your channel's URL
        const messagetext = "How to play Donald Trump Bot⚡️ \n\n 💰 Tap to Earn \n\nTap the screen and collect coins. These coins will be exchanged to $MKT at the end of the event.  \n\n  ⛏ Mine\n\nUpgrade your status by buying special NFTs that will give you higher passive income opportunities (coming soon).  \n\n ⏰ Profit Per Hour \n\nThe bot itself as well as your status will work for you and mine more coins while you are away!  \n\nNote: You need to log in to the game again once in a while. \n\n  👥 Friends & Family \n\nInvite your friends and family and you will get bonuses. Help a friend move to the higher levels and you will get even more bonuses. \n\n⏳ Token Listings (top 10 exchanges only) \n\nAt the end of the event, $Yes tokens will be airdropped and distributed among the players. MKT is already transferable and tradable. You can buy, sell or stake in our website to earn even more! You can buy Mike Token ($MKT) at the below exchanges right now: \n\nhttps://pancakeswap.finance/swap?outputCurrency=0xF542aC438CF8Cd4477A1fc7aB88ADDA5426d55Ed\n\nhttps://m.indoex.io/orderbookmobile/MKT_USDT \n\n📑 MKT Contract Address:\n\n0xF542aC438CF8Cd4477A1fc7aB88ADDA5426d55Ed\n\nThe exact date of T1 & T2 Exchange listings will be announced in our announcement channel.\n\nHave fun and enjoy earning! 💰💰";
        // Options to disable web page preview
        bot.sendMessage(message.chat.id, messagetext, options3);
    }
    if (category === "task") {
        // Replace 'URL_TO_CHANNEL' with your channel's URL
        const messagetext = "   😊   You will gain bonus!  🚀                    \n\n 😎  Join Yes's telegram group  \n       https://t.me/MikeToken \n       You will receive 1000 coins \n\n 🤩  Join Yes's Ann Channel  \n       https://t.me/MikeTokenAnn \n       You will receive 1000 coins \n\n  😍  Follow our twitter!\n       https://twitter.com/MikeTokenio\n       You will receive 1000 coins \n\n";
        bot.sendMessage(message.chat.id, messagetext, option1);
    }
    if (category === "join") {
        console.log("--//---USER_ID----//---", USER_ID);
        // Check if the user is already joined group
        bot
            .getChatMember(groupId, USER_ID)
            .then(async (member) => {
            if (member.status !== "left" && member.status !== "kicked") {
                bot.sendMessage(message.chat.id, "🏆  You will gain 1000 coins in app-task!", option1);
                try {
                    await axios
                        .post(`http://localhost:5000/api/earnings/add`, {
                        username: USER_NAME,
                    })
                        .then(() => {
                        axios.post(`http://localhost:5000/api/earnings/update/joinTelegram/${USER_NAME}`, {
                            status: true,
                            earned: false,
                        });
                    });
                }
                catch (error) {
                    console.error("Error:", error);
                }
            }
            else {
                bot.sendMessage(message.chat.id, "🐷  You are not in a group!", option1);
            }
        })
            .catch((error) => {
            console.error("Error checking chat member:", error);
            bot.sendMessage(message.chat.id, "🦀  Error checking chat member!", option1);
        });
    }
    if (category === "subscribe") {
        // Check if the user is already subscribed chanel
        bot
            .getChatMember(channelID, USER_ID)
            .then(async (member) => {
            if (member.status !== "left" && member.status !== "kicked") {
                bot.sendMessage(message.chat.id, "🏆  You will gain 1000 coins in app-task!", option1);
                try {
                    await axios
                        .post(`http://localhost:5000/api/earnings/add`, {
                        username: USER_NAME,
                    })
                        .then(() => {
                        axios.post(`http://localhost:5000/api/earnings/update/subscribeTelegram/${USER_NAME}`, {
                            status: true,
                            earned: false,
                        });
                    });
                }
                catch (error) {
                    console.error("Error:", error);
                }
            }
            else {
                bot.sendMessage(message.chat.id, "🐷  You are not in a group!", option1);
            }
        })
            .catch((error) => {
            console.error("Error checking chat member:", error);
            bot.sendMessage(message.chat.id, "🦀  Error checking chat member!", option1);
        });
    }
    if (category === "follow") {
        // Replace 'URL_TO_CHANNEL' with your channel's URL
        const messagetext = "  😍 Follow our twitter!\n       https://twitter.com/MikeTokenio\n       You will receive 1000 coins \n\n";
        bot.sendMessage(message.chat.id, messagetext, options);
        // try {
        //   await axios
        //     .post(
        //       `https://mike-token-backend-1.onrender.com/api/earnings/add`,
        //       {
        //         username: USER_NAME,
        //       }
        //     )
        //     .then(() => {
        //       axios.post(
        //         `https://mike-token-backend-1.onrender.com/api/earnings/update/subscribeTelegram/${USER_NAME}`,
        //         {
        //           status: true,
        //           earned: false,
        //         }
        //       );
        //     });
        // } catch (error) {
        //   console.error("Error:", error);
        // } 
    }
});
bot.onText(/\/start (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const referrerUsername = match[1]; // Extracted from the start parameter
    console.log("--//---OK!!!----//---");
    console.log("--//---referrerUsername----//---", referrerUsername);
    console.log("--//---USER_NAME----//---", USER_NAME);
    try {
        await axios.post(`http://localhost:5000/api/friend/add`, {
            username: referrerUsername,
            friend: USER_NAME,
        });
        const response00 = await axios.post(`http://localhost:5000/api/wallet/add`, {
            username: USER_NAME,
        });
        const response0 = await axios.post(`http://localhost:5000/api/wallet/updateBalance/${USER_NAME}`, { balance: 200 });
        const response1 = await axios.post(`http://localhost:5000/api/wallet/${referrerUsername}`);
        const response2 = await axios.post(`http://localhost:5000/api/wallet/updateBalance/${referrerUsername}`, { balance: 200 + response1.data.balance });
        console.log(response2.data);
    }
    catch (error) {
        console.error(error);
    }
});
