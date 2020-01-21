sudo docker rm -f javacontainer
mvn clean install -DskipTests
sudo chmod -R 777 target
sudo docker build -t mysql-img -f mysql-dockerfile .
sudo docker run --network=host --name mysqlcontainer -d mysql-img
sudo docker build -t java-img -f java-dockerfile .
sudo docker run --network=host --name javacontainer -d java-img

