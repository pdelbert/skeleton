type ComponentList =
    | 'Grid'
    | 'Container'
    | 'Typography'
    | 'Avatar'
    | 'Image'
    | 'Box'
    | 'Link';

    


export interface IComponent {
    ui_type: ComponentList;
    data: {
        id: string;
        embeddedView?: IComponent;
        items?: Array<IComponent>;
        [key: string]: unknown;
    };
}
