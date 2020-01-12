import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  authError: null
};

const sampleServiceNames = [
  {
    serviceName: 'Cut',
    price: 200,
    blowDry: 10,
    coat: 0,
    customer: 0,
    cut: 80,
    hairSpa: 0,
    massage: 0,
    nail: 0,
    product: 0,
    steam: 0,
    thin: 0,
    tint: 0,
    wash: 10
  },
  {
    serviceName: 'Tint',
    price: 2400,
    blowDry: 10,
    coat: 0,
    customer: 0,
    cut: 0,
    hairSpa: 10,
    massage: 20,
    nail: 10,
    product: 0,
    steam: 10,
    thin: 0,
    tint: 30,
    wash: 10
  },
  {
    serviceName: 'Hair Spa',
    price: 1350,
    blowDry: 10,
    coat: 0,
    customer: 0,
    cut: 0,
    hairSpa: 80,
    massage: 0,
    nail: 0,
    product: 0,
    steam: 0,
    thin: 0,
    tint: 0,
    wash: 10
  },
  {
    serviceName: 'Nail',
    price: 850,
    blowDry: 0,
    coat: 0,
    customer: 0,
    cut: 0,
    hairSpa: 0,
    massage: 40,
    nail: 60,
    product: 0,
    steam: 0,
    thin: 0,
    tint: 0,
    wash: 0
  }
];

const sampleEmployees = [
  {
    id: '23IlFiRvpeh0lbjlhfoo',
    address: '',
    createdAt: { seconds: 1571386327, nanoseconds: 50000000 },
    dob: '',
    firstname: 'Molada',
    lastname: 'Sricharuen',
    phone: '',
    position: 'Salon Director',
    username: 'Mol'
  },
  {
    id: '7Epzf21WK8yrVhZr9l3L',
    address: '',
    createdAt: { seconds: 1571382259, nanoseconds: 813000000 },
    dob: '',
    firstname: 'pitcha',
    lastname: 'chan',
    phone: '0877777777',
    position: 'Top Stylist',
    username: 'Yoong'
  },
  {
    id: 'MpWDEfiCqkhwsxGer2Ys',
    address: '',
    createdAt: { seconds: 1571497327, nanoseconds: 169000000 },
    dob: '',
    firstname: 'jirapha',
    lastname: 'kasemsarn',
    phone: '',
    position: 'Cleaner',
    username: 'jina'
  },
  {
    id: 'YTfZMd2ThMv7hdi32TnG',
    address: '',
    createdAt: { seconds: 1571385129, nanoseconds: 718000000 },
    dob: '',
    firstname: 'kantapo',
    lastname: 'cgan',
    phone: '',
    position: 'Senior Stylist',
    username: 'Yeem'
  },
  {
    id: 'dQZy38ObTGXy8exdqjxp',
    address: '19/108 oidfdf, setfweg,wqegweg, 10230',
    dob: '1992-08-12',
    firstname: 'Lumpan',
    lastname: 'Poosri',
    phone: '0888888888',
    position: 'Stylist',
    username: 'Pan'
  },
  {
    id: 'n8gSwhDmTpFGOjMMMaWQ',
    address: '',
    createdAt: { seconds: 1571386239, nanoseconds: 45000000 },
    dob: '',
    firstname: 'Bua',
    lastname: 'Buatisorn',
    phone: '0966666666',
    position: 'Junior Stylist',
    username: 'Bua'
  }
];

const sampleReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login failed'
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case SIGNOUT_SUCCESS:
      return state;
    default:
      return { ...state, ordered: { serviceName: sampleServiceNames, employees: sampleEmployees } };
  }
};

export default sampleReducer;
