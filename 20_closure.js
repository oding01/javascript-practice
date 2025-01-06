function exchange_rate(type) {
  switch (type) {
    case 'USD':
      return 1500; // = 1달러
    case 'JPY':
      return 10; // = 1엔
    case 'THB':
      return 40; // = 1바트
  }
}

function currency_exchanger(initial_value, type) {
  let exchange_money = exchange_rate(type);
  const setMoney = (value) => {
    exchange_money = value;
  };
  const getMoney = () => initial_value * exchange_money;
  return [setMoney, getMoney];
}

const [setUSD, getUSDtoKRW] = currency_exchanger(1000, 'USD');
console.log(getUSDtoKRW());
setUSD(1230);
console.log(getUSDtoKRW());

const [setJPY, getJPYtoKRW] = currency_exchanger(1000, 'JPY');
console.log(getJPYtoKRW());
setJPY(25);
console.log(getJPYtoKRW());

const [setTHB, getTHBtoKRW] = currency_exchanger(1000, 'THB');
console.log(getTHBtoKRW());
setTHB(60);
console.log(getTHBtoKRW());
