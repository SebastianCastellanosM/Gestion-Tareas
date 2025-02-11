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

interface Order {
  id: string;
  customer: string;
  email: string;
  type: string;
  status: 'Fulfilled' | 'Declined';
  date: string;
  amount: string;
}

interface OrdersTableProps {
  orders: Order[];
}

export default function OrdersTable({ orders }: OrdersTableProps) {
  return (
    <Card>
      <CardHeader className='px-7'>
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className='hidden sm:table-cell'>Type</TableHead>
              <TableHead className='hidden sm:table-cell'>Status</TableHead>
              <TableHead className='hidden md:table-cell'>Date</TableHead>
              <TableHead className='text-right'>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <div className='font-medium'>{order.customer}</div>
                  <div className='hidden text-sm text-muted-foreground md:inline'>
                    {order.email}
                  </div>
                </TableCell>
                <TableCell className='hidden sm:table-cell'>{order.type}</TableCell>
                <TableCell className='hidden sm:table-cell'>
                  <Badge className='text-xs' variant={order.status === 'Fulfilled' ? 'secondary' : 'outline'}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className='hidden md:table-cell'>{order.date}</TableCell>
                <TableCell className='text-right'>${order.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
