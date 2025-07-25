import { createUser } from './user-system/createUser';
import { UserAccount } from './user-system/UserAccount';
import { AdminUser } from './user-system/AdminUser';
import { renderUserTable } from './user-system/renderTable';
import type { User } from './user-system/user.type';

const userList: User[] = [];

const form = document.getElementById("userForm") as HTMLFormElement;
const emailInput = document.querySelector("#email") as HTMLInputElement;
const app = document.querySelector("#app") as HTMLDivElement;

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const username = (form.elements.namedItem("username") as HTMLInputElement).value;
  const password = (form.elements.namedItem("password") as HTMLInputElement).value;
  const role = (form.elements.namedItem("role") as HTMLSelectElement).value as User["role"];

  const newUser = createUser({ username, email: emailInput.value, role });

  const account = role === 'admin'
    ? new AdminUser(newUser, password, ['manage-users'])
    : new UserAccount(newUser, password);

  if (!account.validatePassword()) {
    alert('❌ Mật khẩu không hợp lệ cho role này!');
    return;
  }

  userList.push(newUser);
  app.innerHTML = renderUserTable(userList);
};
