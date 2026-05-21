import JokeGenerator from '@/components/JokeGenerator';

export const metadata = {
  title: 'Joke Generator | Agadir Tourism',
  description: 'Have fun with our random joke generator!',
};

export default function JokesPage() {
  return (
    <main>
      <JokeGenerator />
    </main>
  );
}
