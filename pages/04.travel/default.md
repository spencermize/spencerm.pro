---
title: Travel
process:
    twig: true
    markdown: false
twig_first: true
cache_enable: false
---

{{ leaflet({'id': 'leaflet', 'class': 'leaflet'}) }}
<script>
    var mymap = L.map('leaflet').setView([51.505, -0.09], 13);
</script>