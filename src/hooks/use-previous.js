import { useEffect, useRef } from "react";

function usePrevious(value) {
  const ref = useRef({});
  useEffect(() => {
    ref.current = value;
    // note no dependency so this renders on prop or state changes
    // or any changes that might cause a render cycle , usually side effect from some parent component somewhere ???
  });

  // useDebugValue(ref.current.val !== "" ? "some value is set" : "nothing");
  return ref.current;
}

export default usePrevious;
