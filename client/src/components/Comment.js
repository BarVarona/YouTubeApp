
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-style: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-style: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;
const Comment = () => {
  return (
    <Container>
      <Avatar src="https://img.freepik.com/premium-photo/oh-my-god-portrait-astonished-handsome-man-denim-casual-shirt-looking-camera-with-big-amazed-eyes-saying-wow-shocked-by-unbelievable-news-indoor-studio-shot-isolated-yellow-background_416530-21128.jpg?w=2000" />
      <Details>
        <Name>
          Bar Varona <Date>1 day ago</Date>
        </Name>
        <Text>Lorem Lorem lorem lorem lorem lorem lorem</Text>
      </Details>
    </Container>
  );
};

export default Comment;
