/**
 * <h3>Database Helper</h3>
 * @author Jacob
 */
import mariadb, { type UpsertResult } from "mariadb";
import { config } from "./lib.js";

export const db = {
  list: async <T>(sql: string, ...args: unknown[]) => {
    let conn;
    try {
      conn = await mariadb.createConnection(config);
      return await conn.execute<T[]>(sql, args);
    } finally {
      if (conn) conn.end();
    }
  },

  one: async <T>(sql: string, ...args: unknown[]) => {
    let conn;
    try {
      conn = await mariadb.createConnection(config);
      return (await conn.execute<T[]>(sql, args))[0];
    } finally {
      if (conn) conn.end();
    }
  },

  upsert: async (sql: string, ...args: unknown[]) => {
    let conn;
    try {
      conn = await mariadb.createConnection(config);
      return await conn.execute<UpsertResult>(sql, args);
    } finally {
      if (conn) conn.end();
    }
  },
};
