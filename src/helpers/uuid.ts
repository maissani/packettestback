
/**
 * Create an UUID V4
 *
 * @author Mehdi AISSANI <contact@mehdiaissani.com>
 *
 * @returns {string} A generated UUIDV4
 */
const uuid  = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    // tslint:disable-next-line
    const r = Math.random() * 16 | 0, v = c === "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export default uuid;
