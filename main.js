import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import ImageLayer from 'ol/layer/Image';
import OSM from 'ol/source/OSM';
import ImageWMS from 'ol/source/ImageWMS';

const layers = [
    new TileLayer({
        source: new OSM(),
    }),
    new ImageLayer({
        extent: [-80.10207827003072, -0.115022370607746, -7842556196500627, 1.4548059377978537],
        source: new ImageWMS({
            url: 'http://194.163.139.251:8080/geoserver/wms',
            params: {
                'LAYERS': 'esmeraldas:mapa_completo',
                'TILED': false
            },
            ratio: 1,
            serverType: 'geoserver',
        }),
    }),
];
const map = new Map({
    layers: layers,
    target: 'map',
    view: new View({
        projection: 'EPSG:4326',//CRS:84
        center: [-79.26355299915738, 0.6704899636594063],
        zoom: 9,
    }),
});