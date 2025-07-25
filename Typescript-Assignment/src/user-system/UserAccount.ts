import type { User } from './user.type';

export class UserAccount implements User {
  readonly id: number;
  username: string;
  email: string;
  role: User['role'];
  isActive?: boolean;
  private password: string;

  constructor(user: User, password: string) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.role = user.role;
    this.isActive = user.isActive;
    this.password = password;
  }

  validatePassword(): boolean {
    return this.password.length >= 8;
  }
}
