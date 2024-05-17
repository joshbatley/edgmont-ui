import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ShoppingCartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Title, TextComp, Box } from '@edgmont-ui/react';
import {
  Label,
  OutlineButton,
  PrimaryButton,
  TextArea,
  TextField,
} from '@edgmont-ui/react';
import { Card, CardContent, CardMedia } from '@edgmont-ui/react';

const meta: Meta = {
  title: 'Data/Card',
  component: Card,

};

export default meta;

export const Examples: StoryObj<typeof Card> = {
  render: () => (
    <Box display="flex" flexDirection="column">
      <Card
        mb="2"
        maxWidth={400}
        display="flex"
        flexDirection="row"
      >
        <CardMedia
          as="img"
          alt="green iguana"
          width="33.333%"
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent py="4">
          <Box display="flex" justifyContent="space-between">
            <Title as="h3" fontWeight="700">
              The Reptile
            </Title>
            <TextComp mono as="span" color="baseHighlight">
              £99.99
            </TextComp>
          </Box>
          <Box mb="2">
            <TextComp fontSize="0" lineHeight="0" color="baseHighlight">
              In stock
            </TextComp>
          </Box>
          <TextComp>Good with children, only lightly bites limbs off.</TextComp>
          <Box as="hr" my="4" />
          <Box width="100%" display="flex">
            <PrimaryButton
              justifyContent="center"
              flexGrow="1"
              size="small"
              mr="2"
            >
              <ShoppingBagIcon width={16} height={16} />
              <TextComp>Buy now</TextComp>
            </PrimaryButton>
            <OutlineButton
              justifyContent="center"
              flexGrow="1"
              size="small"
              textAlign="center"
            >
              <ShoppingCartIcon width={16} height={16} />
              <TextComp>Add to cart</TextComp>
            </OutlineButton>
          </Box>
        </CardContent>
      </Card>

      <Card maxWidth={500}>
        <CardContent borderBottom="border.1">
          <Title as="h4">Application form</Title>
        </CardContent>

        <CardContent my="2">
          <Label value="Website url">
            <TextField
              before={
                <Box px="2" py="1">
                  https://
                </Box>
              }
              placeholder="www.example.com"
            />
          </Label>

          <Label value="Desciption">
            <TextArea placeholder="desciption of website" />
          </Label>
        </CardContent>

        <Box bg="background" p="2" display="flex" justifyContent="flex-end">
          <PrimaryButton>Submit</PrimaryButton>
        </Box>
      </Card>
    </Box>
  ),
};

export const Content: StoryObj<typeof Card> = {
  render: () => (
    <Card>
      <CardContent>
        A basic styled div for use inside Card component
      </CardContent>
    </Card>
  ),
};

export const Media: StoryObj<typeof Card> = {
  render: () => (
    <Box display="flex" flexDirection="column">
      <Card maxWidth={300}>
        <CardMedia
          as="img"
          alt="green iguana"
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>A image</CardContent>
      </Card>
      <Card maxWidth={300}>
        <CardMedia
          as="iframe"
          alt="green iguana"
          src="https://www.youtube.com/embed/es64KSWcboA"
        />
        <CardContent>A video</CardContent>
      </Card>
    </Box>
  ),
};
