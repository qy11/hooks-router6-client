import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Detail from "./views/Detail";
import Cart from "./views/Cart";
import Invoice from "./views/Invoice";
import InvoiceId from "./views/InvoiceId";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="invoices" element={<Invoice />}>
            <Route path=":invoiceId" element={<InvoiceId />} />
            <Route
              index
              element={
                // 本质上没有路由，空白页面
                <main>
                  <p>您还没有选择任何内容</p>
                </main>
              }
            />
          </Route>

          <Route
            path="*"
            element={
              <main>
                <p>页面走丢了</p>
              </main>
            }
          />
          {/* 无dfs 匹配，默认路由 */}
        </Route>
        <Route path={`detail/:id/:cid/:vid/:count`} element={<Detail />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
/**
 * 路由嵌套 Outlet
 * 无路由匹配 path="*"
 * url路由传参 useParams 子路由嵌套 path=":invoiceId"
 * 索引路由
 *    -父路由的默认路由
 * NavLink
 * 搜索参数
 * 自定义NavLink
 */
export default App;
