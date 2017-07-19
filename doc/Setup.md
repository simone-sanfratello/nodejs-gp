# references

https://github.com/nebrius/raspi-io/wiki/Getting-a-Raspberry-Pi-ready-for-NodeBots
http://johnny-five.io/#hello-world
http://johnny-five.io/api/motor
https://github.com/EmergingTechnologyAdvisors/node-serialport/
http://www.voodootikigod.com/nodebots-the-rise-of-js-robotics/
https://www.packtpub.com/books/content/programming-raspberry-pi-robots-javascript

# raspbian

sudo -i

````bash
# network
echo "
source-directory /etc/network/interfaces.d

auto lo
iface lo inet loopback

iface eth0 inet manual

auto wlan 0
allow-hotplug wlan0
iface wlan0 inet manual
    wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
" > /etc/network/interfaces

echo "
country=IT
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
  ssid="wifiiii"
  psk="secreet"
}
" > /etc/wpa_supplicant/wpa_supplicant.conf 

echo "
interface wlan0
static ip_address=192.168.1.194/24
static routers=192.168.1.1
static domain_name_servers=8.8.8.8
" > /etc/dhcpcd.conf

service networking restart

ifdown wlan0
ifup wlan0

ifconfig

apt update
apt upgrade

raspi-config
# ! enable ssh

#### nodejs on raspberry pi 2/3
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
#### nodejs on raspberry pi zero
wget -O - https://raw.githubusercontent.com/sdesalas/node-pi-zero/master/install-node-v6.9.1.sh | bash

apt install nodejs git wiringpi build-essential
npm i -g tap nodemon

su pi

cd /home/pi
git clone https://github.com/braceslab/nodejs-gp.git
cd nodejs-gp
npm i
```

