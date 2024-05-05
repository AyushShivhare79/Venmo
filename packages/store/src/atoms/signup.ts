import { atom } from "recoil";

export const usernameAtom = atom<string>({
  key: "username",
  default: "",
});

export const passwordAtom = atom<string>({
  key: "password",
  default: "",
});

export const firstNameAtom = atom<string>({
  key: "firstName",
  default: "",
});

export const lastNameAtom = atom<string>({
  key: "lastName",
  default: "",
});

export const phoneNumberAtom = atom<string>({
  key: "phoneNumber",
  default: "",
});
