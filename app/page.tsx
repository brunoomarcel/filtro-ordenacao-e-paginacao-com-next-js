import FilterDropdown from '@/components/filter-dropdown';
import OrdersTable from '@/components/orders-table';
import Pagination from '@/components/pagination';
import SearchInput from '@/components/search-input';
import axios from 'axios';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

  export default async function Component({
    searchParams,
  }: {
    searchParams?: {search?: string};
  }) {

  console.log(searchParams);
  const response = await axios.get(
    'https://apis.codante.io/api/orders-api/orders', {
      params: {
        search: searchParams?.search,
      }
    }
  );

  //'https://apis.codante.io/api/orders-api/orders?search=qualquercoisa

  const orders = response.data.data;

  console.log(orders)


  return (
    <main className="container px-1 py-10 md:p-10">
      <Card>
        <CardHeader className="px-7">
          <CardTitle>Pedidos</CardTitle>
          <CardDescription>
            Uma listagem de pedidos do seu negócio.
          </CardDescription>
          <div className="flex pt-10 gap-4">
            <SearchInput />
            <FilterDropdown />
          </div>
        </CardHeader>
        <CardContent>
          <OrdersTable orders={orders} />
          <div className="mt-8">
            <Pagination />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
