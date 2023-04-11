import type { Meta, StoryObj } from '@storybook/react';

import { AppBarMain } from './appBarMain';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof AppBarMain> = {
    title: 'Components/AppBarMain',
    component: AppBarMain,
    argTypes: { handleScrollClick: { action: 'clicked' } }
};

export default meta;
type Story = StoryObj<typeof AppBarMain>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {};