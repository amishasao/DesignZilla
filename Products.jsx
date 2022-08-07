import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    {id: 1, name: 'The Original', description: 'Brown sugar boba.', price: '$5', image: 'http://cdn.shopify.com/s/files/1/0282/1416/5636/articles/brown-sugar-milk-tea-bubbles-101_1200x1200.png?v=1577305161'},
    {id: 2, name: 'Milk Tea', description: 'Boba milk tea.', price: '$10', image: 'https://images.unsplash.com/photo-1592318730259-6f18a6ba1c29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=80'},
];

const Products = () => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing="4">
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;