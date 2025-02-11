import { Badge } from '@/src/components/ui/badge';
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
import { Avatar, AvatarImage } from '@/src/components/ui/avatar';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '@/src/utils/gql/queries/users';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';

type User = {
  id: string;
  name: string;
  email: string;
  image: string;
};

export default function Component() {
  const [users, setUsers] = React.useState<User[]>([]);
  const { loading, error } = useQuery(GET_ALL_USERS, {
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      console.log('Fetched users:', data.users);
      setUsers(data.users);
    },
  });

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error loading users: {error.message}</div>;
  }

  return (
    <Card>
      <CardHeader className='px-7 flex flex-row justify-between items-center'>
        <div>
          <CardTitle>Users</CardTitle>
          <CardDescription>Recent orders from your store.</CardDescription>
        </div>
        <Link href={`/users/new`}>
          <Button>Add User</Button>
        </Link>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead className='hidden sm:table-cell'>User</TableHead>
              <TableHead className='hidden sm:table-cell'>Email</TableHead>
              <TableHead className='hidden md:table-cell'>Role</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: User) => (
              <TableRow key={user.id} className='bg-accent'>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={user.image} alt={user.name} />
                  </Avatar>
                </TableCell>
                <TableCell className='hidden sm:table-cell'>
                  <div className='font-medium'>{user.name}</div>
                </TableCell>
                <TableCell className='hidden md:table-cell'>{user.email}</TableCell>
                <TableCell className='hidden sm:table-cell'>
                  <Badge className='text-xs' variant='secondary'>
                    Fulfilled
                  </Badge>
                </TableCell>
                <TableCell className='text-right'>
                  <Link href={`/users/${user.id}`}>
                    <Button variant='default' size='sm' className='text-xs'>
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant='destructive'
                    size='sm'
                    className='ml-2 text-xs'
                    onClick={() => console.log(`Deleting user ${user.id}`)} // Implement delete logic here
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