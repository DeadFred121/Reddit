import React from 'react';
import {
  Container,
  Media,
  Image,
  Content,
} from 'reactbulma';

const Post = () => (
  <Container>
    <Media>
      <Media.Left>
        <Image is='64x64' src='http://bulma.io/images/placeholders/128x128.png' />
      </Media.Left>
      <Media.Content>
        <Content>
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </p>
        </Content>
      </Media.Content>
    </Media>
  </Container>
)

export default Post;