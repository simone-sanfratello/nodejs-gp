## Setup

### raspbian OS

Download raspbian from https://www.raspberrypi.org/downloads/raspbian/
You don't need desktop, so lite version is enotught.

Follow [this guide](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) to install OS on SD card.

Then, insert SD card into Raspberry and power on.

First time, you need a monitor and keyboard to configure network, connect monitor on HDMI **before** power on Raspberry, or output will not work.

After boot, login with default credentials: user `pi` and password `raspberry`. Rember, it's always safe to change default password!

So, you can follow the instruction to setup network, node.js and libreries.

#### setup network

Run follow command; set your wifi credentials in ``/etc/wpa_supplicant/wpa_supplicant.conf`` and a static ip in ``/etc/dhcpcd.conf``

````bash

sudo -i

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
````

check if everything is ok

````bash
ifconfig
````

#### Remote access via ssh

Enable ssh from ``raspi-config`` tool

````bash
sudo raspi-config
````

#### Install nodejs and libraries

````bash
sudo -i

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

apt install nodejs git wiringpi build-essential
npm i -g tap nodemon
````

Finally, clone this project and install dependencies

````bash
su pi
cd /home/pi
git clone https://github.com/braceslab/nodejs-gp.git
cd nodejs-gp
npm i
````

---

Now you are ready to **[run](./Run.md)!**

