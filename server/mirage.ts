import { createServer, Model, Response, Server } from "miragejs";
import { users } from "./mocks/users";

declare global {
  interface Window {
    mirageServer?: Server;
  }
}

export function makeServer() {
  if (window.mirageServer) {
    return window.mirageServer;
  }

  const server = createServer({
    models: {
      user: Model,
    },

    seeds(server) {
      users.forEach((user) => server.create("user", user));
    },

    routes() {
      this.namespace = "api";

      // ✅ Sign-In Route
      this.post("/auth/login", (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        const user = schema.findBy("user", { email, password });

        if (!user) {
          return new Response(401, {}, { error: "Invalid email or password" });
        }

        return { token: user.attrs.token, user: { id: user.id, email: user.email, name: user.name } };
      });

      this.post("/auth/register", (schema, request) => {
        const { fullName, id, phoneNumber } = JSON.parse(request.requestBody);

        // ✅ Check if the user already exists
        const existingUser = schema.findBy("user", { id });
        if (existingUser) {
          return new Response(400, {}, { error: "User already exists" });
        }

        // ✅ Create a new user
        const newUser = schema.create("user", {
          fullName,
          id,
          phoneNumber,
          token: `mock-jwt-token-${Math.random().toString(36).substr(2)}`, // Mocked JWT
        });

        return {
          user: newUser.attrs,
          token: newUser.attrs.token,
        };
      })
    },
  });

  window.mirageServer = server;
  return server;
}