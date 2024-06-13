# RAP3 - Server 

### Introduction

RAP3 is a popular open-source interface management platform. With its powerful GUI tools, it enables front-end and back-end developers to quickly agree on interface formats. It automatically generates structured interface documentation, mock services, and strongly-typed TypeScript interface definitions, thereby enhancing development efficiency and experience.

RAP3 is a new project based on [RAP1](https://github.com/thx/RAP) & [RAP2](https://github.com/thx/rap2-delos). It has two components:

* rap3-server: back-end data API server based on Koa + MySQL [link](https://github.com/bosn/rap3-client)
* rap3-client: front-end static build based on React [link](https://github.com/bosn/rap3-server)


## Recommend using Docker to deploy within minutes

### Install Docker

Domestic users can refer to https://get.daocloud.io/ for installing Docker and Docker Compose (Linux users need to install separately). It is recommended to follow the instructions in the link to configure Docker Hub's domestic mirror to improve loading speed.

### Configuration

Create a directory named rap anywhere you like.

Download the [docker-compose.yml](https://github.com/bosn/rap3-server/master/docker-compose.yml) file from this repository and place it in the rap directory.

The default port number for the Rap frontend service is 3800, but you can customize it in the docker-compose.yml file as per the comments.

Run the following command in the rap directory:

```sh
# pull the latest images and startup
docker-compose up -d

# After starting, you need to manually initialize the MySQL database for the first run.
# ⚠Note: This step is only required the first time.
docker-compose exec rapserver node scripts/initSchema.js force

# After initialization, you can access the following URLs in your browser:
http://localhost:3800 # Front-end
http://localhost:38080 # Back-end

# If access is not possible, it might be because the database is not connected. Shut down the rap service.
docker-compose down
# Restart the service
docker-compose up -d
# If Sequelize reports an error, it might be due to changes in the database schema. Run the following command to synchronize
docker-compose exec rapserver node scripts/updateSchema
```

⚠️ Note: After the first run, a docker directory will be automatically created in the rap directory. This directory contains the database data for rap, so make sure not to delete it.

### Image update

RAP is frequently updated with bug fixes and feature upgrades. Using Docker makes it easy to keep up with the main project's updates.

```sh
# Pull the latest images
docker-compose pull
# Stop the current application
docker-compose down
# Rebuild and start
docker-compose up -d --build
# Sometimes the table structure changes, execute the following command to synchronize
docker-compose exec delos node scripts/updateSchema
# Clear unused images
docker image prune -f
```

## Manual Deployment

### Environment Requirements

- Node.js 16.0+
- MySQL 5.7+
- Redis 4.0+
- pandoc 2.73 (For generating offline documentation)

### Development Mode

#### Install MySQL and Redis servers

Please refer to the setup guide for detailed instructions. The configurations for MySQL and Redis can be found in the config.*.ts files. Without modifying any settings, Redis can be accessed using the default port on the local machine. Just ensure that redis-server is running.

Note: After modifying the config files, you need to run npm run build again for the changes to take effect.


#### Install pandoc

We use Pandoc to generate offline documentation for Rap. The most common way to install Pandoc is to download the binary file for your platform from the Pandoc [release page](https://github.com/jgm/pandoc/releases/tag/2.7.3) and install it.

For the Linux version, it is best to place it in `/usr/local/bin/pandoc` so that it can be found and run directly from the terminal. Then, give it execute permissions by running `chmod +x /usr/local/bin/pandoc`.

You can test the installation by running the command `pandoc -h` in the terminal; if there is a response, the installation is successful.

#### Start redis-server

```sh
redis-server
```

You can use `nohup` or `pm2` to run processes in the background. We recommend using `pm2`. The following commands will install `pm2` and start the Redis cache service using `pm2`


```bash
npm install -g pm2
npm run start:redis
```

#### First, create the database.

```bash
mysql -e 'CREATE DATABASE IF NOT EXISTS RAP2_DELOS_APP DEFAULT CHARSET utf8 COLLATE utf8_general_ci'
```

#### Install dependencies

```bash
npm install
```

confirm configurations in /config/config.dev.js (used in development mode)

#### Install && TypeScript compile

```bash
npm install -g typescript
npm run build
```

#### Initialize the database tables

```bash
npm run create-db
```

#### Run mocha test cases and js code style check

```bash
npm run check
```

#### Start the development server and watch for changes to automatically restart when code changes

```bash
npm run dev
```

### Production Mode

```sh
# 1. Modify the server configuration in /config/config.prod.js
# 2. Start the production server
npm start

```

## Community contributions

- [rap2-javabean Rap to Java Bean](https://github.com/IndiraFinish/rap2-javabean)
- [rap2-generator Java Bean to Rap](https://github.com/kings1990/rap2-generator)

## Author

* Owner: Bosn Ma
* Contributers: [link](https://github.com/bosn/rap3-server/graphs/contributors)


### Tech Arch

* Front-end (rap-client)
    * React / Redux / Saga / Router
    * Mock.js
    * SASS / Bootstrap 4 beta
    * server: nginx
* Back-end (rap-server)
    * Koa
    * Sequelize
    * MySQL
    * Node.js