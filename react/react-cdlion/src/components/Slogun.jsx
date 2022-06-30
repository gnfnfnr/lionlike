import React from "react";
import { SlogunSection, SlogunSmall, SlogunBig } from "../styledComponents";

function Solgun() {
  return (
    <SlogunSection>
      <SlogunBig>Hack Your Life</SlogunBig>
      <SlogunSmall>내 아이디어를 내 손으로 실현하다.</SlogunSmall>
    </SlogunSection>
  );
}

export default React.memo(Solgun);
