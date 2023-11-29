'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import GithubAuthButton from './GithubAuthButton';
import { useCallback, useEffect, useState } from 'react';
import { IGithubLoginProps } from '@/types/common';
import { githubButtonText } from '@/constants/common';
import { useMultipleStates } from '@/hooks/useMulitple';

export default function GithubAuth({ userId, email }: IGithubLoginProps) {
  const [auth, setAuth] = useMultipleStates({
    isUserId: userId || undefined,
    isEmail: email || undefined,
  });

  const supabase = createClientComponentClient();

  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setAuth('isUserId', undefined);
  };

  const getProfile = useCallback(async () => {
    try {
      const { data } = await supabase.auth.getUser();

      if (data) {
        setAuth('isUserId', data.user?.id);
        setAuth('isEmail', data.user?.email);
      }
    } catch (error) {
      alert('Error loading user data!');
    } finally {
    }
  }, [supabase]);

  useEffect(() => {
    getProfile();
  }, [auth.isUserId, auth.isEmail, getProfile]);

  return (
    <>
      {auth.isUserId ? (
        <GithubAuthButton callback={signOut}>
          {githubButtonText.logout}
        </GithubAuthButton>
      ) : (
        <GithubAuthButton callback={signInWithGithub}>
          {githubButtonText.login}
        </GithubAuthButton>
      )}
    </>
  );
}
