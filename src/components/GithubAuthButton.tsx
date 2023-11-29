'use client';

interface GithubAuthButtonProps {
  children?: React.ReactNode;
  callback?: () => void;
}

export default function GithubAuthButton({
  children,
  callback,
}: GithubAuthButtonProps) {
  return (
    <button
      type='button'
      onClick={callback}
      className='bg-black w-auto text-white'
    >
      {children}
    </button>
  );
}
