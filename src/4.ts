class Key {
  private signature: number = Math.round(Math.random() * 10);

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key, public name: string) {}

  getKey(): Key {
    return this.key;
  }
}

class House {
  public door: boolean = false;
  public tenants: Person[] = [];
  constructor(public key: Key) {}

  comeIn(person: Person): void {
    if (this.door) this.tenants.push(person);
    this.door = false;
  }

  openDoor(key: Key) {}
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log("Door has opened");
    }
    console.log(`Sorry, wrong key `);
    return;
  }
}
const AndrewKey = new Key();

const Kirill = new Person(new Key(), "Kirill");
const Ivan = new Person(new Key(), "Ivan");
const AndrewHouse = new MyHouse(AndrewKey);

AndrewHouse.openDoor(AndrewKey);
AndrewHouse.comeIn(Kirill);

AndrewHouse.openDoor(AndrewKey);
AndrewHouse.comeIn(Ivan);
