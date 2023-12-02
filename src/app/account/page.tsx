import GithubAuth from '@/components/GithubAuth';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function Account() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div>
      <h1>Sign in</h1>
      <GithubAuth userId={session?.user.id} email={session?.user.email} />
    </div>
  );
}
