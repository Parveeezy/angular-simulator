type IStatus = 'success' | 'error' | 'loading';
type ITextFormat = 'uppercase' | 'capitalize' | 'lowercase';

type IStudio = 'DC' | 'Marvel' | 'WD' | 'WB'

interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  studio?: IStudio;
}

interface IEmployee extends IUser {
  department: string;
  position: string;
}

let status: IStatus;
let textFormat: ITextFormat;

export const sum = (a: number, b: number): number => {
  return a + b;
};

export const formatString = (str: string, variant: ITextFormat): string => {
  let newStr = str;

  if (variant === 'capitalize') {
    newStr = newStr[0].toUpperCase() + newStr.slice(1);
  } else if (variant === 'uppercase') {
    newStr = newStr.toUpperCase();
  } else if (variant === 'lowercase') {
    newStr = newStr.toLowerCase();
  }
  return newStr;
};

export const filterString = (str: string, separator: string) => str.split(separator).join('');

export const users: IUser[]= [
  {
    id: '1',
    name: 'Dr. Strange',
    email: 'strange@marvel.com',
    phone: '0123456789',
    studio: "Marvel",
  },
  {
    id: '2',
    name: 'Jack Sparrow',
    email: 'sparrow-jack@google.com',
    phone: '0123456789',
    studio: 'WD',
  },
  {
    id: '3',
    name: 'Harry Potter',
    email: 'callmepotter@hogwarts.mag',
    phone: '0123456789',
    studio: "WB",
  },
  {
    id: '4',
    name: 'Hulk',
    email: 'hulkfrommarvel@mail.com',
    phone: '0123456789',
    studio: "Marvel",
  }
]

export const filterUsers = (arr: IUser[], studio: IStudio): IUser[] => {
  return arr.filter((el) => el.studio === studio);
}
