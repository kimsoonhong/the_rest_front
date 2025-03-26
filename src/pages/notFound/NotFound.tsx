import styled from "@emotion/styled";

export default function NotFound() {
  return (
    <div>
      <BodyContainer className=" h-full flex flex-col justify-center">
        NotFoundd
      </BodyContainer>

      <BodyContainer className=" h-full flex flex-col justify-center">
        abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
      </BodyContainer>
    </div>
  );
}

const BodyContainer = styled.div`
  height: 600px;

  margin-bottom: 20px;
`;
