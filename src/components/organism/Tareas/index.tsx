import React, { useState } from 'react';
import { Badge } from '@/src/components/ui/badge';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/components/ui/table';
import { useQuery } from '@apollo/client';
// import { GET_PRODUCTS } from '@/src/utils/gql/queries/products';
import { Avatar, AvatarImage } from '@/src/components/ui/avatar';
import { Button } from '@/src/components/ui/button';

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

export default function Component() {
/*  const [products, setProducts] = useState([]);
  useQuery(GET_PRODUCTS, {
    onCompleted: (data) => {
      setProducts(data.productss);
    },
  });
  */
  return (
    <Card>
      <CardHeader className='px-7'>
        <div>
          <CardTitle>Tareas</CardTitle>
          <CardDescription>Table Products</CardDescription>
        </div>
        <Link href={`/products/new`}>
          <Button> Add Product</Button>
        </Link>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className='hidden sm:table-cell'>Name</TableHead>
              <TableHead className='hidden sm:table-cell'>Description</TableHead>
              <TableHead className='text-right'>Price</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product: Product) => (
              <TableRow key={product.id} className='bg-accent'>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={product.image} alt={product.name} />
                  </Avatar>
                </TableCell>
                <TableCell>
                  <div className='font-medium'>{product.name}</div>
                </TableCell>
                <TableCell className='hidden sm:table-cell'>{product.description}</TableCell>

                <TableCell className='text-right'>${product.price}</TableCell>
                <TableCell className='text-right'>
                  <Link href={`/products/${product.id}`}>
                    <Badge className='text-xs' variant='default'>
                      Edit
                    </Badge>
                  </Link>
                  <Badge className='text-xs' variant='destructive'>
                    Delete
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
