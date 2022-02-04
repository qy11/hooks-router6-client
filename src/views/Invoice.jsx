
import { Link, Outlet, NavLink, useSearchParams, useLocation } from 'react-router-dom';

import { getInvoices } from '../data';

const QueryLink = ({ to, ...props }) => {
  const location = useLocation()
  console.log(location);
  return <NavLink to={to + location.search} {...props} />
}

const Invoice = () => {
  const invoices = getInvoices()
  let [searchParams, setSearchParams] = useSearchParams()
  return <div>
    <nav>
      <input type="text" value={searchParams.get('filter') || ''}
        onChange={e => {
          let value = e.target.value;
          value ? setSearchParams({ filter: value }) : setSearchParams({})
        }}
      />

      {
        invoices
          .filter(item => {
            let filter = searchParams.get('filter')
            if (!filter) return true
            let name = item.name.toLowerCase()
            return name.includes(filter.toLowerCase())
          })
          .map(item => (
            // <Link to={`/invoices/${item.number}`} key={item.number} style={{ display: 'block' }}>{item.name}</Link>\
            // <NavLink to={`/invoices/${item.number}?filter=3$name=zhangsan`} key={item.number}
            <QueryLink to={`/invoices/${item.number}`} key={item.number}
              style={({ isActive }) => {
                return {
                  display: 'block',
                  color: isActive ? 'red' : ''
                }
              }}
            >{item.name}</QueryLink>
          ))
      }
    </nav>
    <Outlet />
  </div>;
};

export default Invoice;
