export type CardProps = {
    type: string;
    srcImg: string;
    title: string;
    time?: {
        start: string;
        end: string;
    };
    description: string;
    link?: string;
    color?: string;
}

export type CardStyle = {
    color: string;
}