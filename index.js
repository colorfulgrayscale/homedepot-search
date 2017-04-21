"use strict";

var request = require('request');
var colors = require('colors');
var _ = require('lodash');
const readline = require('readline');

const search = (sku, zip) => {

    const options = {
        "url": `http://origin.api.homedepot.com/ProductAPI/v2/products/sku/${sku}/storefulfillment?keyword=${zip}&type=json&key=tRXWvUBGuAwEzFHScjLw9ktZ0Bw7a335&callback=jsonp_1492739219207_52188`,
        "headers": {
            "Accept": "*/*",
            "Cookie": "THD_CACHE_NAV_PERSIST=; MYLIST_ON=true; MYLIST_THROTTLE=true; HD_DC=origin; AMCVS_F6421253512D2C100A490D45%40AdobeOrg=1; THD_SESSION=; THD_GLOBAL=2c690bab-170b-18b5-9678-00e0ed4728d2; THD_CACHE_NAV_SESSION=C20%7e8119%5f%7eC20%5fEXP%7e%5f%7eC22%7e1403%5f%7eC22%5fEXP%7e%5f%7eC26%7eNone%5f%7eC26%5fEXP%7e; mbox=check#true#1492739258|session#1492739174403-482144#1492741058|em-disabled#true#1492740978; s_pers=%20productnum%3D4%7C1495331196745%3B%20pfm%3Dbrowse%7C1495331196747%3B%20s_nr%3D1492739198460-Repeat%7C1524275198460%3B%20s_dslv%3D1492739198469%7C1587347198469%3B%20s_dslv_s%3DMore%2520than%25207%2520days%7C1492740998469%3B; RES_TRACKINGID=83673979226654809; ResonanceSegment=; RES_SESSIONID=41671789477193729; AMCV_F6421253512D2C100A490D45%40AdobeOrg=-227196251%7CMCIDTS%7C17278%7CMCMID%7C15867407424279801295501035898776372899%7CMCAID%7CNONE%7CMCOPTOUT-1492746399s%7CNONE; s_sess=%20stsh%3D%3B%20s_pv_pName%3Dproductdetails%253E100185844%3B%20s_pv_pType%3Dpip%3B%20s_pv_cmpgn%3D%3B%20s_cc%3Dtrue%3B%20s_sq%3Dhomedepotprod%253D%252526c.%252526a.%252526activitymap.%252526page%25253Dproductdetails%2525253E100185844%252526link%25253DCheck%25252520Nearby%25252520Stores%252526region%25253Dbuybelt%252526pageIDType%25253D1%252526.activitymap%252526.a%252526.c%252526pid%25253Dproductdetails%2525253E100185844%252526pidt%25253D1%252526oid%25253Dhttp%2525253A%2525252F%2525252Fwww.homedepot.com%2525252Fp%2525252FEnglander-3-000-sq-ft-Wood-Burning-Add-On-Furnace-28-3500%2525252F100185844%25252523%252526ot%25253DA%3B; LPCKEY-31564604=2c592b0f-f941-4390-895d-97f56c9717716-3969%7Cnull%7Cnull%7C40; LPVID=NkZDNiMDkyMDQ3MTIzY2E5; LPSID-31564604=b9UqwE6KQmm70u72gd5brw; WCSSESSIONID=00009t9-nCxY92N1gavRnnVxMjN:167usmmeq; WC_SESSION_ESTABLISHED=true; WC_PERSISTENT=%2fyyk7PJHycNkulsi9YkIabhJ9y8%3d%0a%3b2017%2d04%2d20+21%3a46%3a49%2e336%5f1492739209212%2d221649%5f10051%5f1299798774%2c%2d1%2cUSD%5f10051; WC_ACTIVEPOINTER=%2d1%2c10051; WC_USERACTIVITY_1299798774=1299798774%2c10051%2cnull%2cnull%2cnull%2cnull%2cnull%2cnull%2cnull%2cnull%2ciFZhZA%2b9%2b8iqPX8Q2lmSXLGJD3P5z2DdxzbfknY5Rfa5Suu0ApkMA1k8Kn8JEG9o5zCd109YdvcfVLDbPZmPDIXZEYrjVMT3BzuEbCCxYLsA2pOgyji11GhizvclbNkBboAwqYdkxYLsAPFOF4SJDQZWeICTtK5A083cOxnxH0ZqpJQV2CedwV6a4rgoh%2bVNqtPpmpKrYTxZ6%2bTUiA94cw%3d%3d; MCC_ACC=C1%3Dboth; cart_activity=1299798774; X-hostname=central1-b-b-zqwl; THD_PERSIST=C4%3d1403%2bFayetteville%252C%2520AR%20%2d%20Fayetteville%2c%20AR%2b%3a%3bC4%5fEXP%3d1544579209%3a%3bC5%3d7000000000002081190%3a%3bC5%5fEXP%3d1544579209%3a%3bC6%3d%7b%22I1%22%3a%220%22%7d%3a%3bC6%5fEXP%3d1495331209%3a%3bC24%3d72703%3a%3bC24%5fEXP%3d1544579209%3a%3bC25%3dcpaisa7g%2ehomedepot%2ecom%2fWC%5fTHD%2f1492739209213%3a%3bC25%5fEXP%3d1544579209%3a%3bC34%3d1%2e1%2d2%2e1%2d3%2e0%2d4%2e0%2d5%2e0%2d6%2e1%2d7%2e1%2d8%2e1%2d9%2e1%2d10%2e1%2d11%2e1%2d12%2e0%2d13%2e0%2d14%2e0%2d15%2e1%2d18%2e1%2d19%2e1%2d20%2e1%2d21%2e1%2d22%2e1%2d23%2e1%2d26%2e1%2d27%2e1%2d28%2e1%2d29%2e1%2d30%2e1%2d32%2e1%2d35%2e0%2d39%2e1%2d40%2e1%2d50%2e0%2d60%2e0%3a%3bC34%5fEXP%3d1492825609%3a%3bC40%3dC%3a%3bC40%5fEXP%3d1544579209%3a%3bC43%3d1299798774%3a%3bC43%5fEXP%3d1544579209%3a%3bC44%3dWS%5fvmqnfIFvxA%252B6RXcF8QXB682BzdxU9eMLCRY5spgkjsDePrP%252B7dThax2jomN%252FI8N%252B9kB4sA9liczgSGXbaabvHY%252Bm00HLopYMlH8h%252Bdtr5ZPHY7%252BWcS310vTt%252BLML6X5tkHJodz1q8XP2JGz2xfP1GTjZJTSCRCRrCQgpOr6AahQ%253D%3a%3bC44%5fEXP%3d1544579209%3a%3bC45%3dWS%5fuHFRDFUJvpgnI08gagiIpFfVc8SGXXJlKU80coikglkCh3YSVhSFUy9pTirukYnnXo%252FAvWu1pN1FpkjSRULRNd2X%252FVdo0g4ZYr%252FhAaQOC8dzSDXyDbjqQYpELJs63ibgEOqv1qUUG2BTywEJRnoQPzX6MvFsd9LM1UVFcsAXJQs%253D%3a%3bC45%5fEXP%3d1544579209%3a%3bC46%3dguest%3a%3bC46%5fEXP%3d1544579209; MCC_THROTTLE=true",
            "Referer": "http://www.homedepot.com/mycart/overlay?bust=1492739201038",
            "Accept-Language": "en-US,en;q=0.8",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36"
        }
    };

    const parseResponse = (error, response, body) => {
        if (!error && response.statusCode == 200) {
            // remove jsonp formatting
            var cleaned = body.substring(body.indexOf("({") + 1).replace(");", "");
            var results = JSON.parse(cleaned);
            // console.warn(JSON.stringify(results, null, 4));
            const primaryStore = _.get(results, 'storeFulfillment.storeFulfillmentDetails.primaryStore', {});
            const alternateStores = _.get(results, 'storeFulfillment.storeFulfillmentDetails.alternateStores.store', []);
            for (var store of alternateStores) {
                checkAvailability(store);
            }
        } else {
            console.error(colors.red(`Request Error ${response.statusCode}`));
            console.error(body);
        }
    }

    const checkAvailability = store => {
        const fulfillable = _.get(store, 'fulfillmentOptions.fulfillable', false);
        const zip = _.get(store, 'address.zipCode', '');
        const city = _.get(store, 'address.city', '');
        const state = _.get(store, 'address.state', '');
        if (fulfillable) {
            console.log(colors.green(`✔ Instock in  ${zip} - ${city}, ${state}`));
        }
    }

    request(options, parseResponse);
};

const capitals = [
    {
        "abbreviation": "AL",
        "capital": "Montgomery",
        "zip": '36101'
    },
    {
        "abbreviation": "AK",
        "capital": "Juneau",
        "zip": '99801'
    },
    {
        "abbreviation": "AZ",
        "capital": "Phoenix",
        "zip": '85001'
    },
    {
        "abbreviation": "AR",
        "capital": "Little Rock",
        "zip": '72201'
    },
    {
        "abbreviation": "CA",
        "capital": "Sacremento",
        "zip": '94203'
    },
    {
        "abbreviation": "CO",
        "capital": "Denver",
        "zip": '80201'
    },
    {
        "abbreviation": "CT",
        "capital": "Hartford",
        "zip": '06101'
    },
    {
        "abbreviation": "DE",
        "capital": "Dover",
        "zip": '19901'
    },
    {
        "abbreviation": "DC",
        "capital": "Washington",
        "zip": '20001'
    },
    {
        "abbreviation": "FL",
        "capital": "Tallahassee",
        "zip": '32301'
    },
    {
        "abbreviation": "GA",
        "capital": "Atlanta",
        "zip": '30301'
    },
    {
        "abbreviation": "HI",
        "capital": "Honolulu",
        "zip": '96801'
    },
    {
        "abbreviation": "ID",
        "capital": "Boise",
        "zip": '83701'
    },
    {
        "abbreviation": "IL",
        "capital": "Springfield",
        "zip": '62701'
    },
    {
        "abbreviation": "IN",
        "capital": "Indianapolis",
        "zip": '46201'
    },
    {
        "abbreviation": "IA",
        "capital": "Des Moines",
        "zip": '50301'
    },
    {
        "abbreviation": "KS",
        "capital": "Topeka",
        "zip": '66601'
    },
    {
        "abbreviation": "KY",
        "capital": "Frankfort",
        "zip": '40601'
    },
    {
        "abbreviation": "LA",
        "capital": "Baton Rouge",
        "zip": '70801'
    },
    {
        "abbreviation": "ME",
        "capital": "Augusta",
        "zip": '04330'
    },
    {
        "abbreviation": "MD",
        "capital": "Annapolis",
        "zip": '21401'
    },
    {
        "abbreviation": "MA",
        "capital": "Boston",
        "zip": '02108'
    },
    {
        "abbreviation": "MI",
        "capital": "Lansing",
        "zip": '48901'
    },
    {
        "abbreviation": "MN",
        "capital": "St. Paul",
        "zip": '55101'
    },
    {
        "abbreviation": "MS",
        "capital": "Jackson",
        "zip": '39201'
    },
    {
        "abbreviation": "MO",
        "capital": "Jefferson City",
        "zip": '65101'
    },
    {
        "abbreviation": "MT",
        "capital": "Helena",
        "zip": '59601'
    },
    {
        "abbreviation": "NE",
        "capital": "Lincoln",
        "zip": '68501'
    },
    {
        "abbreviation": "NV",
        "capital": "Carson City",
        "zip": '89701'
    },
    {
        "abbreviation": "NH",
        "capital": "Concord",
        "zip": '03301'
    },
    {
        "abbreviation": "NJ",
        "capital": "Trenton",
        "zip": '08601'
    },
    {
        "abbreviation": "NM",
        "capital": "Sante Fe",
        "zip": '87501'
    },
    {
        "abbreviation": "NY",
        "capital": "Albany",
        "zip": '12201'
    },
    {
        "abbreviation": "NC",
        "capital": "Raleigh",
        "zip": '27601'
    },
    {
        "abbreviation": "ND",
        "capital": "Bismarck",
        "zip": '58501'
    },
    {
        "abbreviation": "OH",
        "capital": "Columbus",
        "zip": '43201'
    },
    {
        "abbreviation": "OK",
        "capital": "Oklahoma City",
        "zip": '73101'
    },
    {
        "abbreviation": "OR",
        "capital": "Salem",
        "zip": '93701'
    },
    {
        "abbreviation": "PA",
        "capital": "Harrisburg",
        "zip": '17101'
    },
    {
        "abbreviation": "RI",
        "capital": "Providence",
        "zip": '02901'
    },
    {
        "abbreviation": "SC",
        "capital": "Columbia",
        "zip": '29201'
    },
    {
        "abbreviation": "SD",
        "capital": "Pierre",
        "zip": '57501'
    },
    {
        "abbreviation": "TN",
        "capital": "Nashville",
        "zip": '37201'
    },
    {
        "abbreviation": "TX",
        "capital": "Austin",
        "zip": '73301'
    },
    {
        "abbreviation": "UT",
        "capital": "Salt Lake City",
        "zip": '84101'
    },
    {
        "abbreviation": "VT",
        "capital": "Montpelier",
        "zip": '05601'
    },
    {
        "abbreviation": "VA",
        "capital": "Richmond",
        "zip": '23218'
    },
    {
        "abbreviation": "WA",
        "capital": "Olympia",
        "zip": '98501'
    },
    {
        "abbreviation": "WV",
        "capital": "Charleston",
        "zip": '25301'
    },
    {
        "abbreviation": "WI",
        "capital": "Madison",
        "zip": '53701'
    },
    {
        "abbreviation": "WY",
        "capital": "Cheyenne",
        "zip": '82001'
    }
];

const main = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('What is the ID of the product? ', sku => {
        rl.close();
        if (sku.match(/^\d+$/)) {
            console.log(colors.yellow(`Searching for sku ${sku}`));
            for (var city of capitals) {
                search(sku, city.zip);
            }   
        } else {
            console.log(colors.red(`${sku} is not a valid number`));
        }
    });
};

main();
