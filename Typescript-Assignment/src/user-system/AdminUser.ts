import { UserAccount } from './UserAccount';
import type { User } from './user.type';

export class AdminUser extends UserAccount {
  permissions: string[];

  constructor(user: User, password: string, permissions: string[]) {
    super(user, password);
    this.permissions = permissions;
  }

  override validatePassword(): boolean {
    return super['password'].length >= 12;
  }
}
