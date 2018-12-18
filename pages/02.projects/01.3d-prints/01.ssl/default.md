---
title: SSL
---

When the certificate for the Raspberry Pi expires, here's how to utilize the Home Assistant's (automatically renewed) cert:

~~**TODO: ** Automate this~~
~~~~
sudo mkdir -p /etc/ssl/sjmize.duckdns.org

sudo cat /home/homeassistant/dehydrated/certs/sjmize.duckdns.org/fullchain.pem \
    /home/homeassistant/dehydrated/certs/sjmize.duckdns.org/privkey.pem \
    | sudo tee /etc/ssl/sjmize.duckdns.org/sjmize.duckdns.org.pem
~~~~