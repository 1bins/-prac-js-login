import { $, preventReentry } from "./utils.js";
import { login } from "./login.js";

// 로그인
const debouncedLogin = preventReentry(login);
$('.btn-login').addEventListener('click', debouncedLogin);