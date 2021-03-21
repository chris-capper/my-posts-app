import React from 'react';

import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio
};

const Template = (args) => (
  <Bio
      headshot="https://pbs.twimg.com/profile_images/1340045154007175168/1MvMNQg1_400x400.jpg"
      name="Chris Capper"
      tagline="Like Christopher Capper, but shorter!"
      role="Freelance Web Dev and Design @ my house"
  />
);

export const Default = Template.bind({});