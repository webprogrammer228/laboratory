import React from "react";

import styled from "styled-components";

const DoctorShowContainer = styled.div`
  width: 100%;
  height: 2em;
  display: flex;
  border-bottom: 1px solid #d8d8d852;
  padding: 6px 8px;
`;

export function DoctorShow(props) {
    const { name } = props;
  return (
    <DoctorShowContainer>
        <p>{name}</p>
    </DoctorShowContainer>
  );
}
