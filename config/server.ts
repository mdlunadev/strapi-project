export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("PUBLIC_URL", "https://strapi-project-2skg.onrender.com"),
  app: {
    keys: env.array("APP_KEYS", ["yourAppKey1", "yourAppKey2"]),
  },
  admin: {
    url: env("ADMIN_PATH", "/admin"),
  },
});
