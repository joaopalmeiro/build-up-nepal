// Source:
// - https://developers.google.com/maps/documentation/urls/get-started
// - https://stackoverflow.com/a/52943975
export const getGoogleMapsUrl = (lon, lat) =>
    `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
