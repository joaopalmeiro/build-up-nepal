import { format } from 'd3-format';
import pluralize from 'pluralize';

import data from './data.json';

const NUMBER_PROJECTS = data.length;
const TWITTER_SHARE_BASE_URL = 'https://twitter.com/share';
const TWITTER_SHARE_TEXT_QUERY = 'text=';
// const TWITTER_SHARE_HASHTAGS_QUERY = 'hashtags=';
const WEBSITE_URL = 'https://build-it-up-nepal.vercel.app/';

// https://www.vizforsocialgood.com/join-a-project/2021/12/28/build-up-nepal
const TWITTER_SHARE_HASHTAGS = 'vizforsocialgood';

// Source:
// - https://developers.google.com/maps/documentation/urls/get-started
// - https://stackoverflow.com/a/52943975
export const getGoogleMapsUrl = (lon, lat) =>
    `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;

export const floatFormatter = format('.2f');
export const siFormatter = format('~s');
export const siTwoFormatter = format('.2~s');
export const signedFormatter = format('+');

export const generateTwitterShareUrl = (numberHouses, numberCarbon) => {
    // https://stackoverflow.com/a/332897
    // console.log(numberHouses, numberCarbon, NUMBER_PROJECTS);

    const textFirstPart = `Of the projects I checked as part of @BuildupNepal, ${numberHouses} ${pluralize(
        'house',
        numberHouses
    )} ðï¸ ${pluralize('was', numberHouses)} built and ${floatFormatter(numberCarbon)} ${pluralize(
        'ton',
        numberCarbon
    )} of COâ ð¥ ${pluralize('was', numberCarbon)} saved!`;
    const textSecondPart = `Go to ${WEBSITE_URL} and check out some of the ${NUMBER_PROJECTS} projects in Nepal yourself.`;

    const text = encodeURIComponent(`${textFirstPart}\n\n${textSecondPart}`);

    const footer = encodeURIComponent(`\n\n@VizFSG #${TWITTER_SHARE_HASHTAGS}`);

    const url = `${TWITTER_SHARE_BASE_URL}?${TWITTER_SHARE_TEXT_QUERY}${text}${footer}`;

    // return encodeURI(url);
    return url;
};

export const splitArray = (arr) => {
    const evenArr = [];
    const oddArr = [];

    // https://eslint.org/docs/rules/no-plusplus
    for (let i = 0; i < arr.length; i += 1) {
        (i % 2 === 0 ? evenArr : oddArr).push(arr[i]);
    }
    return [evenArr, oddArr];
};

// Source:
// - https://github.com/airbnb/visx/blob/v2.5.0/packages/visx-text/src/util/getStringWidth.ts
const MEASUREMENT_ELEMENT_ID = '__react_canvas_measurement_id';

export const getFontStyleHeight = (text, style) => {
    try {
        let canvasEl = document.getElementById(MEASUREMENT_ELEMENT_ID);

        if (!canvasEl) {
            canvasEl = document.createElement('canvas');

            canvasEl.hidden = true;
            canvasEl.setAttribute('id', MEASUREMENT_ELEMENT_ID);

            document.body.appendChild(canvasEl);
        }

        const ctx = canvasEl.getContext('2d');

        ctx.font = style;

        const textMetrics = ctx.measureText(text);

        // It works on Google Chrome and Firefox.
        const actualHeight =
            textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;

        return actualHeight;
    } catch (e) {
        return null;
    }
};
