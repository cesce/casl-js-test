import { defineUserAbility, definePostAbility } from "./defineAbility.js";

if (defineUserAbility.can("read", "Post")) console.log(true); // true
if (defineUserAbility.can("read", "User")) console.log(true); // true
if (defineUserAbility.can("update", "User")) console.log(true); // true
if (!defineUserAbility.can("delete", "User")) console.log(false); // false
if (defineUserAbility.cannot("delete", "User")) console.log(true); // true
