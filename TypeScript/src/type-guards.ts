interface UserInterface {
  type: "user";
  username: string;
  age: number;
  id: number;
}
interface PersonInterface {
  type: "person";
  username: string;
  age: number;
  id: number;
}

function create(value: UserInterface | PersonInterface): void {
  if (value.type === "user") {
    console.log("user", value.username);
  } else if (value.type === "person") {
    console.log("person", value.username);
  }else{
    console.log("other")
  }
}
create({
    type: "user",
    username: "John",
    age: 20,
    id: 1
})
