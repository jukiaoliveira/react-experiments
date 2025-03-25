import React from "react";

export const ConditionalRender = () => {
  const x = true;

  const name = "Julia";

  return (
    <div>
      {/* 7 - render condicional */}
      <h3>Isso será exibido?</h3>
      {x && <p>Se x for true sim!</p>}
      {/* 8 - else */}
      <h3> Render ternário</h3>
      {name === "Pablo" ? (
        <div>
          <p>Olá Julia!</p>
        </div>
      ) : (
        <div>
          <p>Olá estranho!</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
