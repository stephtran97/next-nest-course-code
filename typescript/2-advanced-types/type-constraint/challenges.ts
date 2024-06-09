type IsUser<T> = T extends { name: string; age: number } ? true : false;

type T1 = IsUser<{ name: 'Gabriel' }>; // false
type T2 = IsUser<{ name: 'Alice'; age: 32 }>; // true

type IsUser<T> = T extends {
  name: string;
  team: { memberCount: number };
}
  ? true
  : false;

type T1 = IsUser<{
  name: 'Gabriel';
  team: {
    memberCount: 12;
    name: 'dataviz'; // <- extra prop
  };
}>; // true

type T2 = IsUser<{ name: 'Alice' }>; // false
