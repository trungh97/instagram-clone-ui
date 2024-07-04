import { User as OriginalUser } from "firebase/auth";

declare namespace User {
  export interface User extends Omit<OriginalUser, "accessToken"> {
    accessToken: string;
  }
}
