sudo docker rm -f nginxcontainer
sudo docker build -t nginximg  -f  nginx-dockerfile .
sudo docker run --name nginxcontainer -d -p 80:80 nginximg
