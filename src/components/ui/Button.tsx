'use client';

import { IButtonProps } from '@/types/common';

export default function GithubAuthButton({
  children,
  callback,
  className,
}: IButtonProps) {
  return (
    <button
      type='button'
      onClick={callback}
      className={className ? className : `bg-black w-auto text-white`}
    >
      {children}
    </button>
  );
}
