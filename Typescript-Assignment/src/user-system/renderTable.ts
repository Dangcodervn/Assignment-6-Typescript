import type { User } from './user.type';

export function renderUserTable(users: User[]): string {
  return `
    <div class="container mx-auto">
      <h1 class="text-2xl">User management systems</h1>
      <div class="overflow-x-auto rounded border border-gray-300 shadow">
        <table class="min-w-full divide-y-2 divide-gray-200">
          <thead>
            <tr class="text-left font-medium text-gray-900">
              <th class="px-3 py-2">Name</th>
              <th class="px-3 py-2">Email</th>
              <th class="px-3 py-2">Role</th>
              <th class="px-3 py-2">Active</th>
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-gray-100">
            ${users.map(user => `
              <tr>
                <td class="px-3 py-2">${user.username}</td>
                <td class="px-3 py-2">${user.email}</td>
                <td class="px-3 py-2">${user.role}</td>
                <td class="px-3 py-2">${user.isActive ? '✅' : '❌'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
