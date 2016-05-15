FROM tsutomu7/alpine-python:jupyter

USER root

# for bash_kernel, gradle, npm
RUN apk --no-cache add curl bash openjdk8 nodejs

RUN sudo pip install bash_kernel && \
    sudo python -m bash_kernel.install
