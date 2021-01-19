import { Button, Text, Heading, Code } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();
  console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
  return (
    <div>
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
