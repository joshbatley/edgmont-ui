import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Accordion } from '.';
import { colorSelectWithWhite } from 'storybook-helpers/presets';
import { AccordionDetail } from './Accordion';

export default {
  title: 'Base/Accordion',
  component: Accordion,
  args: {
    color: 'gray',
  },
  argTypes: {
    color: colorSelectWithWhite,
  },
} as Meta;

const lorem = <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet imperdiet nunc non porttitor. Morbi vitae venenatis mauris. Nam malesuada ipsum mi, sed maximus nulla rhoncus sit amet. Etiam aliquet placerat placerat. Integer iaculis sagittis leo in scelerisque. Maecenas tristique odio a fringilla aliquam. Cras faucibus aliquet cursus. Mauris quis condimentum dolor. Nam gravida sapien quis egestas rutrum.<br /><br /> Sed at est auctor, ullamcorper diam ac, pretium diam. Suspendisse potenti. Donec a molestie leo. Etiam elementum a eros id porttitor. Pellentesque efficitur orci est, ac facilisis leo efficitur id. Etiam laoreet lectus in nisi placerat tristique. Sed a dolor semper, auctor diam pretium, rutrum tellus. Donec cursus consequat elit, sit amet scelerisque arcu consectetur nec. Duis sed lectus neque. Pellentesque malesuada lobortis dictum. Nulla condimentum lorem sed lorem commodo, sed auctor libero sollicitudin. Cras vitae lacinia arcu, sit amet sodales purus</>;

export const Default: Story = () => {
  let [isOpen, setOpen] = React.useState(1);
  return (
    <>
      <Accordion summary="Click me to show the body" isOpen={isOpen === 1} onClick={() => isOpen === 1 ? setOpen(0) : setOpen(1)}>
        <AccordionDetail>This is the body</AccordionDetail>
      </Accordion>
      <Accordion summary="Click me to show the body 2" isOpen={isOpen === 2} onClick={() => isOpen === 2 ? setOpen(0) : setOpen(2)}>
        <AccordionDetail>This is the body</AccordionDetail>
      </Accordion>
      <Accordion summary="Click me to show the body 3" isOpen={isOpen === 3} onClick={() => isOpen === 3 ? setOpen(0) : setOpen(3)}>
        <AccordionDetail>{lorem}</AccordionDetail>
      </Accordion>
    </>
  );
};
