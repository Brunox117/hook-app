import { useCounter, useFetch } from "../hooks";
import { LoadingComponent } from "./LoadingComponent";
import { RMCharacterComponent } from "./RMCharacterComponent";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading} = useFetch(
    "https://rickandmortyapi.com/api/character/" + counter,
    counter
  );
  const { name, image } = !!data && data;

  const canGoPrevious = () => {
    if (counter == 1) return true;
    return isLoading;
  };
  // console.log(data, isLoading, hasError);

  return (
    <>
      <h1>Rick&Morty characters</h1>
      <hr />
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <RMCharacterComponent name={name} image={image} />
      )}
      <hr></hr>
      <button
        disabled={canGoPrevious()}
        className="btn btn-primary"
        onClick={() => decrement()}
      >
        Previous character
      </button>
      <button
        disabled={isLoading}
        className="btn btn-primary"
        onClick={() => increment()}
      >
        Next character
      </button>
    </>
  );
};
