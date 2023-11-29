import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import GithubAuth from './GithubAuth';

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <header className='w-full h-16 flex flex-row items-center border border-purple-800'>
      <GithubAuth userId={session?.user.id} email={session?.user.email} />
    </header>
  );
}
