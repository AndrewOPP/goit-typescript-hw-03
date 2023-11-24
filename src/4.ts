class Key {
  private signature: number;

  constructor() {
    this.signature = Math.round(Math.random() * 10);
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key, public name: string) {
    this.key = key;
    this.name = name;
  }

  getKey(): Key {
    return this.key;
  }
}

class House {
  door: boolean;
  key: Key;
  tenants: any[];
  constructor(key: Key) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }

  comeIn(person: Person): void {
    if (this.door) this.tenants.push(person.name);
    this.door = false;
  }

  openDoor(person: Person) {}
}

class MyHouse extends House {
  openDoor(person: Person): void {
    if (this.key === person.getKey()) {
      this.door = true;
      this.comeIn(person);
      console.log(`Wellcome, ${person.name}`);
      return;
    }
    console.log(`Sorry,${person.name}, wrong key `);
    return;
  }
}
const AndrewKey = new Key();

const Andrew = new Person(AndrewKey, "Andrew");
const Kirill = new Person(new Key(), "Kirill");
const Ivan = new Person(AndrewKey, "Ivan");
const AndrewHouse = new MyHouse(AndrewKey);

AndrewHouse.openDoor(Andrew);
AndrewHouse.openDoor(Kirill);
AndrewHouse.openDoor(Ivan);
