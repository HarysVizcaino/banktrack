import { belongsTo, createServer, hasMany, Model, Response, Server } from "miragejs";
import { users } from "./mocks/users";
import { beneficiaries } from "./mocks/beneficiary";
import { accounts } from "./mocks/accounts";

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
      account: Model.extend({
        transactions: hasMany("transaction"),
      }),
      transaction: Model.extend({
        account: belongsTo("account"),
      }),
      beneficiary: Model,
    },

    seeds(server) {
      // ✅ Seeds


      users.forEach((user) => {
        server.create("user", user);
      });

      beneficiaries.forEach((beneficiary) => server.create("beneficiary", beneficiary));

      accounts.forEach((acc) => {
        const createdAccount = server.create("account", {
          id: acc.id,
          amount: acc.amount,
          state: acc.state,
          type: acc.type,
          accountNumber: acc.accountNumber,
          createdAt: acc.createdAt,
        });

        acc.transactions.forEach((trx) => {
          server.create("transaction", {
            id: trx.id,
            amount: trx.amount,
            type: trx.type,
            description: trx.description,
            createdAt: trx.createdAt,
            accountId: createdAccount.id,
          });
        });
      });
    },

    routes() {
      this.namespace = "api";

      // ✅ User Registration
      this.post("/auth/register", (schema, request) => {
        try {
          console.log("📥 Received Registration Request:", request.requestBody);

          const requestBody = JSON.parse(request.requestBody);
          const { fullName, email, password, phoneNumber, identification } = requestBody;

          // ✅ Check if user already exists
          const existingUser = schema.users.findBy({ email });
          if (existingUser) {
            console.warn("⚠️ User already exists:", existingUser.attrs);
            return new Response(400, {}, { error: "User already exists" });
          }

          // ✅ Create new user
          const newUser = schema.create("user", {
            fullName,
            email,
            password, // ⚠ Store passwords securely in a real API
            phoneNumber,
            identification,
            token: `mock-jwt-token-${Math.random().toString(36).substr(2)}`,
          });

          console.log("✅ New user created:", newUser.attrs);
          return new Response(201, {}, { user: newUser.attrs, token: 'hello some token' });
        } catch (error) {
          console.error("❌ Error in registration:", error);
          return new Response(400, {}, { error: "Invalid request data" });
        }
      });

      // ✅ User Login
      this.post("/auth/login", (schema, request) => {
        try {
          const { email, password } = JSON.parse(request.requestBody);
          const user = schema.users.findBy({ email });

          if (!user || user.password !== password) {
            console.warn("⚠️ Invalid credentials");
            return new Response(401, {}, { error: "Invalid email or password" });
          }

          return new Response(200, {}, { token: user.attrs.token, user: user.attrs });
        } catch (error) {
          console.error("❌ Error in login:", error);
          return new Response(400, {}, { error: "Invalid request data" });
        }
      });

      // ✅ Get All Accounts
      this.get("/accounts", (schema) => {
        return schema.all("account");
      });

      // ✅ Get a Single Account (with transactions)
      this.get("/accounts/:id", (schema, request) => {
        const account = schema.find("account", request.params.id);
        if (!account) return new Response(404, {}, { error: "Account not found" });

        return {
          ...account.attrs,
          transactions: account.transactions.models, // ✅ Include transactions
        };
      });

      // ✅ Get Transactions for a Specific Account
      this.get("/accounts/:id/transactions", (schema, request) => {
        const accountId = request.params.id;
        const transactions = schema.where("transaction", { accountId }).models;

        return transactions.length
          ? transactions
          : new Response(404, {}, { error: "No transactions found for this account" });
      });

      // ✅ Create a New Account
      this.post("/accounts", (schema, request) => {
        const { amount, state, type, accountNumber } = JSON.parse(request.requestBody);

        const newAccount = schema.create("account", {
          amount,
          state,
          type,
          accountNumber,
          createdAt: new Date().toISOString(),
        });

        return newAccount;
      });

      // ✅ Update Account (Deposit or Withdraw Money)
      this.patch("/accounts/:id", (schema, request) => {
        const account = schema.find("account", request.params.id);
        if (!account) return new Response(404, {}, { error: "Account not found" });

        const updates = JSON.parse(request.requestBody);
        account.update(updates);
        return account;
      });

      // ✅ Delete an Account
      this.delete("/accounts/:id", (schema, request) => {
        const account = schema.find("account", request.params.id);
        if (!account) return new Response(404, {}, { error: "Account not found" });

        account.destroy();
        return new Response(204);
      });

      // ✅ Create a New Transaction for an Account
      this.post("/transactions", (schema, request) => {
        const { accountId, amount, type, description } = JSON.parse(request.requestBody);
        const account = schema.find("account", accountId);

        if (!account) {
          return new Response(404, {}, { error: "Account not found" });
        }

        const newTransaction = schema.create("transaction", {
          amount,
          type,
          description,
          createdAt: new Date().toISOString(),
          accountId: account.id,
        });

        // ✅ Update account balance
        account.update({ amount: account.amount + amount });

        return newTransaction;
      });

      // ✅ Delete a Transaction
      this.delete("/transactions/:id", (schema, request) => {
        const transaction = schema.find("transaction", request.params.id);
        if (!transaction) return new Response(404, {}, { error: "Transaction not found" });

        // ✅ Reverse transaction amount on account
        const account = schema.find("account", transaction.accountId);
        if (account) {
          account.update({ amount: account.amount - transaction.amount });
        }

        transaction.destroy();
        return new Response(204);
      });


      // ✅ Beneficiaries

      this.get("/beneficiaries", (schema) => {
        return schema.all("beneficiary");
      });

      this.get("/beneficiaries/:accountNumber", (schema, request) => {
        const accountNumber = request.params.accountNumber;
        const beneficiary = schema.findBy("beneficiary", { accountNumber: Number(accountNumber) });

        if (!beneficiary) {
          return new Response(404, {}, { error: "Beneficiary not found" });
        }
        return beneficiary.attrs;
      });

      this.post("/beneficiaries", (schema, request) => {
        const { fullName, accountNumber, accountType } = JSON.parse(request.requestBody);

        // Check if beneficiary already exists
        const existingBeneficiary = schema.findBy("beneficiary", { accountNumber });
        if (existingBeneficiary) {
          return new Response(400, {}, { error: "Beneficiary already exists" });
        }

        const newBeneficiary = schema.create("beneficiary", {
          fullName,
          accountNumber,
          accountType,
        });

        return newBeneficiary.attrs;
      });


      this.delete("/beneficiaries/:accountNumber", (schema, request) => {
        const accountNumber = Number(request.params.accountNumber);
        const beneficiary = schema.findBy("beneficiary", { accountNumber });

        if (!beneficiary) {
          return new Response(404, {}, { error: "Beneficiary not found" });
        }

        beneficiary.destroy();
        return new Response(200, {}, { message: "Beneficiary deleted successfully" });
      });

    },
  });

  window.mirageServer = server;
  return server;
}