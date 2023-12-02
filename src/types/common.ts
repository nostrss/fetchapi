export interface IGithubLoginProps {
  userId: string | undefined;
  email: string | undefined;
}

export interface IButtonProps {
  children?: React.ReactNode;
  callback?: () => void;
  className?: string;
}
