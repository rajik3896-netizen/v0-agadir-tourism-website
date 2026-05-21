'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Joke {
  setup?: string;
  delivery?: string;
  joke?: string;
}

export default function JokeGenerator() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (!response.ok) throw new Error('Failed to fetch joke');
      const data: Joke = await response.json();
      setJoke(data);
    } catch (err) {
      setError('Could not fetch joke. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          😂 Joke Generator
        </h1>

        <Button
          onClick={fetchJoke}
          disabled={loading}
          className="w-full mb-6 bg-indigo-600 hover:bg-indigo-700"
          size="lg"
        >
          {loading ? 'Loading...' : 'Get a Joke'}
        </Button>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {joke && (
          <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
            {joke.setup ? (
              <>
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  {joke.setup}
                </p>
                <p className="text-lg text-indigo-600 font-bold">
                  {joke.delivery}
                </p>
              </>
            ) : (
              <p className="text-lg text-gray-800">
                {joke.joke}
              </p>
            )}
          </div>
        )}

        <p className="text-center text-gray-500 text-sm mt-6">
          Powered by Official Joke API
        </p>
      </Card>
    </div>
  );
}
