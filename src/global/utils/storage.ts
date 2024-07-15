export enum StorageKey {
  TOKEN = 'token',
}

type SetProps = {
  key: StorageKey;
  value: string;
};

const get = async <T>(key: StorageKey): Promise<T | null> => {
  const itemString = localStorage.getItem(key);
  if (!itemString) return null;
  return JSON.parse(itemString);
};

const set = async ({ key, value }: SetProps): Promise<void> => {
  localStorage.setItem(key, value);
};

const remove = async (key: StorageKey): Promise<void> => {
  localStorage.removeItem(key);
};

const clear = async (): Promise<void> => {
  localStorage.clear();
};

export default {
  get,
  set,
  remove,
  clear,
};
