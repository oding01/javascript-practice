const type = {
  frontend: {
    option: 'FRONTEND_DEVELOPER',
    name: '프론트엔드 개발자',
  },
  backend: {
    option: 'BACKEND_DEVELOPER',
    name: '백엔드 개발자',
  },
  manager: {
    option: 'PRODUCT_MANAGER',
    name: '프로덕트 매니저',
  },
  owner: {
    option: 'PRODUCT_OWNER',
    name: '기획자',
  },
  designer: {
    option: 'DESIGNER',
    name: '디자이너',
  },
};

class Company {
  constructor(name, hired) {
    this.name = name;
    this.hired = hired;
  }
  checkHiredEmployee(type) {
    const hiredString = this.convert(this.hired);
    const isExist = hiredString.includes(type.option);
    return console.log(
      `${this.name} 내에 ${type.name}가 ` +
        (isExist ? '있습니다.' : '없습니다.')
    );
  }

  convert(str) {
    const convertString = str.map((hire) => {
      const subString = hire.split(' ');
      const joinString = subString.join('_');
      console.log(joinString);
      const hiredString = joinString.toUpperCase();

      return hiredString;
    });
    return convertString;
  }
}

const company_a = new Company('A Company', [
  'Frontend Developer',
  'Backend Developer',
  'Product Manager',
  'Product Owner',
  'Designer',
]);
company_a.checkHiredEmployee(type.frontend);

const company_b = new Company('B Company', [
  'Backend Developer',
  'Product Owner',
  'Designer',
]);
company_b.checkHiredEmployee(type.frontend);

const company_c = new Company('C Company', [
  'Frontend Developer',
  'Product Manager',
  'Designer',
]);
company_c.checkHiredEmployee(type.frontend);

const company_d = new Company('D Company', [
  'Backend Developer',
  'Product Owner',
]);
company_d.checkHiredEmployee(type.frontend);
