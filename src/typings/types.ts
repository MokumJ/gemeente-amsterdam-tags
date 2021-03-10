export interface Tag {
    name: string;
    id: string;
}
export interface List {
    id: string;
    name: string;
    color: string;
    shape: string;
    tags: Tag[];
}
