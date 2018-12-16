---
title: SSL
---

`sudo mkdir -p /etc/ssl/sjmize.duckdns.org

sudo cat /home/homeassistant/dehydrated/certs/sjmize.duckdns.org/fullchain.pem \
    /home/homeassistant/dehydrated/certs/sjmize.duckdns.org/privkey.pem \
    | sudo tee /etc/ssl/sjmize.duckdns.org/sjmize.duckdns.org.pem`