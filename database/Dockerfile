FROM postgres:alpine

COPY *.sql /docker-entrypoint-initdb.d/
COPY ./titanic.csv / 

ADD setup.sql /docker-entrypoint-initdb.d

RUN chmod a+r /docker-entrypoint-initdb.d/* 

EXPOSE 6666 
