'use client';

import { IGithubAuthButtonProps } from '@/types/common';

export default function GithubAuthButton({
  children,
  callback,
}: IGithubAuthButtonProps) {
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
