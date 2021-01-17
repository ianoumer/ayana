import Head from 'next/head';
import { Button, Text, Heading, Code } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Heading>Ayana</Heading>

        <Text>
          Current user: <Code>{auth?.user?.email}</Code>
        </Text>
        {auth?.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
};

export default Home;
