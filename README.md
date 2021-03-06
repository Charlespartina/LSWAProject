#MusicQR 
## General Information
This is the repository for final project of CSCI-UA480 Large Scale Web Application. The application has a music upload/download service with QR code generation & identification, and a backend ranking job activated on a daily bases and communicated via RPC.
The application can be accessed [here](http://35.163.220.222:8000/musician/).

## Development Guide

## Collaborator Notes
* It is recommanded to create a new branch for a specific development task. And then merge the branch with the master. However for convenience, it is ok to push to master directly since there is a backup branch.
* It is recommanded to run local test on Linux machine. Follow the README.txt to setup the environment and tools

## Deployment
* Django Application: ubuntu@35.163.220.222
* Relational Database: tangdb.cyocc9onn55j.us-west-2.rds.amazonaws.com 
* Background Computation and RPC Server: ubuntu@35.163.99.152
* Hadoop Service: ec2-35-161-227-165.us-west-2.compute.amazonaws.com 
## First Install

### Install required packages.
* $ sudo apt-get update; sudo apt-get install mysql-server libmysqlclient-dev python-dev python-virtualenv 
(Set a mysql root password)

* $ ./first_install.sh

### Install the proper databases
* $ cd db
* $ ./install_db.sh (Will ask for the mysql root password configured above).
* $ cd ..

### Sync the database
* $ source ./env/bin/activate
* $ cd lswa
* $ python manage.py makemigrations musician
* $ python manage.py migrate

### Setup Backend
* Go to backend
* $ ./ini.sh
 
### After the first installation, from the project's directory
Run the server:
* $ source ./env/bin/activate
* $ cd lswa
* $ python manage.py runserver

Access the site at http://localhost:8000/musician

