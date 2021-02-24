/* globals gauge*/
"use strict";
const { openBrowser, write, closeBrowser, click, into, goto,checkBox, near,press, screenshot, text, focus, textBox, toRightOf, scrollDown } = require('taiko');
const assert = require("assert");
const {repl} = require('taiko/recorder');
const path = require("path");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'], `screenshot-${process.hrtime.bigint()}.png`);
    await screenshot({ path: screenshotFilePath });
    return path.basename(screenshotFilePath);
};

step("Open the Browser & navigate to ezame", async () => {
    // await openBrowser();
    await goto("https://stage.eazme.com/sign-up");
});


step("follow all the steps", async () => {
    await write("abcd",into(textBox({name:"firstname"})));
    await click(into(textBox({name:"email"})));
    await write("abcd1@gmail.com");
    // await scrollDown();
    await click(into(textBox({name:"mobilenumber"})));
    await write("9878987678");
    await write("1234@Abcd",into(textBox({name:"password"})));
});

// step("Need to scroll Down", async () => {
//     await scrollDown();
// });

step("Need to join now with all valid details", async () => {
    await click(checkBox(near("By Joining")));
    await click("Join Now");
});


step("Navigate to login page", async () => {
    // await openBrowser();
    await goto("https://stage.eazme.com/in/en#signin");
});
