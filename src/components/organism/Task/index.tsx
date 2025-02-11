import React, { useState, useEffect } from 'react';
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
import { useQuery, useMutation } from '@apollo/client';
// import { GET_PRODUCTS } from '@/src/utils/gql/queries/products'; 
import { Avatar, AvatarImage } from '@/src/components/ui/avatar';
import { Button } from '@/src/components/ui/button';
// import { DELETE_PRODUCT } from '@/src/utils/gql/mutations/products';

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

export default function Component() {
  const [products, setProducts] = useState<Product[]>([]);

  // Simulación de consulta de productos
  // Reemplaza esto con la consulta real usando Apollo Client.
  useEffect(() => {
    const fetchedProducts: Product[] = [
      {
        id: '1',
        name: 'Product 1',
        description: 'Description of product 1',
        image: '/path/to/image1.jpg',
        price: 100,
      },
      {
        id: '2',
        name: 'Product 2',
        description: 'Description of product 2',
        image: '/path/to/image2.jpg',
        price: 200,
      },
      // Agrega más productos aquí...
    ];
    setProducts(fetchedProducts);
  }, []);

  // Función para eliminar un producto
  const handleDelete = (productId: string) => {
    // Lógica para eliminar el producto (ejemplo con Apollo Client)
    console.log(`Eliminar producto con ID: ${productId}`);
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <Card>
      <CardHeader className='px-7'>
        <div>
          <CardTitle>Tareas</CardTitle>
          <CardDescription>Table Products</CardDescription>
        </div>
        <Link href={`/products/new`}>
          <Button>Add Product</Button>
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
            {products.map((product) => (
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
                  <Button
                    onClick={() => handleDelete(product.id)}
                    className='ml-2'
                    variant='destructive'
                    size='sm'
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}