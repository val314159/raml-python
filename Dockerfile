# raml-python Dockerfile

FROM ubuntu
MAINTAINER Joel Ward <jmward@gmail.com>
RUN apt-get -y update
RUN apt-get -y install python wget git python-bottle emacs python-gevent
RUN cd /opt && \
  wget http://nodejs.org/dist/v0.10.28/node-v0.10.28-linux-x64.tar.gz && \
  tar -xvf node-v0.10.28-linux-x64.tar.gz && \
  mv node-v0.10.28-linux-x64 node && \
  cd /usr/local/bin && \
  ln -s /opt/node/bin/* . && \
  rm -fr /opt/node-v0.10.28-linux-x64.tar.gz
WORKDIR /root
RUN npm install raml-python -g

RUN mkdir /root/local
VOLUME /root/local

CMD bash
