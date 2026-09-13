import { useAuthStore } from '../../stores/authStore';

function Profile() {
  const user = useAuthStore((state) => state.user);

  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  if (!user) {
    return (
      <button
        onClick={() =>
          login({ id: 1, name: 'Ucup', email: 'ucupwashington@aslda.com' })
        }
      >
        Login
      </button>
    );
  }
  return (
    <section>
      <h2>Hello, {user?.name ?? 'Belum ada nama'}</h2>

      <p>{user?.email}</p>

      <button onClick={logout}>Logout</button>
    </section>
  );
}

export default Profile;
