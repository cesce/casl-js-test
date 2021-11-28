import { defineUserAbility, definePostAbility } from "./defineAbility.js";
import { Article } from "./entities.js";

console.log("can read Post:");
console.log(defineUserAbility.can("read", "Post")); // true

console.log("can read User:");
console.log(defineUserAbility.can("read", "User")); // true

console.log("can update User:");
console.log(defineUserAbility.can("update", "User")); // true

console.log("can delete User:");
console.log(!defineUserAbility.can("delete", "User")); // false

console.log("cannot delete User:");
console.log(defineUserAbility.cannot("delete", "User")); // true

const user = { id: 1 };
const ability = definePostAbility(user);
const article = new Article(); // If this is empty: ability.can("read", article) => false

console.log("can read article:");
console.log(ability.can("read", article));

const user2 = { id: 2, isLoggedIn: true };
const ownArticle = new Article({ authorId: user2.id });
const anotherArticle = new Article({ authorId: 3 });
const ability2 = definePostAbility(user2);

console.log("can read Article:");
console.log(ability2.can("read", "Article")); // true

console.log("can update Article:");
console.log(ability2.can("update", "Article")); // true

console.log("can update ownArticle");
console.log(ability2.can("update", ownArticle)); // true

console.log("can update anotherArticle");
console.log(ability2.can("update", anotherArticle)); // false, we can't update articles which were not written by us
