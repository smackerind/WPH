import type { UsernameProps } from "./types/username.type";
const UserName = ({ name }: UsernameProps) => {
  return <h2>Nama : {name}</h2>;
};

export default UserName;
