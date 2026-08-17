let id: string;
id = 'ucup';
id = 'udin';

// Literal type
let userId: 'ucup';
userId = 'ucup';
userId = 'udin';

type Role = 'admin';

let role: Role;
role = 'admin';
role = 'user';

let udahPasti: true;
udahPasti = true;
udahPasti = false;

// Contoh
type StatusCode = 200 | 404 | 500;

type APIResponse = {
  status: 'success' | 'error';
  code: StatusCode;
};

function handleResponse(res: APIResponse): void {
  if (res.status === 'success') {
    console.log('OK:', res.code);
  } else {
    console.log('Error:', res.code);
  }
}
