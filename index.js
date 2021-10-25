const motoboys = [
  {
    name: "Moto 1",
    deliveryCost: 2,
    exclusiveStoreId: null,
  },
  {
    name: "Moto 2",
    deliveryCost: 2,
    exclusiveStoreId: null,
  },
  {
    name: "Moto 3",
    deliveryCost: 2,
    exclusiveStoreId: null,
  },
  {
    name: "Moto 4",
    deliveryCost: 2,
    exclusiveStoreId: 123,
  },
  {
    name: "Moto 5",
    deliveryCost: 3,
    exclusiveStoreId: null,
  },
];

const stores = [
  {
    id: 123,
    name: "Loja 1",
    orders: [50, 50, 50],
    bonus: 0.05,
  },
  {
    id: 456,
    name: "Loja 2",
    orders: [50, 50, 50, 50],
    bonus: 0.05,
  },
  {
    id: 789,
    name: "Loja 3",
    orders: [50, 50, 100],
    bonus: 0.15,
  },
];

const sumOf = (array) => {
  return array.reduce((prev, curr) => prev + curr);
};

const getTotal = (motoboy) => {
  if (!motoboy) {
    return "É necessário especificar um motoboy.\n";
  }

  let orderAmount = 0;
  let total = 0;

  if (motoboy.exclusiveStoreId) {
    const exclusiveStore = stores.find(
      (store) => store.id === motoboy.exclusiveStoreId
    );

    orderAmount = exclusiveStore.orders.length;
    total =
      orderAmount * motoboy.deliveryCost +
      sumOf(exclusiveStore.orders) * exclusiveStore.bonus;

    return `O ${motoboy.name} atende apenas a ${
      exclusiveStore.name
    }.\nPossui ${orderAmount} pedido(s).\nRecebe R$${total.toFixed(2)}.\n`;
  }

  for (const store of stores) {
    orderAmount = store.orders.length;
    total +=
      orderAmount * motoboy.deliveryCost + sumOf(store.orders) * store.bonus;
  }

  return `O ${
    motoboy.name
  } atende todas as lojas.\nPossui ${orderAmount} pedido(s).\nRecebe R$${total.toFixed(
    2
  )}.\n`;
};

// Testes

for (const motoboy of motoboys) {
  console.log(getTotal(motoboy));
}

console.log(getTotal());
