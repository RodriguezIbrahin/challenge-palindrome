"use client";
import { useEffect, useState } from "react";
import PalindromeList from "./components/phraseList.components";
import { IPhrase } from "./interfaces/IPhrase";
import {
  getPhrases,
  deletePhrase,
  postPhrase,
} from "./services/phrase.services";
import PhraseForm from "./components/phraseForm.components";
import PhraseToast from "./components/phraseToast.components";

const Home = () => {
  const [phrases, setPhrases] = useState<IPhrase[]>([]);
  const [phraseCreated, setPhraseCreated] = useState<any>({});

  const fetchData = async () => {
    try {
      const data = await getPhrases();
      setPhrases(data);
    } catch (err) {
      console.log({ err });
    }
  };

  const onDelete = async (id: string) => {
    try {
      await deletePhrase(id);
      fetchData();
    } catch (err) {
      console.log({ err });
    }
  };

  const onCreated = async (phrase: string, callback: () => void) => {
    try {
      const created = await postPhrase(phrase);
      callback();
      fetchData();
      setPhraseCreated(created);

      const timeoutId = setTimeout(() => {
        setPhraseCreated({});
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-dark min-vh-100 w-100">
      <main className="row justify-content-center py-5">
        <PhraseForm onCreated={onCreated} />
        <PalindromeList phrases={phrases} onDelete={onDelete} />
        {(phraseCreated.message || phraseCreated.phrase) && (
          <PhraseToast data={phraseCreated} />
        )}
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
