/**
 * <h3>Database Helper</h3>
 * 데이터베이스 작업을 쉽게하는 wrapper 함수들
 * @author Jacob
 */
import mariadb, { type UpsertResult } from "mariadb";
import { connectionConfig } from "./lib.js";

export const db = {
  // 목록을 조회하는 함수
  list: async <T>(sql: string, ...args: unknown[]) => {
    let conn;
    try {
      conn = await mariadb.createConnection(connectionConfig);
      return await conn.execute<T[]>(sql, args);
    } finally {
      if (conn) conn.end();
    }
  },

  // 1건을 조회하는 함수
  one: async <T>(sql: string, ...args: unknown[]) => {
    let conn;
    try {
      conn = await mariadb.createConnection(connectionConfig);
      return (await conn.execute<T[]>(sql, args))[0];
    } finally {
      if (conn) conn.end();
    }
  },

  // 추가/수정/삭제를 하는 함수
  upsert: async (sql: string, ...args: unknown[]) => {
    let conn;
    try {
      conn = await mariadb.createConnection(connectionConfig);
      return await conn.execute<UpsertResult>(sql, args);
    } finally {
      if (conn) conn.end();
    }
  },
};
