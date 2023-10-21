export interface BoardInterface {
  id: number;
  name: string;
  content: {
    todo: string[];
    doing: string[];
    done: string[];
  };
}
