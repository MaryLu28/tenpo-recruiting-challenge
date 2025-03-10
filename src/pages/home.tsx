import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useAuth } from "../shared/auth/auth-provider";
import { Colors } from "../shared/colors";

import GoTopButton from "../components/go-top-button";
import { DotsLoader } from "../components/loaders";

const Title = styled.h1`
  color: ${Colors.primary};
  text-align: center;
  font-size: 32px;
`;

const CharactersContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const CharacterCard = styled.li`
  background-color: ${Colors.darkGray};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const CharacterName = styled.h3`
  color: ${Colors.primary};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding-top: 10px;
`;

const CharacterImage = styled.img`
  border-radius: 8px;
  width: 100%;
`;

// en caso de que el api requiera autenticación, se colocará en true. Está en false porque el api actual no lo permite
const ENABLE_AUTH = false;

const baseURL = "https://gateway.marvel.com:443/v1/public/characters";
const apiKey = process.env.REACT_APP_MARVEL_KEY;
const limit = 20;

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);

  const auth = useAuth();

  const observerRef = useRef<HTMLDivElement | null>(null);

  const getCharacters = useCallback(async () => {
    if (loading) return;
    if (isError) return;

    setLoading(true);

    try {
      const response = await axios.get(
        `${baseURL}?apikey=${apiKey}&offset=${offset}&limit=${limit}`,
        ENABLE_AUTH
          ? {
              headers: {
                "x-fake-token": auth.token,
              },
            }
          : {}
      );

      setOffset((prev) => prev + limit);
      setCharacters((prev) => [...prev, ...response.data.data.results]);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }

    setLoading(false);
  }, [offset, loading, isError, auth.token]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          getCharacters();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [getCharacters]);

  return (
    <>
      <Title>Personas Marvel</Title>
      <CharactersContainer>
        {characters.map((character) => (
          <CharacterCard key={character.id}>
            <CharacterImage
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              style={{ width: 100 }}
            />
            <CharacterName>{character.name}</CharacterName>
          </CharacterCard>
        ))}
      </CharactersContainer>
      <div
        ref={observerRef}
        style={{ height: 50, background: "transparent" }}
      />
      {loading && <DotsLoader />}
      <GoTopButton />
    </>
  );
};

export default Home;
