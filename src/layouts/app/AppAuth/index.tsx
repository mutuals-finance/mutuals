import React from "react";

export default function AppAuth({ children }: React.PropsWithChildren) {
  /*
  const { connect, connectors } = useConnect();

  useMount(async () => {
    await connect({ connector: connectors[0] });
  });
*/

  return children;
}
