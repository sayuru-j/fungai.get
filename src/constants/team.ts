import { Member } from "@/@types";

export const students: Array<Member> = [
  {
    name: "Silva W. S. J",
    avatar: {
      url: require("../public/avatars/me.jpeg"),
      alt: "Sayuru's avatar",
    },
    contact: {
      linkedIn: "https://www.linkedin.com/in/sayuru-jithsara",
      email: "sayuru@badbyte.cc",
    },
    organization: "Sri Lanka Institute Of Information Technology",
    tags: ["Group Leader"],
    position: "Undergraduate",
    department: "Information Technology",
  },
  {
    name: "W. A. K. A Dilshan",
    avatar: {
      url: require("../public/avatars/waka.png"),
      alt: "Dila's avatar",
    },
    contact: {
      linkedIn: "",
      email: "wakadilshan@gmail.com",
    },
    organization: "Sri Lanka Institute Of Information Technology",
    tags: ["Group Member"],
    position: "Undergraduate",
    department: "Information Technology",
  },
  {
    name: "Sachintha G. G. R",
    avatar: {
      url: require("../public/avatars/ranindu.png"),
      alt: "Ranindu's avatar",
    },
    contact: {
      linkedIn: "",
      email: "ranindusachintha@gmail.com",
    },
    organization: "Sri Lanka Institute Of Information Technology",
    tags: ["Group Member"],
    position: "Undergraduate",
    department: "Information Technology",
  },
  {
    name: "G. A. I. P Kumara",
    avatar: {
      url: require("../public/avatars/imantha.png"),
      alt: "gaip's avatar",
    },
    contact: {
      linkedIn: "",
      email: "imanthapiyumal@gmail.com",
    },
    organization: "Sri Lanka Institute Of Information Technology",
    tags: ["Group Member"],
    position: "Undergraduate",
    department: "Information Technology",
  },
];

export const supervisors: Array<Member> = [
  {
    name: "Ms. Jenny Krishara",
    avatar: {
      url: require("../public/avatars/miss_jenny.jpeg"),
      alt: "Ranindu's avatar",
    },
    contact: {
      linkedIn: "",
      email: "jenny.k@sliit.lk",
    },
    organization: "Sri Lanka Institute Of Information Technology",
    tags: ["Supervisor"],
    position: "Senior Lecturer",
    department: "Information Technology",
  },
];
