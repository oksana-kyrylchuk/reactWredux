import React from 'react';
import get from 'lodash/get';

import {Box} from 'shared/vendors';

import {PageTitle, Table} from "shared/components";

const ImageViewComponent = ( {imageTableConfig, page, images} ) => {
  return (
  <Box display={'flex'} flexDirection={'column'} flex={1} className="App">
    <PageTitle componentStyle={{theme:'darken', size: 'big'}} title={get(page,'title')} variant={'h1'} />
    <Table items={images} page={page} tableConfig={imageTableConfig} />
  </Box>
)};

export default ImageViewComponent
