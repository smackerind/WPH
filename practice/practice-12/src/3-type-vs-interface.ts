// Cara Kerja

// 1. Interface
interface UserInterface {
  id: number;
  name: string;
}

interface UserInterface {
  NIK: string;
}

interface AdminInterface extends UserInterface {
  role: string;
}

interface StudentInterface extends UserInterface {
  class: string;
}

// 2. Type
type UserType = {
  id: number;
  name: string;
};

type AdminType = UserType & {
  role: string;
};
