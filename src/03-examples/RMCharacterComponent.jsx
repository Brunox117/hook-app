import { useEffect, useRef, useState } from "react";

export const RMCharacterComponent = ({ name, image }) => {
  const h3Ref = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  // const imgRef = useRef();
  useEffect(() => {
    const { height, width } = h3Ref.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [image]);

  return (
    <>
      <div className="text-center" style={{ display: "flex" }}>
        <img src={image} className="img-thumbnail" alt={name} />
        {/* <img ref={imgRef} src={image} className="img-thumbnail" alt={name} /> */}
        <h3 ref={h3Ref}>{name}</h3>
      </div>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
