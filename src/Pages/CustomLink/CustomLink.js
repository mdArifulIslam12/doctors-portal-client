import * as React from "react";
import {
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <Link
           style={{ backgroundColor: match ? "#3A4256" : "" }}
          to={to}
          {...props}
        >
          <span style={{ color: match ? "#D4D9E3" : "#000000" }}>{children}</span>
        </Link>
    );
  }
  export default CustomLink