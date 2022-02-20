import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Card, CardContent, CardMedia } from '.';
import { Title, Text, TextMono } from 'data';
import { Label, OutlineButton, PrimaryButton, TextArea, TextField } from 'inputs';
import { ShoppingCartIcon, ShoppingBagIcon } from 'feedback/Icons/Outline';

export default {
  title: 'Data/Card',
  component: Card,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export const Examples: Story = ({ ...rest }) => (
  <div className="flex flex-col space-y-2">
    <Card className="flex flex-row" style={{ maxWidth: 400 }} {...rest}>
      <CardMedia
        as="img"
        alt="green iguana"
        className="w-1/3"
        src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent className="py-4">
        <Title as="h3" className="font-bold">
          The Reptile
          <TextMono as="span" className="float-right font-normal text-base text-gray-400">£99.99</TextMono>
        </Title>
        <Text className="text-xs text-gray-500 mb-2">In stock</Text>
        <Text>
          Good with children, only lightly bites limbs off.
        </Text>
        <hr className="my-4" />
        <div className="w-full flex space-x-2">
          <PrimaryButton className=" justify-center flex-grow" size="small">
            <ShoppingBagIcon width={16} height={16} className="mr-2" />Buy now
          </PrimaryButton>
          <OutlineButton size="small" className="text-center justify-center flex-grow">
            <ShoppingCartIcon width={16} height={16} className="mr-1" />Add to cart
          </OutlineButton>
        </div>
      </CardContent>
    </Card>

    <Card style={{ maxWidth: 500 }} {...rest}>
      <CardContent className="border-b">
        <Title as="h4" >Application form</Title>
      </CardContent>
      <CardContent className="space-y-2 my-2">
        <Label value="Website url">
          <TextField
            before={<div>https://</div>}
            placeholder="www.example.com"
          />
        </Label>

        <Label value="Desciption">
          <TextArea placeholder="desciption of website" />
        </Label>
      </CardContent>
      <div className="bg-gray-50 px-2 py-2 flex justify-end">
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </Card>
  </div>
);

export const Content: Story = () => (
  <Card>
    <CardContent>A basic styled div for use inside Card component</CardContent>
  </Card>
);

export const Media: Story = ({ ...rest }) => (
  <div className="flex flex-col space-y-2">
    <Card style={{ maxWidth: 300 }} {...rest}>
      <CardMedia
        as="img"
        alt="green iguana"
        src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>A image</CardContent>
    </Card>
    <Card style={{ maxWidth: 300 }} {...rest}>
      <CardMedia
        as="iframe"
        alt="green iguana"
        src="https://www.youtube.com/embed/es64KSWcboA"
      />
      <CardContent>A video</CardContent>
    </Card>
  </div>
);
