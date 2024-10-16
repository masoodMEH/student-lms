import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof Button>

export const Brand: Story = {
    render: () => (
        <>
            <Button>default</Button>
            <Button variant='neutral'>Neutral</Button>
            <Button variant='primary'>Primary</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='accent'>Accent</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='success'>Success</Button>
            <Button variant='info'>Info</Button>
            <Button variant='error'>Error</Button>
            <Button variant='warning'>Warning</Button>
            <Button isLink={true}>Link</Button>

        </>
    )
}