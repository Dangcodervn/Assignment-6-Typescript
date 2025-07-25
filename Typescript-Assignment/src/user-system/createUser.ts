import type { User } from './user.type';

export function createUser(data: Partial<User>): User {
  return {
    id: Date.now(),
    username: data.username || '',
    email: data.email || '',
    role: data.role || 'user',
    isActive: data.isActive ?? true
  } as User;
}
