import React from 'react';
import {
  Container,
  Media,
  Image,
  Content,
} from 'reactbulma';

const Post = ({ title, author }) => (
  <Container>
    <Media>
      <Media.Left>
        <Image is='64x64' src='http://bulma.io/images/placeholders/128x128.png' />
      </Media.Left>
      <Media.Content>
        <Content>
          <p>
            <strong>{title}</strong>
            <br />
            <cite>{author}</cite> <small>31m</small>
          </p>
        </Content>
      </Media.Content>
    </Media>
  </Container>
)

export default Post;