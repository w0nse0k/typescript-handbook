/**
 * <h3>Declaring this in a Function</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#declaring-this-in-a-function
 */
interface User {
  name: string;
  admin: boolean;
}

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const users: User[] = [
  { name: "Jacob", admin: true },
  { name: "Rachel", admin: false },
  { name: "David", admin: false },
  { name: "Lea", admin: true },
];

function getDB(): DB {
  return {
    filterUsers(filter) {
      return users.filter((user) => filter.call(user));
    },
  };
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});

console.log(JSON.stringify(admins));
