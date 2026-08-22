type User = {
  id: number;
  name: string;
  email: string;
  avatar?: string | null;
};

type Comment = {
  id: number;
  message: string;
  user: User;
};

type Post = {
  id: number;
  title: string;
  comments: Comment[];
};

async function getUser(): Promise<User> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = (await res.json()) as User;

  return data;
}

type ApiResponse<T> = {
  status: 'success' | 'error';
  data?: T;
  message?: string;
};

async function fetchUser(): Promise<ApiResponse<User>> {
  const res = await fetch('API');

  const data = (await res.json()) as ApiResponse<User>;
  return data;
}

function handleResponse(res: ApiResponse<User>) {
  if (res.status === 'success' && res.data) {
    console.log(res.data.name);
  } else {
    console.error(res.message);
  }
}
