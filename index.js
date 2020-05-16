const puppeteer = require('puppeteer');

async function run() {
    //todo args

    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080
    });

    //https://www.rightmove.co.uk/
    //property-for-sale/
    //find.html
    //?searchType=SALE
    //&locationIdentifier=REGION%5E274
    //&insId=1
    //&radius=0.5
    //&minPrice=100000
    //&maxPrice=500000
    //&minBedrooms=0
    //&maxBedrooms=5
    //&displayPropertyType=houses
    //&maxDaysSinceAdded=1
    //&includeSSTC=true
    //&_includeSSTC=on
    //&sortByPriceDescending=
    //&primaryDisplayPropertyType=
    //&secondaryDisplayPropertyType=
    //&oldDisplayPropertyType=
    //&oldPrimaryDisplayPropertyType=
    //&newHome=
    //&auction=false
    
    try {
        await page.goto('https://rightmove.co.uk/property-for-sale/Cambridge/houses.html');
        const listings = await page.evaluate(
            () => Array.from(
                document.querySelectorAll('div.l-searchResult div.propertyCard-details a.propertyCard-link[href]'), 
                l => l.getAttribute('href')
            )
        );
        console.log(listings);

        // open all in new tabs

        // scrape data
        // inc. sq footage calc

        // upsert to mongo

        // consider sold properties
        
    } catch (error) {
        await browser.close();
        console.log(error);
    }
}

async function getListings(place) {
    
}
run();