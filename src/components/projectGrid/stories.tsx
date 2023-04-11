import type { Meta, StoryObj } from '@storybook/react';

import { ProjectGrid } from './projectGrid';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ProjectGrid> = {
    title: 'Components/ProjectGrid',
    component: ProjectGrid,
};

export default meta;
type Story = StoryObj<typeof ProjectGrid>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Basic: Story = {
    render: () => (
        <ProjectGrid />

    ),
};