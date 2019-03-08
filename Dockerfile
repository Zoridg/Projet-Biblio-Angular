FROM openresty/openresty
COPY ./dist/projet-biblio /usr/local/openresty/nginx/html
COPY ./tricount.conf /usr/local/openresty/nginx/conf/tricount.conf
EXPOSE 80
