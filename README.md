# Teslo Shop

## Dev

1. Clone the repository: `git clone https://github.com/eliesser/curso-nextjs-04-teslo-shop.git`.

2. Create a copy of the `.env.template` and rename it to `.env` and change the environment variables.

3. Install dependencies: `npm install`.

4. Database set up `docker compose up -d`.

5. Running prisma migrations: `npx prisma migrate dev`

6. Execute the project in dev: `npm run dev`.

## Pro

1. Create the production build: `npm run build`.

2. Execute the project in pro: `npm run start`.

## Prisma

- Install the Prisma CLI as a development dependency in the project: `npm install prisma --save-dev`.

- Finally, set up Prisma ORM with the init command of the Prisma CLI: `npx prisma init --datasource-provider PostgreSQL`.

- Set the DATABASE_URL in the .env file to point to your existing database.

- Run the following command in your terminal to create the PostgreSQL database and the User and Post tables represented by your models: `npx prisma migrate dev --name init`
