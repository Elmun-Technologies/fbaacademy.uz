# 订单列表与详情重构 Implementation Plan

> **For agentic workers**
> **IMPORTANT**: Plan every task in detail before starting. Do not begin implementation until the plan is approved.

**Goal:** 重构订单列表(双 tab + 筛选 + 表格)与订单详情(核销 tab / 订单详情 tab), 统一 status 字段, 支持已核销订单查看编辑, Mock 与 API 双环境可用.

**Architecture:** 列表页两个 tab(核销 / 订单详情)共用 OrderFilter + OrderTable, 通过 orderStatus 区分数据范围; 详情页两个 tab 共用 DetailDrawer / VerifyDrawer, 通过 status 控制标题、按钮与 API 调用; Mock 层统一 status: unverified | verified.

**Tech Stack:** React 19, TypeScript, Ant Design, React Router, 现有 Mock API 层.

---

## File Structure

| Action | Path |
|--------|------|
| Modify | `src/pages/Orders/types/orders.types.ts` |
| Modify | `src/pages/Orders/types/order-detail.types.ts` |
| Modify | `src/pages/Orders/mock-data.ts` |
| Modify | `src/pages/Orders/api/mock-orders.ts` |
| Modify | `src/pages/Orders/api/mock-ops.ts` |
| Modify | `src/pages/OrderDetail/api/mock-order-detail.ts` |
| Modify | `src/pages/OrderDetail/types/order-detail.types.ts` |
| Modify | `src/pages/OrderDetail/api/order-detail.ts` |
| Modify | `src/pages/OrderDetail/components/DetailDrawer/index.tsx` |
| Modify | `src/pages/OrderDetail/components/VerifyDrawer/index.tsx` |
| Modify | `src/pages/OrderDetail/components/VerifyDrawer/components/OrderItemTable/index.tsx` |
| Modify | `src/pages/Orders/components/OrderFilter/index.tsx` |
| Modify | `src/pages/Orders/components/OrderTable/index.tsx` |
| Modify | `src/pages/Orders/hooks/useOrders.ts` |
| Modify | `src/pages/Orders/index.tsx` |
| Modify | `src/constants/routes.ts` |
| Modify | `src/pages/OrderDetail/index.tsx` (如需要) |

---

## Phase 1: 数据层与 Mock

### Task 1: 更新 order-detail.types (OrderDetail 模块)

**Files:**
- Modify: `src/pages/OrderDetail/types/order-detail.types.ts`

- [ ] **Step 1: 定义 OrderStatus 与 OrderDetail 字段**

```typescript
export type OrderStatus = 'unverified' | 'verified';

export interface OrderDetail {
  id: string;
  orderNo: string;
  status: OrderStatus;
  verifyTime?: string; // ISO, 仅 verified 时有值
  // ... 保留现有字段
}
```

- [ ] **Step 2: 提交**

```bash
git add src/pages/OrderDetail/types/order-detail.types.ts
git commit -m "refactor(orders): add OrderStatus and verifyTime to OrderDetail types"
```

---

### Task 2: 重构 mock-data.ts

**Files:**
- Modify: `src/pages/Orders/mock-data.ts`

- [ ] **Step 1: 删除 createTime, 增加 status / verifyTime**

- 删除所有 `createTime`
- 增加 `status: 'unverified' | 'verified'`
- 已核销订单增加 `verifyTime` (ISO 字符串)
- 建议: 约 60% unverified, 40% verified

- [ ] **Step 2: 提交**

```bash
git add src/pages/Orders/mock-data.ts
git commit -m "refactor(orders): mock data status and verifyTime, remove createTime"
```

---

### Task 3: 更新 Mock API

**Files:**
- Modify: `src/pages/Orders/api/mock-orders.ts`
- Modify: `src/pages/Orders/api/mock-ops.ts`
- Modify: `src/pages/OrderDetail/api/mock-order-detail.ts`

- [ ] **Step 1: mock-orders.ts**

- `getOrderList(params)`: 支持 `orderStatus?: 'unverified' | 'all'`
  - `unverified`: 仅 `status === 'unverified'`
  - `all` 或未传: 全部
- 删除 `createTime` 相关筛选
- 保留 `verifyTimeStart` / `verifyTimeEnd` 筛选(仅对已核销或全部列表中 verified 行有意义)

- [ ] **Step 2: mock-ops.ts verifyOrder**

- 核销成功后: `status = 'verified'`, 设置 `verifyTime = new Date().toISOString()`

- [ ] **Step 3: mock-order-detail.ts**

- 返回带 `status`, `verifyTime` 的 OrderDetail
- `updateOrderDetail`: 允许 verified 订单更新(不调用 verify)

- [ ] **Step 4: 提交**

```bash
git add src/pages/Orders/api/mock-orders.ts src/pages/Orders/api/mock-ops.ts src/pages/OrderDetail/api/mock-order-detail.ts
git commit -m "feat(orders): mock list filter by orderStatus, verify sets status verified"
```

---

### Task 4: 更新 Orders 列表 types

**Files:**
- Modify: `src/pages/Orders/types/orders.types.ts`

- [ ] **Step 1: Order 接口**

```typescript
export type OrderStatus = 'unverified' | 'verified';

export interface Order {
  id: string;
  orderNo: string;
  status: OrderStatus;
  verifyTime?: string;
  // 删除 createTime
  // 保留 verifyTime 筛选字段在 OrderFilterValues
}
```

- [ ] **Step 2: OrderFilterValues**

- 删除 `status` 字段
- 删除 `createTimeStart` / `createTimeEnd`(若有)
- 保留 `verifyTimeStart` / `verifyTimeEnd`

- [ ] **Step 3: 提交**

```bash
git add src/pages/Orders/types/orders.types.ts
git commit -m "refactor(orders): Order status field, filter without status dropdown"
```

---

## Phase 2: 订单列表页

### Task 5: OrderFilter 组件

**Files:**
- Modify: `src/pages/Orders/components/OrderFilter/index.tsx`

- [ ] 移除 status 下拉
- [ ] 移除 createTime 相关表单项
- [ ] 保留: 订单号、用户、商品、核销时间范围等

- [ ] **提交**

```bash
git add src/pages/Orders/components/OrderFilter/index.tsx
git commit -m "refactor(orders): simplify OrderFilter per spec"
```

---

### Task 6: OrderTable 组件

**Files:**
- Modify: `src/pages/Orders/components/OrderTable/index.tsx`

- [ ] 删除 createTime 列
- [ ] 增加 status 列(未核销 / 已核销)
- [ ] verifyTime 列: 仅当 `record.status === 'verified'` 时显示
- [ ] 操作列:
  - `unverified`: 按钮「核销」, 跳转 `/orders/verify?id=xxx`(不带 status)
  - `verified`: 按钮「查看」, 跳转 `/orders/detail?id=xxx&status=verified`

- [ ] **提交**

```bash
git add src/pages/Orders/components/OrderTable/index.tsx
git commit -m "refactor(orders): table columns and actions by status"
```

---

### Task 7: useOrders Hook 与列表 API

**Files:**
- Modify: `src/pages/Orders/hooks/useOrders.ts`
- Modify: `src/pages/Orders/api/orders.ts` (API mode 参数)

- [ ] Hook 增加 `orderStatus: 'unverified' | 'all'`, 传给 getOrderList
- [ ] API mode: query 带 orderStatus, 分页与筛选与 Mock 一致

- [ ] **提交**

```bash
git add src/pages/Orders/hooks/useOrders.ts src/pages/Orders/api/orders.ts
git commit -m "feat(orders): orderStatus tab drives list query"
```

---

### Task 8: Orders 页面 Tab

**Files:**
- Modify: `src/pages/Orders/index.tsx`

- [ ] Tab1: 核销 → `orderStatus='unverified'`
- [ ] Tab2: 订单详情 → `orderStatus='all'`
- [ ] 切换 tab 重置分页并重新拉列表

- [ ] **提交**

```bash
git add src/pages/Orders/index.tsx
git commit -m "feat(orders): verify vs detail tabs on list page"
```

---

### Task 9: 路由常量

**Files:**
- Modify: `src/constants/routes.ts`

- [ ] 确认/新增:
  - `ORDERS_VERIFY: '/orders/verify'`
  - `ORDERS_DETAIL: '/orders/detail'`
- [ ] 列表核销链接仅 `?id=`, 详情链接带 `?id=&status=verified` 当已核销

- [ ] **提交**

```bash
git add src/constants/routes.ts
git commit -m "chore(routes): order verify and detail paths"
```

---

## Phase 3: 订单详情页

### Task 10: OrderDetail API types 与 client

**Files:**
- Modify: `src/pages/OrderDetail/types/order-detail.types.ts`
- Modify: `src/pages/OrderDetail/api/order-detail.ts`

- [ ] getOrderDetail(id), updateOrderDetail, verifyOrder 与 Mock 对齐
- [ ] 环境变量切换 Mock / 真实 API

- [ ] **提交**

```bash
git add src/pages/OrderDetail/types/order-detail.types.ts src/pages/OrderDetail/api/order-detail.ts
git commit -m "feat(order-detail): API client with status and verifyTime"
```

---

### Task 11: DetailDrawer (订单详情 tab)

**Files:**
- Modify: `src/pages/OrderDetail/components/DetailDrawer/index.tsx`

- [ ] 标题: verified →「订单详情」, unverified →「订单核销」
- [ ] verified: 顶部 warning Alert「此订单已核销…」
- [ ] verified: 隐藏核销按钮; 保留导出、关闭; 保存仅 update + toast
- [ ] unverified: 原核销流程

- [ ] **提交**

```bash
git add src/pages/OrderDetail/components/DetailDrawer/index.tsx
git commit -m "feat(order-detail): DetailDrawer verified vs unverified UX"
```

---

### Task 12: VerifyDrawer (核销 tab) API mode

**Files:**
- Modify: `src/pages/OrderDetail/components/VerifyDrawer/index.tsx`

- [ ] Mock/API 双模式加载详情
- [ ] 核销: verify API → 成功 toast → 可选跳转或刷新

- [ ] **提交**

```bash
git add src/pages/OrderDetail/components/VerifyDrawer/index.tsx
git commit -m "feat(verify-drawer): API mode and verify flow"
```

---

### Task 13: VerifyDrawer OrderItemTable 与已核销编辑

**Files:**
- Modify: `src/pages/OrderDetail/components/VerifyDrawer/components/OrderItemTable/index.tsx`

- [ ] 与 DetailDrawer 一致: verified 可编辑字段, 不可核销
- [ ] 保存成功 message.success

- [ ] **提交**

```bash
git add src/pages/OrderDetail/components/VerifyDrawer/components/OrderItemTable/index.tsx
git commit -m "feat(verify): editable verified orders with save toast"
```

---

## Phase 4: 测试验证

### Task 14: 手动测试清单

- [ ] 核销 tab 仅 unverified
- [ ] 订单详情 tab 全部订单
- [ ] 筛选无 status / createTime; 核销时间筛选有效
- [ ] 表格列与操作按钮符合 status
- [ ] 详情页双 tab、Alert、按钮逻辑
- [ ] Mock 与 API mode 各跑通 list / detail / verify / update

- [ ] **最终提交(若有修复)**

```bash
git add -A
git commit -m "test(orders): verify list and detail refactor checklist"
```

---

## 关键约束 (验收)

| 规则 | 说明 |
|------|------|
| 核销 tab | 默认仅 `status=unverified` |
| 订单详情 tab | 全部订单 |
| 核销 URL | `/orders/verify?id=xxx`, 列表不传 status |
| 已核销 | 无核销按钮; 可编辑; save 仅 update; toast |
| 搜索表单 | 无 createTime; 无 status 下拉 |
| 双环境 | Mock + API 均需可用 |
