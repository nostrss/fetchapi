export interface IGithubLoginProps {
  userId: string | undefined;
  email: string | undefined;
}

export interface IGithubAuthButtonProps {
  children?: React.ReactNode;
  callback?: () => void;
}
