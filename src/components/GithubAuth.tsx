'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import GithubAuthButton from './GithubAuthButton';
import { useCallback, useEffect, useState } from 'react';

interface GithubLoginProps {
  userId: string | undefined;
  email: string | undefined;
}

export default function GithubAuth({ userId, email }: GithubLoginProps) {
  const [isUserId, setIsUserId] = useState(userId || undefined);
  const [isEmail, setIsEmail] = useState(email || undefined);

  const supabase = createClientComponentClient();

  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });

    console.log(data);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    setIsEmail(undefined);
    setIsUserId(undefined);
  };

  const getProfile = useCallback(async () => {
    try {
      const { data } = await supabase.auth.getUser();

      if (data) {
        setIsUserId(data.user?.id);
        setIsEmail(data.user?.email);
      }
    } catch (error) {
      alert('Error loading user data!');
    } finally {
    }
  }, [isUserId, isEmail, supabase]);

  useEffect(() => {
    getProfile();
  }, [isUserId, isEmail, getProfile]);

  return (
    <>
      {isUserId ? (
        <GithubAuthButton callback={signOut}>Github Logout</GithubAuthButton>
      ) : (
        <GithubAuthButton callback={signInWithGithub}>
          Github Login
        </GithubAuthButton>
      )}
    </>
  );
}
