import { Flex, Spinner } from '@cads-ui/core';
import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import NoDataFound from '~/components/NoDataFound';
import { useGuestCategoryListQuery } from '~/graphql/catalog/generated/graphql';
import useQueryPagination from '~/hooks/useQueryPagination';
import { withCatalogApolloProvider } from '~/libs/apollo/catalog';
import CategoryItemHP from './GuestCategoryItem';

interface GuestCategoryListProps {}

const GuestCategoryList = withCatalogApolloProvider<GuestCategoryListProps>((props) => {
  const { page, pageSize, search, setParams } = useQueryPagination();
  const { loading, data } = useGuestCategoryListQuery({
    variables: { page, pageSize, sort: '-createdAt name', search }
  });

  const { docs: categories = [], total = 0 } = data?.catagories || {};

  const handlePageChange = (newPage: number) => {
    setParams([{ key: 'page', value: newPage }]);
  };
  return (
    <>
      <Typography sx={{ mt: 5, mb: 2 }} color="primary" variant="h5" component="h2">
        DANH MỤC NỔI BẬC
      </Typography>
      <Box sx={{ m: 2, boxShadow: 1, borderRadius: 1, position: 'relative' }}>
        <Grid container>
          {loading ? (
            <Grid item xs={12} sx={{ my: 5 }}>
              <Flex center>
                <Spinner size="largest" />
              </Flex>
            </Grid>
          ) : (
            <React.Fragment>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <Grid key={category._id} item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <CategoryItemHP {...category} />
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <NoDataFound title={<></>} subTitle="Chưa có danh mục sản phẩm nào" />
                </Grid>
              )}
            </React.Fragment>
          )}
        </Grid>
      </Box>
      <Divider />
    </>
  );
});

export default GuestCategoryList;
