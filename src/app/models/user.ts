export class User {
  id: number;
  name: string;
  skills: string[] = [];
  gifts: string[] = [];
  avatar: {
      skinPigment: string;
      hairColor: string;
      shirtColor: string;
  };
}
