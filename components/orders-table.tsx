import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from './ui/badge';
import { ChevronsUpDown } from 'lucide-react';
import { Order } from '@/lib/types';

const formatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL'
});

type OrdersTableProps = {orders: Order[]};

export default function OrdersTable({orders}: OrdersTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="w-full">
          <TableHead className="table-cell">Cliente</TableHead>
          <TableHead className="table-cell">Status</TableHead>
          <TableHead className="table-cell cursor-pointer justify-end items-center gap-1">
            <div className="flex items-center gap-1">
              Data
              <ChevronsUpDown className="w-4" />
            </div>
          </TableHead>
          <TableHead className="text-right cursor-pointer flex justify-end items-center gap-1">
            Valor
            <ChevronsUpDown className="w-4" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>
              <div className="font-medium"></div>
              <div className="hidden md:inline text-sm text-muted-foreground">
                {order.customer_email}
              </div>
            </TableCell>
            <TableCell>
              <Badge className={`text-xs`} variant="outline">
              {order.status === 'pending' ? 'Pendente' : 'Completo'} <data value=""></data>
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">{order.order_date.toString()}</TableCell>
            <TableCell className="text-right">{formatter.format(order.amount_in_cents/100)}</TableCell>
          </TableRow>
        ))}
        
        <TableRow>
          <TableCell>
            <div className="font-medium">Ciclana de Tal</div>
            <div className="text-sm text-muted-foreground">
              ciclana.de.tal@gmail.com
            </div>
          </TableCell>
          <TableCell>
            <Badge className={`text-xs`} variant="outline">
              Completo
            </Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">2023-01-01</TableCell>
          <TableCell className="text-right">R$500,00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}