import React from "react";
import "../App.css";
import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
    <div className="container__header">
      <div className="container__menu">
        <ul>
          <h1>Este es el título</h1>
          <li>
            <Link to="Hook1">useState</Link>
          </li>
          <li>
            <Link to="Hook2">useCounter</Link>
          </li>
          <li>
            <Link to="Hook3">useEffect</Link>
          </li>
          <li>
            <Link to="Hook4">useLayouteffect</Link>
          </li>
          <li>
            <Link to="Hook5">useMemo</Link>
          </li>
          <li>
            <Link to="Hook6">useReducer</Link>
          </li>
          <li>
            <Link to="Hook7">CustomHooks</Link>
          </li>
          <li>
            <Link to="Hook8">useFetch</Link>
          </li>
          <li>
            <Link to="Hook9">useRef</Link>
          </li>
          <li>
            <Link to="Hook10">useCallback</Link>
          </li>
          <li>
            <Link to="Hook11">Memo</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hooks;
