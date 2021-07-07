var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_JumlahProduksiIkan_0 = new ol.format.GeoJSON();
var features_JumlahProduksiIkan_0 = format_JumlahProduksiIkan_0.readFeatures(json_JumlahProduksiIkan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahProduksiIkan_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JumlahProduksiIkan_0.addFeatures(features_JumlahProduksiIkan_0);var lyr_JumlahProduksiIkan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JumlahProduksiIkan_0, 
                style: style_JumlahProduksiIkan_0,
                title: '<img src="styles/legend/JumlahProduksiIkan_0.png" /> Jumlah Produksi Ikan'
            });var format_JumlahTangkapanikan_1 = new ol.format.GeoJSON();
var features_JumlahTangkapanikan_1 = format_JumlahTangkapanikan_1.readFeatures(json_JumlahTangkapanikan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahTangkapanikan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JumlahTangkapanikan_1.addFeatures(features_JumlahTangkapanikan_1);var lyr_JumlahTangkapanikan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JumlahTangkapanikan_1, 
                style: style_JumlahTangkapanikan_1,
                title: '<img src="styles/legend/JumlahTangkapanikan_1.png" /> Jumlah Tangkapan ikan'
            });var format_TPI_2 = new ol.format.GeoJSON();
var features_TPI_2 = format_TPI_2.readFeatures(json_TPI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPI_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TPI_2.addFeatures(features_TPI_2);var lyr_TPI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TPI_2, 
                style: style_TPI_2,
                title: '<img src="styles/legend/TPI_2.png" /> TPI'
            });

lyr_JumlahProduksiIkan_0.setVisible(true);lyr_JumlahTangkapanikan_1.setVisible(true);lyr_TPI_2.setVisible(true);
var layersList = [baseLayer,lyr_JumlahProduksiIkan_0,lyr_JumlahTangkapanikan_1,lyr_TPI_2];
lyr_JumlahProduksiIkan_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Tahun 2016': 'Tahun 2016', 'Tahun 2017': 'Tahun 2017', 'Tahun 2018': 'Tahun 2018', });
lyr_JumlahTangkapanikan_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Tahun 2016': 'Tahun 2016', 'Tahun 2017': 'Tahun 2017', 'Tahun 2018': 'Tahun 2018', });
lyr_TPI_2.set('fieldAliases', {'Nama TPI': 'Nama TPI', 'JmlNelayan': 'Jumlah Nelayan', 'Pengolah': 'Pengolah', 'Pembudiday': 'Pembudidaya', 'JmlKapal': 'Jumlah Kapal', });
lyr_JumlahProduksiIkan_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Tahun 2016': 'TextEdit', 'Tahun 2017': 'TextEdit', 'Tahun 2018': 'TextEdit', });
lyr_JumlahTangkapanikan_1.set('fieldImages', {'Kecamatan': 'TextEdit', 'Tahun 2016': 'TextEdit', 'Tahun 2017': 'TextEdit', 'Tahun 2018': 'TextEdit', });
lyr_TPI_2.set('fieldImages', {'Nama TPI': 'TextEdit', 'JmlNelayan': 'TextEdit', 'Pengolah': 'TextEdit', 'Pembudiday': 'TextEdit', 'JmlKapal': 'TextEdit', });
lyr_JumlahProduksiIkan_0.set('fieldLabels', {'Kecamatan': 'header label', 'Tahun 2016': 'inline label', 'Tahun 2017': 'inline label', 'Tahun 2018': 'inline label', });
lyr_JumlahTangkapanikan_1.set('fieldLabels', {'Kecamatan': 'header label', 'Tahun 2016': 'inline label', 'Tahun 2017': 'inline label', 'Tahun 2018': 'inline label', });
lyr_TPI_2.set('fieldLabels', {'Nama TPI': 'header label', 'JmlNelayan': 'inline label', 'Pengolah': 'inline label', 'Pembudiday': 'inline label', 'JmlKapal': 'inline label', });
lyr_TPI_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});