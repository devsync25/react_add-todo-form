type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <a href={`mailto:${user.email}`} className="UserInfo">
      {user.name}
    </a>
  );
};
