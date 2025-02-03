export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("PUBLIC_URL", "https://mi-app-strapi.vercel.app"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    url: env("ADMIN_PATH", "/admin"),
  },
});
