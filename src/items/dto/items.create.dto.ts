export class ItemCreateDTO {
    readonly item_name : string;
    readonly item_quantity : number;
    readonly item_description : string;
}

export class ItemEditDTO {
    readonly name : string;
}