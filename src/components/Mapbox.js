/* 
mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaWxsYWsiLCJhIjoiY2s1M2x1c2hvMGEwZDNvbXB2c3k4NGhuZCJ9.s7vgJP8G0F_DdDwUXtiRsQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kamillak/ck9a1njj30vfo1ionvfeofmxk',
    zoom: 10,
    duration: 10000,
    center: [88.456157, 24.577306]
});
 */


import mapbox from 'mapbox-gl'

mapbox.acsessToken = MAPBOX_ACCESS_TOKEN

const key = {}

export {mapbox, key}