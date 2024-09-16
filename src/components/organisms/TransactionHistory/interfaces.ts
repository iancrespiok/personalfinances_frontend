type TransactionItem = {
    cat: string;
    name: string;
    spent: boolean;
    value: number;
    id: number;
}

export type Props = {
    dataRender: TransactionItem[];
}

