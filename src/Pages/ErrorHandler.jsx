import React from "react";

function ErrorHandler({error, children: errorBody}) {
  return (
    <div className="flex flex-col py-8 place-items-center">
      <div>
        <h1 className="text-xl font-medium">{error}</h1>
        <p className="pt-2"><i>{errorBody}</i></p>
      </div>
    </div>
  );
}

export default ErrorHandler;